import { useParams, Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { PAGE_SEO } from "../constants/seo";
import { NEWS } from "../constants/navigation";
import Badge from "../components/ui/Badge";
import ScrollReveal from "../components/shared/ScrollReveal";
import { Calendar, ArrowLeft, Clock, Tag, Image as ImageIcon, FileText, Download, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function NewsDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [previewImage, setPreviewImage] = useState(null);

  const news = NEWS.find((n) => n.id === Number(id));

  if (!news) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-4">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-heading font-poppins mb-4">News Not Found</h1>
          <p className="text-sm sm:text-base text-paragraph mb-6">The news article you are looking for does not exist.</p>
          <Link to="/news" className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 font-medium text-sm">
            <ArrowLeft className="w-4 h-4" /> Back to News
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateStr) =>
    new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  const formatReadTime = (text) => {
    const words = text.split(" ").length;
    return Math.max(1, Math.ceil(words / 200));
  };

  const attachments = news.attachments || [];
  const images = attachments.filter((a) => a.type === "image");
  const pdfs = attachments.filter((a) => a.type === "pdf");

  const currentIdx = images.findIndex((img) => img.url === previewImage?.url);

  const goNextImg = () => {
    if (currentIdx < images.length - 1) setPreviewImage(images[currentIdx + 1]);
  };
  const goPrevImg = () => {
    if (currentIdx > 0) setPreviewImage(images[currentIdx - 1]);
  };

  const otherNews = NEWS.filter((n) => n.id !== news.id).slice(0, 3);

  const getCategoryVariant = (category) => {
    const map = {
      Achievement: "success",
      Infrastructure: "secondary",
      Event: "primary",
      Social: "accent",
    };
    return map[category] || "muted";
  };

  return (
    <>
      <Helmet>
        <title>{news.title} - News</title>
        <meta name="description" content={news.excerpt} />
        <meta property="og:title" content={news.title} />
        <meta property="og:description" content={news.excerpt} />
        {news.image && <meta property="og:image" content={news.image} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={news.title} />
        <meta name="twitter:description" content={news.excerpt} />
        {news.image && <meta name="twitter:image" content={news.image} />}
      </Helmet>

      {/* Hero Image */}
      <div className="relative h-[30vh] sm:h-[35vh] md:h-[40vh] min-h-[200px] sm:min-h-[250px] bg-gradient-to-br from-primary-600 to-primary-800">
        {news.image && (
          <img
            src={news.image}
            alt={news.title}
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-1.5 text-white/70 hover:text-white text-xs sm:text-sm mb-3 sm:mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
              <Badge variant={getCategoryVariant(news.category)}>{news.category}</Badge>
              <span className="flex items-center gap-1.5 text-white/60 text-xs sm:text-sm">
                <Clock className="w-3.5 h-3.5" /> {formatReadTime(news.body || news.excerpt)} min read
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white font-poppins leading-tight">
              {news.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-paragraph mb-6 sm:mb-8 pb-5 sm:pb-6 border-b border-border">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(news.date)}</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Tag className="w-4 h-4" />
                <span>{news.category}</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="prose prose-sm sm:prose lg:prose-lg max-w-none">
              {(news.body || news.excerpt).split("\n\n").map((paragraph, i) => (
                <p key={i} className="text-sm sm:text-base text-paragraph leading-relaxed mb-4 sm:mb-5">
                  {paragraph}
                </p>
              ))}
            </div>
          </ScrollReveal>

          {/* Attachments */}
          {attachments.length > 0 && (
            <ScrollReveal>
              <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-border space-y-5 sm:space-y-6">
                {images.length > 0 && (
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-heading font-poppins mb-3 sm:mb-4 flex items-center gap-2">
                      <ImageIcon className="w-5 h-5" />
                      Photos ({images.length})
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                      {images.map((img, i) => (
                        <button
                          key={i}
                          onClick={() => setPreviewImage(img)}
                          className="aspect-video rounded-xl overflow-hidden bg-primary-100 hover:ring-2 hover:ring-primary-500 transition-all group"
                        >
                          <img
                            src={img.url}
                            alt={img.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {pdfs.length > 0 && (
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-heading font-poppins mb-3 sm:mb-4 flex items-center gap-2">
                      <FileText className="w-5 h-5" />
                      Documents ({pdfs.length})
                    </h3>
                    <div className="space-y-2 sm:space-y-3">
                      {pdfs.map((pdf, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-red-50 rounded-xl border border-red-100"
                        >
                          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-red-100 flex items-center justify-center shrink-0">
                            <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs sm:text-sm font-medium text-heading truncate">{pdf.name}</p>
                            <p className="text-xs text-paragraph">PDF Document</p>
                          </div>
                          <a
                            href={pdf.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 bg-red-500 text-white text-xs font-medium rounded-lg hover:bg-red-600 transition-colors shrink-0"
                          >
                            <Download className="w-3.5 h-3.5" />
                            <span className="hidden sm:inline">Download</span>
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </ScrollReveal>
          )}

          {/* Other News */}
          {otherNews.length > 0 && (
            <ScrollReveal>
              <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-border">
                <h3 className="text-lg sm:text-xl font-bold text-heading font-poppins mb-4 sm:mb-6">More News</h3>
                <div className="grid sm:grid-cols-3 gap-3 sm:gap-4">
                  {otherNews.map((item) => (
                    <Link
                      key={item.id}
                      to={`/news/${item.id}`}
                      className="group p-3 sm:p-4 rounded-xl border border-border hover:border-primary-200 hover:bg-primary-50/50 transition-all"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant={getCategoryVariant(item.category)} className="text-[10px]">
                          {item.category}
                        </Badge>
                        <span className="text-xs text-paragraph">{formatDate(item.date)}</span>
                      </div>
                      <h4 className="text-xs sm:text-sm font-semibold text-heading line-clamp-2 group-hover:text-primary-500 transition-colors">
                        {item.title}
                      </h4>
                    </Link>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* Image Lightbox */}
      {previewImage && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90"
          onClick={() => setPreviewImage(null)}
        >
          <button
            onClick={() => setPreviewImage(null)}
            aria-label="Close lightbox"
            className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
          >
            <span className="sr-only">Close</span>
            <span className="text-lg">✕</span>
          </button>

          {currentIdx > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); goPrevImg(); }}
              aria-label="Previous image"
              className="absolute left-2 sm:left-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
          )}

          <img
            src={previewImage.url}
            alt={previewImage.name}
            className="max-w-[92vw] sm:max-w-[90vw] max-h-[80vh] sm:max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          {currentIdx < images.length - 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); goNextImg(); }}
              aria-label="Next image"
              className="absolute right-2 sm:right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
          )}

          <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 sm:gap-4">
            <span className="text-white/80 text-xs sm:text-sm">{previewImage.name}</span>
            <span className="text-white/40 text-xs sm:text-sm">{currentIdx + 1} / {images.length}</span>
          </div>
        </div>
      )}
    </>
  );
}
