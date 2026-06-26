import { Helmet } from "react-helmet-async";
import { PAGE_SEO, SEO_DEFAULTS } from "../constants/seo";
import { BreadcrumbJsonLd } from "../components/shared/JsonLd";
import PageHeader from "../components/shared/PageHeader";
import FacilityCard from "../components/shared/FacilityCard";
import { FACILITIES } from "../constants/navigation";
import ScrollReveal from "../components/shared/ScrollReveal";

export default function FacilitiesPage() {
  return (
    <>
      <Helmet>
        <title>{PAGE_SEO.facilities.title}</title>
        <meta name="description" content={PAGE_SEO.facilities.description} />
        <meta property="og:title" content={PAGE_SEO.facilities.title} />
        <meta property="og:description" content={PAGE_SEO.facilities.description} />
        <meta property="og:image" content={`${SEO_DEFAULTS.siteUrl}${PAGE_SEO.facilities.image}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_SEO.facilities.title} />
        <meta name="twitter:description" content={PAGE_SEO.facilities.description} />
        <meta name="twitter:image" content={`${SEO_DEFAULTS.siteUrl}${PAGE_SEO.facilities.image}`} />
      </Helmet>

      <BreadcrumbJsonLd items={[{ label: "Home", path: "/" }, { label: "Facilities" }]} />

      <PageHeader
        title="School Facilities"
        description="Modern infrastructure and amenities for a conducive learning environment."
        breadcrumbs={[{ label: "Facilities" }]}
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto mb-12">
              <p className="text-paragraph leading-relaxed text-center">
                Our school provides a range of facilities designed to support the academic, physical, and creative development of every student. We continuously invest in infrastructure to create a safe and inspiring learning environment.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FACILITIES.map((facility) => (
              <FacilityCard key={facility.id} facility={facility} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
