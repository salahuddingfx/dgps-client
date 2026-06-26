import { Helmet } from "react-helmet-async";
import { PAGE_SEO, SEO_DEFAULTS } from "../constants/seo";
import { BreadcrumbJsonLd } from "../components/shared/JsonLd";
import PageHeader from "../components/shared/PageHeader";
import Accordion from "../components/ui/Accordion";
import { FAQS } from "../constants/navigation";

export default function FAQPage() {
  return (
    <>
      <Helmet>
        <title>{PAGE_SEO.faq.title}</title>
        <meta name="description" content={PAGE_SEO.faq.description} />
        <meta property="og:title" content={PAGE_SEO.faq.title} />
        <meta property="og:description" content={PAGE_SEO.faq.description} />
        <meta property="og:image" content={`${SEO_DEFAULTS.siteUrl}${PAGE_SEO.faq.image}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_SEO.faq.title} />
        <meta name="twitter:description" content={PAGE_SEO.faq.description} />
        <meta name="twitter:image" content={`${SEO_DEFAULTS.siteUrl}${PAGE_SEO.faq.image}`} />
      </Helmet>

      <BreadcrumbJsonLd items={[{ label: "Home", path: "/" }, { label: "FAQ" }]} />

      <PageHeader
        title="Frequently Asked Questions"
        description="Find answers to common questions about our school."
        breadcrumbs={[{ label: "FAQ" }]}
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <Accordion items={FAQS} defaultOpen={0} />
          </div>
        </div>
      </section>
    </>
  );
}
