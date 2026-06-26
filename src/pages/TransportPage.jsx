import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { PAGE_SEO, SEO_DEFAULTS } from "../constants/seo";
import { BreadcrumbJsonLd } from "../components/shared/JsonLd";
import PageHeader from "../components/shared/PageHeader";
import ScrollReveal from "../components/shared/ScrollReveal";
import SectionHeader from "../components/shared/SectionHeader";
import { BUS_ROUTES } from "../constants/newData";
import { Bus, Clock, MapPin, Users, ChevronDown, ChevronUp } from "lucide-react";

export default function TransportPage() {
  const [expandedRoute, setExpandedRoute] = useState(null);

  const toggleRoute = (id) => {
    setExpandedRoute(expandedRoute === id ? null : id);
  };

  return (
    <>
      <Helmet>
        <title>{PAGE_SEO.transport.title}</title>
        <meta name="description" content={PAGE_SEO.transport.description} />
        <meta property="og:title" content={PAGE_SEO.transport.title} />
        <meta property="og:description" content={PAGE_SEO.transport.description} />
        <meta property="og:image" content={`${SEO_DEFAULTS.siteUrl}${PAGE_SEO.transport.image}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_SEO.transport.title} />
        <meta name="twitter:description" content={PAGE_SEO.transport.description} />
        <meta name="twitter:image" content={`${SEO_DEFAULTS.siteUrl}${PAGE_SEO.transport.image}`} />
      </Helmet>

      <BreadcrumbJsonLd items={[{ label: "Home", path: "/" }, { label: "Transport" }]} />

      <PageHeader
        title="School Transport"
        description="Safe and reliable bus service for students across Cox's Bazar."
        breadcrumbs={[{ label: "Transport" }]}
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto mb-12">
              <p className="text-paragraph leading-relaxed text-center">
                Our school transport service ensures safe and timely commute for students. All buses are equipped with GPS tracking, first-aid kits, and trained attendants. Routes are designed to cover major areas of Ramu, Cox's Bazar, and nearby regions.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-6">
            {BUS_ROUTES.map((route) => (
              <ScrollReveal key={route.id} animation="fadeUp">
                <div className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center"
                          style={{ backgroundColor: `${route.color}15` }}
                        >
                          <Bus className="w-6 h-6" style={{ color: route.color }} />
                        </div>
                        <div>
                          <span
                            className="text-xs font-semibold px-2 py-1 rounded-full"
                            style={{ backgroundColor: `${route.color}20`, color: route.color }}
                          >
                            {route.routeNo}
                          </span>
                          <h3 className="text-lg font-bold text-heading font-poppins mt-1">
                            {route.name}
                          </h3>
                        </div>
                      </div>
                      <button
                        onClick={() => toggleRoute(route.id)}
                        className="w-8 h-8 rounded-lg bg-background flex items-center justify-center hover:bg-primary-50 transition-colors"
                      >
                        {expandedRoute === route.id ? (
                          <ChevronUp className="w-4 h-4 text-paragraph" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-paragraph" />
                        )}
                      </button>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm text-paragraph">
                        <Clock className="w-4 h-4 text-primary-500" />
                        <span>{route.departureTime}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-paragraph">
                        <Users className="w-4 h-4 text-primary-500" />
                        <span>{route.capacity} Seats</span>
                      </div>
                      <div className="text-sm font-semibold text-primary-500">
                        {route.fee}
                      </div>
                    </div>

                    {expandedRoute === route.id && (
                      <div className="mt-4 pt-4 border-t border-border">
                        <h4 className="text-sm font-semibold text-heading mb-3 flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-primary-500" />
                          Route Stops
                        </h4>
                        <div className="space-y-2">
                          {route.stops.map((stop, index) => (
                            <div key={index} className="flex items-center gap-3">
                              <div className="relative">
                                <div
                                  className="w-3 h-3 rounded-full"
                                  style={{ backgroundColor: route.color }}
                                />
                                {index < route.stops.length - 1 && (
                                  <div
                                    className="absolute top-3 left-1/2 -translate-x-1/2 w-0.5 h-6"
                                    style={{ backgroundColor: `${route.color}40` }}
                                  />
                                )}
                              </div>
                              <div className="flex-1 flex items-center justify-between">
                                <span className="text-sm text-paragraph">{stop.name}</span>
                                <span className="text-xs text-paragraph/70 font-medium">{stop.time}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionHeader
            subtitle="Why Choose Our Transport"
            title="Safety & Comfort"
            description="We prioritize your child's safety above everything else."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "GPS Tracking", desc: "Real-time GPS tracking so parents can monitor bus locations." },
              { title: "Trained Drivers", desc: "All drivers are licensed, experienced, and undergo background checks." },
              { title: "Bus Attendants", desc: "Dedicated attendants on every bus to ensure student safety." },
              { title: "First Aid Kits", desc: "Each bus is equipped with a complete first-aid kit." },
            ].map((item, index) => (
              <ScrollReveal key={index} animation="fadeUp" delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-6 border border-border">
                  <h3 className="text-lg font-bold text-heading font-poppins mb-2">{item.title}</h3>
                  <p className="text-sm text-paragraph leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
