import { useState } from "react";
import Badge from "../ui/Badge";
import Modal from "../ui/Modal";
import { Calendar, FileText, Eye, Image as ImageIcon, Download, X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../../utils/cn";
import { motion } from "framer-motion";
import { fadeInUp, viewportConfig } from "../../animations";

export default function NoticeCard({ notice, className }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getCategoryVariant = (category) => {
    const map = {
      Examination: "danger",
      Holiday: "accent",
      Admission: "success",
      Event: "secondary",
      Meeting: "primary",
    };
    return map[category] || "muted";
  };

  const attachments = notice.attachments || [];
  const images = attachments.filter((a) => a.type === "image");
  const pdfs = attachments.filter((a) => a.type === "pdf");

  const currentImgIdx = images.findIndex((img) => img.url === previewImage?.url);

  const goNextImg = () => {
    if (currentImgIdx < images.length - 1) setPreviewImage(images[currentImgIdx + 1]);
  };
  const goPrevImg = () => {
    if (currentImgIdx > 0) setPreviewImage(images[currentImgIdx - 1]);
  };

  return (
    <>
      <motion.div
        {...fadeInUp}
        viewport={viewportConfig}
        onClick={() => setModalOpen(true)}
        className={cn(
          "bg-white rounded-2xl border border-border shadow-card hover-lift p-5 cursor-pointer group",
          notice.isImportant && "border-l-4 border-l-danger",
          className
        )}
      >
        <div className="flex items-start justify-between gap-3 mb-3">
          <Badge variant={getCategoryVariant(notice.category)}>{notice.category}</Badge>
          <div className="flex items-center gap-2">
            {notice.isImportant && <Badge variant="danger">Important</Badge>}
            <Eye className="w-4 h-4 text-paragraph/40 group-hover:text-primary-500 transition-colors" />
          </div>
        </div>
        <h3 className="text-base font-semibold text-heading font-poppins mb-2 line-clamp-2 group-hover:text-primary-500 transition-colors">
          {notice.title}
        </h3>
        <p className="text-sm text-paragraph mb-3 line-clamp-2">{notice.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs text-paragraph">
            <Calendar className="w-3.5 h-3.5" />
            {formatDate(notice.date)}
          </div>
          {(notice.hasPDF || images.length > 0) && (
            <span className="flex items-center gap-1.5 text-xs text-primary-500">
              {images.length > 0 && <ImageIcon className="w-3.5 h-3.5" />}
              {notice.hasPDF && <FileText className="w-3.5 h-3.5" />}
              {attachments.length} attachment{attachments.length !== 1 ? "s" : ""}
            </span>
          )}
        </div>
      </motion.div>

      {/* Notice Detail Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        size="lg"
      >
        <div className="space-y-5">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2 flex-wrap">
              <Badge variant={getCategoryVariant(notice.category)}>{notice.category}</Badge>
              {notice.isImportant && <Badge variant="danger">Important</Badge>}
            </div>
          </div>

          <h2 className="text-xl font-bold text-heading font-poppins">
            {notice.title}
          </h2>

          <div className="flex items-center gap-2 text-sm text-paragraph">
            <Calendar className="w-4 h-4" />
            <span>Published on {formatDate(notice.date)}</span>
          </div>

          <div className="border-t border-border pt-5">
            <p className="text-paragraph leading-relaxed whitespace-pre-line">
              {notice.description}
            </p>
          </div>

          {/* Image Attachments */}
          {images.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-heading flex items-center gap-2">
                <ImageIcon className="w-4 h-4" />
                Images ({images.length})
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
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

          {/* PDF Attachments */}
          {pdfs.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-heading flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Documents ({pdfs.length})
              </h4>
              <div className="space-y-2">
                {pdfs.map((pdf, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 bg-red-50 rounded-xl border border-red-100"
                  >
                    <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center shrink-0">
                      <FileText className="w-5 h-5 text-red-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-heading truncate">{pdf.name}</p>
                      <p className="text-xs text-paragraph">PDF Document</p>
                    </div>
                    <a
                      href={pdf.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-red-500 text-white text-xs font-medium rounded-lg hover:bg-red-600 transition-colors shrink-0"
                    >
                      <Download className="w-3.5 h-3.5" />
                      Download
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {attachments.length === 0 && !notice.hasPDF && (
            <div className="border-t border-border pt-4">
              <p className="text-sm text-paragraph italic">No attachments for this notice.</p>
            </div>
          )}
        </div>
      </Modal>

      {/* Image Lightbox */}
      {previewImage && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90"
          onClick={() => setPreviewImage(null)}
        >
          <button
            onClick={() => setPreviewImage(null)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>

          {currentImgIdx > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); goPrevImg(); }}
              className="absolute left-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
          )}

          <img
            src={previewImage.url}
            alt={previewImage.name}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          {currentImgIdx < images.length - 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); goNextImg(); }}
              className="absolute right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          )}

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4">
            <span className="text-white/80 text-sm">{previewImage.name}</span>
            <span className="text-white/40 text-sm">{currentImgIdx + 1} / {images.length}</span>
          </div>
        </div>
      )}
    </>
  );
}
