import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { PAGE_SEO, SEO_DEFAULTS } from "../constants/seo";
import { BreadcrumbJsonLd } from "../components/shared/JsonLd";
import PageHeader from "../components/shared/PageHeader";
import ScrollReveal from "../components/shared/ScrollReveal";
import SectionHeader from "../components/shared/SectionHeader";
import { CAMPUS_GALLERY } from "../constants/newData";
import {
  Video,
  Maximize2,
  ArrowLeft,
  ArrowRight,
  Building,
  BookOpen,
  Trees,
  Monitor,
  Palette,
  Flower2,
  Users,
  Compass,
} from "lucide-react";

const AREA_ICONS = {
  "Main Building": Building,
  "School Library": BookOpen,
  Playground: Trees,
  "Computer Lab": Monitor,
  Classroom: Palette,
  "School Garden": Flower2,
  "Assembly Hall": Users,
  "Prayer Room": Compass,
};

export default function VirtualTourPage() {
  const [activeArea, setActiveArea] = useState(0);
  const [activeTab, setActiveTab] = useState("gallery");

  const handlePrev = () => {
    setActiveArea((prev) => (prev === 0 ? CAMPUS_GALLERY.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveArea((prev) => (prev === CAMPUS_GALLERY.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <Helmet>
        <title>{PAGE_SEO.virtualTour.title}</title>
        <meta name="description" content={PAGE_SEO.virtualTour.description} />
        <meta property="og:title" content={PAGE_SEO.virtualTour.title} />
        <meta property="og:description" content={PAGE_SEO.virtualTour.description} />
        <meta property="og:image" content={`${SEO_DEFAULTS.siteUrl}${PAGE_SEO.virtualTour.image}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_SEO.virtualTour.title} />
        <meta name="twitter:description" content={PAGE_SEO.virtualTour.description} />
        <meta name="twitter:image" content={`${SEO_DEFAULTS.siteUrl}${PAGE_SEO.virtualTour.image}`} />
      </Helmet>

      <BreadcrumbJsonLd items={[{ label: "Home", path: "/" }, { label: "Virtual Tour" }]} />

      <PageHeader
        title="Virtual Campus Tour"
        description="Explore our beautiful campus from the comfort of your home."
        breadcrumbs={[{ label: "Virtual Tour" }]}
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <ScrollReveal>
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary-500 to-primary-700 aspect-video max-w-4xl mx-auto mb-12">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-8">
                <Video className="w-16 h-16 mb-4 opacity-80" />
                <h3 className="text-2xl font-bold font-poppins mb-2">Campus Video Tour</h3>
                <p className="text-white/80 max-w-md">
                  Take a guided video tour of our school campus. See our classrooms, library, playground, and more.
                </p>
                <div className="mt-6 px-8 py-3 bg-white/20 backdrop-blur-sm rounded-full cursor-pointer hover:bg-white/30 transition-colors flex items-center gap-2">
                  <Video className="w-5 h-5" />
                  <span className="font-medium">Play Video</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="max-w-5xl mx-auto mb-16">
              <SectionHeader
                subtitle="Our Campus"
                title="Interactive Campus Map"
                description="Click on any building to learn more about it."
              />

              <div className="relative bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 border border-green-200">
                <svg viewBox="0 0 800 500" className="w-full h-auto">
                  <defs>
                    <pattern id="grass" patternUnits="userSpaceOnUse" width="20" height="20">
                      <rect width="20" height="20" fill="#d9f99d" />
                      <circle cx="5" cy="5" r="1" fill="#a3e635" opacity="0.5" />
                      <circle cx="15" cy="15" r="1" fill="#a3e635" opacity="0.5" />
                    </pattern>
                  </defs>
                  <rect width="800" height="500" fill="url(#grass)" rx="16" />

                  <g
                    className="cursor-pointer"
                    onClick={() => setActiveArea(0)}
                    opacity={activeArea === 0 ? 1 : 0.7}
                  >
                    <rect x="280" y="30" width="240" height="120" rx="8" fill="#3B82F6" />
                    <rect x="290" y="40" width="50" height="40" rx="4" fill="#93C5FD" />
                    <rect x="350" y="40" width="50" height="40" rx="4" fill="#93C5FD" />
                    <rect x="410" y="40" width="50" height="40" rx="4" fill="#93C5FD" />
                    <rect x="470" y="40" width="40" height="40" rx="4" fill="#93C5FD" />
                    <rect x="290" y="100" width="220" height="40" rx="4" fill="#60A5FA" />
                    <text x="400" y="170" textAnchor="middle" fill="#1E3A5F" fontSize="12" fontWeight="bold">
                      Main Building
                    </text>
                  </g>

                  <g
                    className="cursor-pointer"
                    onClick={() => setActiveArea(1)}
                    opacity={activeArea === 1 ? 1 : 0.7}
                  >
                    <rect x="50" y="200" width="140" height="100" rx="8" fill="#10B981" />
                    <rect x="60" y="210" width="120" height="50" rx="4" fill="#6EE7B7" />
                    <text x="120" y="320" textAnchor="middle" fill="#065F46" fontSize="12" fontWeight="bold">
                      Library
                    </text>
                  </g>

                  <g
                    className="cursor-pointer"
                    onClick={() => setActiveArea(2)}
                    opacity={activeArea === 2 ? 1 : 0.7}
                  >
                    <ellipse cx="620" cy="300" rx="130" ry="90" fill="#F59E0B" opacity="0.6" />
                    <rect x="550" y="260" width="30" height="5" rx="2" fill="#FBBF24" />
                    <text x="620" y="310" textAnchor="middle" fill="#92400E" fontSize="12" fontWeight="bold">
                      Playground
                    </text>
                  </g>

                  <g
                    className="cursor-pointer"
                    onClick={() => setActiveArea(3)}
                    opacity={activeArea === 3 ? 1 : 0.7}
                  >
                    <rect x="550" y="50" width="160" height="100" rx="8" fill="#8B5CF6" />
                    <rect x="560" y="60" width="140" height="60" rx="4" fill="#C4B5FD" />
                    <text x="630" y="170" textAnchor="middle" fill="#4C1D95" fontSize="12" fontWeight="bold">
                      Computer Lab
                    </text>
                  </g>

                  <g
                    className="cursor-pointer"
                    onClick={() => setActiveArea(6)}
                    opacity={activeArea === 6 ? 1 : 0.7}
                  >
                    <rect x="50" y="50" width="180" height="120" rx="8" fill="#EC4899" />
                    <rect x="60" y="60" width="160" height="80" rx="4" fill="#F9A8D4" />
                    <text x="140" y="190" textAnchor="middle" fill="#9D174D" fontSize="12" fontWeight="bold">
                      Assembly Hall
                    </text>
                  </g>

                  <g
                    className="cursor-pointer"
                    onClick={() => setActiveArea(7)}
                    opacity={activeArea === 7 ? 1 : 0.7}
                  >
                    <rect x="300" y="250" width="120" height="80" rx="8" fill="#06B6D4" />
                    <rect x="310" y="260" width="100" height="50" rx="4" fill="#67E8F9" />
                    <text x="360" y="350" textAnchor="middle" fill="#155E75" fontSize="12" fontWeight="bold">
                      Prayer Room
                    </text>
                  </g>

                  <g className="pointer-events-none">
                    <line x1="220" y1="200" x2="280" y2="90" stroke="#94A3B8" strokeWidth="2" strokeDasharray="6 3" />
                    <line x1="190" y1="250" x2="300" y2="280" stroke="#94A3B8" strokeWidth="2" strokeDasharray="6 3" />
                    <line x1="520" y1="90" x2="550" y2="90" stroke="#94A3B8" strokeWidth="2" strokeDasharray="6 3" />
                    <line x1="400" y1="150" x2="360" y2="250" stroke="#94A3B8" strokeWidth="2" strokeDasharray="6 3" />
                  </g>
                </svg>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="max-w-4xl mx-auto mb-16">
              <SectionHeader
                subtitle="360° View"
                title="Immersive Experience"
                description="Look around as if you were standing on our campus."
              />
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 aspect-video">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-8">
                  <Maximize2 className="w-16 h-16 mb-4 opacity-60" />
                  <h3 className="text-2xl font-bold font-poppins mb-2">360° Panoramic View</h3>
                  <p className="text-white/70 max-w-md mb-6">
                    Drag to look around. Experience our campus in full 360-degree immersive view.
                  </p>
                  <div className="px-8 py-3 bg-white/10 backdrop-blur-sm rounded-full cursor-pointer hover:bg-white/20 transition-colors">
                    Launch 360° Viewer
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionHeader
            subtitle="Explore Areas"
            title="Campus Gallery"
            description="Discover each area of our beautiful campus."
          />

          <div className="flex items-center justify-between mb-8 max-w-4xl mx-auto">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center hover:bg-primary-50 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-paragraph" />
            </button>

            <div className="flex gap-2">
              {CAMPUS_GALLERY.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveArea(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                    activeArea === index ? "bg-primary-500 w-8" : "bg-paragraph/30 hover:bg-paragraph/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center hover:bg-primary-50 transition-colors"
            >
              <ArrowRight className="w-5 h-5 text-paragraph" />
            </button>
          </div>

          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div
                  className="rounded-3xl aspect-square flex items-center justify-center"
                  style={{ backgroundColor: `${CAMPUS_GALLERY[activeArea].color}15` }}
                >
                  {(() => {
                    const IconComp = AREA_ICONS[CAMPUS_GALLERY[activeArea].title] || Building;
                    return <IconComp className="w-24 h-24 opacity-30" style={{ color: CAMPUS_GALLERY[activeArea].color }} />;
                  })()}
                </div>
                <div className="flex flex-col justify-center">
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full w-fit mb-3"
                    style={{
                      backgroundColor: `${CAMPUS_GALLERY[activeArea].color}20`,
                      color: CAMPUS_GALLERY[activeArea].color,
                    }}
                  >
                    {CAMPUS_GALLERY[activeArea].area}
                  </span>
                  <h3 className="text-2xl font-bold text-heading font-poppins mb-3">
                    {CAMPUS_GALLERY[activeArea].title}
                  </h3>
                  <p className="text-paragraph leading-relaxed">
                    {CAMPUS_GALLERY[activeArea].description}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
              {CAMPUS_GALLERY.map((area, index) => {
                const IconComp = AREA_ICONS[area.title] || Building;
                return (
                  <button
                    key={area.id}
                    onClick={() => setActiveArea(index)}
                    className={`p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                      activeArea === index
                        ? "border-primary-500 bg-primary-50"
                        : "border-border bg-white hover:border-primary-200"
                    }`}
                  >
                    <IconComp className="w-5 h-5 mb-2" style={{ color: area.color }} />
                    <h4 className="text-sm font-bold text-heading">{area.title}</h4>
                    <p className="text-xs text-paragraph/70 mt-1">{area.area}</p>
                  </button>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
