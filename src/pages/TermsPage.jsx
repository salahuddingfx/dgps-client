import { Helmet } from "react-helmet-async";
import { PAGE_SEO, SEO_DEFAULTS } from "../constants/seo";
import { BreadcrumbJsonLd } from "../components/shared/JsonLd";
import PageHeader from "../components/shared/PageHeader";

export default function TermsPage() {
  return (
    <>
      <Helmet>
        <title>{PAGE_SEO.terms.title}</title>
        <meta name="description" content={PAGE_SEO.terms.description} />
        <meta property="og:title" content={PAGE_SEO.terms.title} />
        <meta property="og:description" content={PAGE_SEO.terms.description} />
        <meta property="og:image" content={`${SEO_DEFAULTS.siteUrl}${PAGE_SEO.terms.image}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_SEO.terms.title} />
        <meta name="twitter:description" content={PAGE_SEO.terms.description} />
        <meta name="twitter:image" content={`${SEO_DEFAULTS.siteUrl}${PAGE_SEO.terms.image}`} />
      </Helmet>

      <BreadcrumbJsonLd items={[{ label: "Home", path: "/" }, { label: "Terms of Service" }]} />

      <PageHeader
        title="Terms of Service"
        description="Terms and conditions governing the use of this website."
        breadcrumbs={[{ label: "Terms of Service" }]}
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto prose prose-slate">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using this website, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use this website.
            </p>

            <h2>2. Use of Website</h2>
            <p>
              This website is intended to provide information about Dhuapalong Government Primary School, including its academic programs, admission process, events, and other school-related activities. You may use this website for lawful purposes only.
            </p>

            <h2>3. Accuracy of Information</h2>
            <p>
              While we strive to keep the information on this website accurate and up-to-date, we make no representations or warranties of any kind about the completeness, accuracy, or reliability of the information provided.
            </p>

            <h2>4. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, and images, is the property of Dhuapalong Government Primary School and is protected by copyright laws. You may not reproduce or distribute any content without prior written permission.
            </p>

            <h2>5. Links to External Sites</h2>
            <p>
              This website may contain links to external websites. We are not responsible for the content or privacy practices of these external sites.
            </p>

            <h2>6. Limitation of Liability</h2>
            <p>
              Dhuapalong Government Primary School shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of this website.
            </p>

            <h2>7. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Continued use of the website after changes constitutes acceptance of the modified terms.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
