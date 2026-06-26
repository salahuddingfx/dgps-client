import { Helmet } from "react-helmet-async";
import { PAGE_SEO, SEO_DEFAULTS } from "../constants/seo";
import { BreadcrumbJsonLd } from "../components/shared/JsonLd";
import PageHeader from "../components/shared/PageHeader";

export default function PrivacyPage() {
  return (
    <>
      <Helmet>
        <title>{PAGE_SEO.privacy.title}</title>
        <meta name="description" content={PAGE_SEO.privacy.description} />
        <meta property="og:title" content={PAGE_SEO.privacy.title} />
        <meta property="og:description" content={PAGE_SEO.privacy.description} />
        <meta property="og:image" content={`${SEO_DEFAULTS.siteUrl}${PAGE_SEO.privacy.image}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_SEO.privacy.title} />
        <meta name="twitter:description" content={PAGE_SEO.privacy.description} />
        <meta name="twitter:image" content={`${SEO_DEFAULTS.siteUrl}${PAGE_SEO.privacy.image}`} />
      </Helmet>

      <BreadcrumbJsonLd items={[{ label: "Home", path: "/" }, { label: "Privacy Policy" }]} />

      <PageHeader
        title="Privacy Policy"
        description="How we collect, use, and protect your information."
        breadcrumbs={[{ label: "Privacy Policy" }]}
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto prose prose-slate">
            <h2>1. Information We Collect</h2>
            <p>
              We collect information you provide directly to us, such as when you fill out a contact form, apply for admission, or contact us for inquiries. This may include your name, email address, phone number, and your child's information.
            </p>

            <h2>2. How We Use Your Information</h2>
            <p>
              We use the information we collect to respond to your inquiries, process admission applications, improve our services, and communicate with you about school-related matters.
            </p>

            <h2>3. Information Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2>4. Third-Party Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to outside parties. This does not include trusted third parties who assist us in operating our website, as long as those parties agree to keep this information confidential.
            </p>

            <h2>5. Cookies</h2>
            <p>
              Our website may use cookies to enhance your experience. You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies through your browser settings.
            </p>

            <h2>6. Changes to This Policy</h2>
            <p>
              We reserve the right to update this privacy policy at any time. Changes will be posted on this page with an updated revision date.
            </p>

            <h2>7. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy, please contact us at info@dhps.edu.bd or visit our school office during working hours.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
