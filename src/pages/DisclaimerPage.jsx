import { Helmet } from "react-helmet-async";
import { PAGE_SEO, SEO_DEFAULTS } from "../constants/seo";
import { BreadcrumbJsonLd } from "../components/shared/JsonLd";
import PageHeader from "../components/shared/PageHeader";

export default function DisclaimerPage() {
  return (
    <>
      <Helmet>
        <title>{PAGE_SEO.disclaimer.title}</title>
        <meta name="description" content={PAGE_SEO.disclaimer.description} />
        <meta property="og:title" content={PAGE_SEO.disclaimer.title} />
        <meta property="og:description" content={PAGE_SEO.disclaimer.description} />
        <meta property="og:image" content={`${SEO_DEFAULTS.siteUrl}${PAGE_SEO.disclaimer.image}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_SEO.disclaimer.title} />
        <meta name="twitter:description" content={PAGE_SEO.disclaimer.description} />
        <meta name="twitter:image" content={`${SEO_DEFAULTS.siteUrl}${PAGE_SEO.disclaimer.image}`} />
      </Helmet>

      <BreadcrumbJsonLd items={[{ label: "Home", path: "/" }, { label: "Disclaimer" }]} />

      <PageHeader
        title="Disclaimer"
        description="Important information about the content and usage of this website."
        breadcrumbs={[{ label: "Disclaimer" }]}
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto prose prose-slate">
            <h2>1. General Information</h2>
            <p>
              The information provided on the Dhuapalong Government Primary School website is for general informational purposes only. While we strive to keep the information accurate and up to date, we make no representations or warranties of any kind about the completeness, accuracy, reliability, or availability of the information contained on this website.
            </p>

            <h2>2. No Professional Advice</h2>
            <p>
              The content on this website does not constitute professional educational or legal advice. Any reliance you place on such information is strictly at your own risk. We recommend consulting directly with the school administration for official and authoritative information.
            </p>

            <h2>3. External Links</h2>
            <p>
              This website may contain links to external websites that are not provided or maintained by or in any way affiliated with Dhuapalong Government Primary School. We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
            </p>

            <h2>4. Images and Media</h2>
            <p>
              Images and media used on this website are for illustrative purposes only. Actual facilities, events, and activities may differ from the representations shown. Some images may be stock photos used for visual enhancement.
            </p>

            <h2>5. Admission and Enrollment</h2>
            <p>
              Information regarding admission procedures, eligibility, and requirements is provided for convenience only. Actual admission decisions are made by the school administration in accordance with government regulations and may differ from the information presented on this website.
            </p>

            <h2>6. Examination Results</h2>
            <p>
              Any examination results or academic statistics mentioned on this website are historical data and should not be used as a guarantee of future performance. Actual results may vary based on individual student capabilities and external factors.
            </p>

            <h2>7. Technical Availability</h2>
            <p>
              We strive to keep the website operational at all times. However, we do not warrant that the website will be available uninterrupted, timely, or error-free. We reserve the right to modify, suspend, or discontinue any part of the website without prior notice.
            </p>

            <h2>8. Limitation of Liability</h2>
            <p>
              In no event shall Dhuapalong Government Primary School be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.
            </p>

            <h2>9. Changes to This Disclaimer</h2>
            <p>
              We reserve the right to update this disclaimer at any time. Changes will be effective immediately upon posting on this page. Your continued use of the website after any changes constitutes acceptance of the new disclaimer.
            </p>

            <h2>10. Contact Us</h2>
            <p>
              If you have any questions about this disclaimer, please contact us at info@dhps.edu.bd or visit our school office during working hours.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
