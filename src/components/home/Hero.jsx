import { useRef, useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { ArrowRight, Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";
import { HERO_SLIDES } from "../../constants/navigation";
import Button from "../ui/Button";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

function VideoSlide({ slide, isActive }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!videoRef.current) return;
    if (isActive) {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [isActive]);

  const togglePlay = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="absolute inset-0">
      <video
        ref={videoRef}
        src={slide.video}
        poster={slide.poster}
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />

      <button
        onClick={togglePlay}
        aria-label={isPlaying ? "Pause video" : "Play video"}
        className="absolute inset-0 z-20 flex items-center justify-center group cursor-pointer"
      >
        <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white hover:bg-white/25 transition-all duration-300 group-hover:scale-105">
          {isPlaying ? (
            <>
              <Pause className="w-5 h-5" />
              <span className="text-sm font-medium hidden sm:inline">Pause</span>
            </>
          ) : (
            <>
              <Play className="w-5 h-5 fill-white" />
              <span className="text-sm font-medium hidden sm:inline">Play</span>
            </>
          )}
        </div>
      </button>
    </div>
  );
}

export default function Hero() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const activeSlide = HERO_SLIDES[activeIndex];

  const handlePrev = useCallback(() => {
    swiperRef.current?.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    swiperRef.current?.slideNext();
  }, []);

  return (
    <section className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[85vh] min-h-[400px] overflow-hidden bg-slate-900">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{
          clickable: true,
          el: ".hero-pagination",
        }}
        loop
        speed={800}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
        }}
        className="h-full"
      >
        {HERO_SLIDES.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            {slide.type === "video" ? (
              <VideoSlide slide={slide} isActive={index === activeIndex} />
            ) : (
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute inset-0 z-10 flex items-center pointer-events-none">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="max-w-xl sm:max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 mb-4 sm:mb-6">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-secondary-400 animate-pulse" />
              <span className="text-xs sm:text-sm font-medium text-white/90">
                {activeSlide?.tag}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white font-poppins mb-4 sm:mb-6 leading-tight whitespace-pre-line">
              {activeSlide?.title}
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-white/70 mb-6 sm:mb-8 max-w-lg sm:max-w-xl leading-relaxed">
              {activeSlide?.description}
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 pointer-events-auto">
              <Link to={activeSlide?.primaryBtn?.path || "/"}>
                <Button size="lg" className="text-sm sm:text-base">
                  {activeSlide?.primaryBtn?.label}
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </Link>
              <Link to={activeSlide?.secondaryBtn?.path || "/"}>
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 text-sm sm:text-base">
                  {activeSlide?.secondaryBtn?.label}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 right-4 sm:right-6 lg:right-8 z-20 hidden sm:flex items-center gap-2 sm:gap-3">
        <button
          onClick={handlePrev}
          aria-label="Previous slide"
          className="w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        <button
          onClick={handleNext}
          aria-label="Next slide"
          className="w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

      <div className="hero-pagination absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-8 z-20 flex items-center gap-2" />

      <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/50 text-xs sm:text-sm font-medium sm:hidden">
        {activeIndex + 1} / {HERO_SLIDES.length}
      </div>

    </section>
  );
}
