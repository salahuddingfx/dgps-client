import { useState, useEffect, useCallback } from "react";
import { Helmet } from "react-helmet-async";
import { PAGE_SEO, SEO_DEFAULTS } from "../constants/seo";
import { BreadcrumbJsonLd } from "../components/shared/JsonLd";
import PageHeader from "../components/shared/PageHeader";
import ScrollReveal from "../components/shared/ScrollReveal";
import SectionHeader from "../components/shared/SectionHeader";
import { TESTIMONIALS } from "../constants/newData";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function TestimonialsPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const totalSlides = TESTIMONIALS.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? "text-amber-400 fill-amber-400" : "text-gray-300"}`}
      />
    ));
  };

  const getVisibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      result.push(TESTIMONIALS[(currentSlide + i) % totalSlides]);
    }
    return result;
  };

  return (
    <>
      <Helmet>
        <title>{PAGE_SEO.testimonials.title}</title>
        <meta name="description" content={PAGE_SEO.testimonials.description} />
        <meta property="og:title" content={PAGE_SEO.testimonials.title} />
        <meta property="og:description" content={PAGE_SEO.testimonials.description} />
        <meta property="og:image" content={`${SEO_DEFAULTS.siteUrl}${PAGE_SEO.testimonials.image}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_SEO.testimonials.title} />
        <meta name="twitter:description" content={PAGE_SEO.testimonials.description} />
        <meta name="twitter:image" content={`${SEO_DEFAULTS.siteUrl}${PAGE_SEO.testimonials.image}`} />
      </Helmet>

      <BreadcrumbJsonLd items={[{ label: "Home", path: "/" }, { label: "Testimonials" }]} />

      <PageHeader
        title="Parent Testimonials"
        description="Hear what our parents and students have to say about DGPS."
        breadcrumbs={[{ label: "Testimonials" }]}
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto mb-12">
              <div className="relative bg-gradient-to-br from-primary-50 to-primary-100 rounded-3xl p-8 md:p-12 text-center">
                <Quote className="w-12 h-12 text-primary-500/30 mx-auto mb-4" />
                <p className="text-lg md:text-xl text-heading font-poppins leading-relaxed mb-6 italic">
                  "{TESTIMONIALS[currentSlide].quote}"
                </p>
                <div className="flex items-center justify-center gap-1 mb-4">
                  {renderStars(TESTIMONIALS[currentSlide].rating)}
                </div>
                <h4 className="text-lg font-bold text-heading font-poppins">
                  {TESTIMONIALS[currentSlide].parentName}
                </h4>
                <p className="text-sm text-paragraph">
                  {TESTIMONIALS[currentSlide].relation} of a {TESTIMONIALS[currentSlide].childClass} student
                </p>

                <div className="flex items-center justify-center gap-4 mt-8">
                  <button
                    onClick={() => {
                      prevSlide();
                      setIsAutoPlaying(false);
                    }}
                    className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center hover:bg-primary-50 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5 text-paragraph" />
                  </button>
                  <div className="flex gap-2">
                    {TESTIMONIALS.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setCurrentSlide(index);
                          setIsAutoPlaying(false);
                        }}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          index === currentSlide ? "bg-primary-500 w-8" : "bg-paragraph/20 w-2 hover:bg-paragraph/40"
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={() => {
                      nextSlide();
                      setIsAutoPlaying(false);
                    }}
                    className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center hover:bg-primary-50 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5 text-paragraph" />
                  </button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionHeader
            subtitle="All Testimonials"
            title="What Parents Say"
            description="Real stories from real families in our school community."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((testimonial, index) => (
              <ScrollReveal key={testimonial.id} animation="fadeUp" delay={index * 0.08}>
                <div className="bg-white rounded-2xl border border-border p-6 hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                  <Quote className="w-8 h-8 text-primary-500/20 mb-4" />
                  <p className="text-sm text-paragraph leading-relaxed flex-1 mb-4">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-1 mb-3">
                    {renderStars(testimonial.rating)}
                  </div>
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center shrink-0">
                      <span className="text-sm font-bold text-primary-500">
                        {testimonial.parentName
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-heading">{testimonial.parentName}</h4>
                      <p className="text-xs text-paragraph/70">
                        {testimonial.relation} of {testimonial.childClass} student
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-500">
        <div className="container-wide text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-poppins mb-4">
              Share Your Experience
            </h2>
            <p className="text-white/80 max-w-xl mx-auto mb-8">
              Are you a parent or student at DGPS? We would love to hear about your experience. Your story could help another family choose the right school.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-primary-500 font-semibold rounded-xl hover:bg-white/90 transition-colors"
            >
              Share Your Testimonial
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
