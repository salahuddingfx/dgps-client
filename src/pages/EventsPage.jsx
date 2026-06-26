import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { PAGE_SEO, SEO_DEFAULTS } from "../constants/seo";
import { BreadcrumbJsonLd } from "../components/shared/JsonLd";
import PageHeader from "../components/shared/PageHeader";
import EventCard from "../components/shared/EventCard";
import { EVENTS } from "../constants/navigation";
import Tabs from "../components/ui/Tabs";

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState("upcoming");

  const filteredEvents = EVENTS.filter((event) => event.type === activeTab);

  return (
    <>
      <Helmet>
        <title>{PAGE_SEO.events.title}</title>
        <meta name="description" content={PAGE_SEO.events.description} />
        <meta property="og:title" content={PAGE_SEO.events.title} />
        <meta property="og:description" content={PAGE_SEO.events.description} />
        <meta property="og:image" content={`${SEO_DEFAULTS.siteUrl}${PAGE_SEO.events.image}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_SEO.events.title} />
        <meta name="twitter:description" content={PAGE_SEO.events.description} />
        <meta name="twitter:image" content={`${SEO_DEFAULTS.siteUrl}${PAGE_SEO.events.image}`} />
      </Helmet>

      <BreadcrumbJsonLd items={[{ label: "Home", path: "/" }, { label: "Events" }]} />

      <PageHeader
        title="Events"
        description="View upcoming and past events at our school."
        breadcrumbs={[{ label: "Events" }]}
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <Tabs
            tabs={[
              { value: "upcoming", label: "Upcoming Events", count: EVENTS.filter((e) => e.type === "upcoming").length },
              { value: "past", label: "Past Events", count: EVENTS.filter((e) => e.type === "past").length },
            ]}
            activeTab={activeTab}
            onTabChange={setActiveTab}
            className="mb-8"
          />

          {filteredEvents.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {filteredEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-paragraph text-lg">No {activeTab} events at this time.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
