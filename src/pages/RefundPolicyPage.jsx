import { Helmet } from "react-helmet-async";
import { PAGE_SEO, SEO_DEFAULTS } from "../constants/seo";
import { BreadcrumbJsonLd } from "../components/shared/JsonLd";
import PageHeader from "../components/shared/PageHeader";

export default function RefundPolicyPage() {
  return (
    <>
      <Helmet>
        <title>{PAGE_SEO.refundPolicy.title}</title>
        <meta name="description" content={PAGE_SEO.refundPolicy.description} />
        <meta property="og:title" content={PAGE_SEO.refundPolicy.title} />
        <meta property="og:description" content={PAGE_SEO.refundPolicy.description} />
        <meta property="og:image" content={`${SEO_DEFAULTS.siteUrl}${PAGE_SEO.refundPolicy.image}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_SEO.refundPolicy.title} />
        <meta name="twitter:description" content={PAGE_SEO.refundPolicy.description} />
        <meta name="twitter:image" content={`${SEO_DEFAULTS.siteUrl}${PAGE_SEO.refundPolicy.image}`} />
      </Helmet>

      <BreadcrumbJsonLd items={[{ label: "Home", path: "/" }, { label: "Refund Policy" }]} />

      <PageHeader
        title="Refund Policy"
        description="Guidelines regarding fee refunds and payment adjustments."
        breadcrumbs={[{ label: "Refund Policy" }]}
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto prose prose-slate">
            <h2>1. General Refund Policy</h2>
            <p>
              As a government primary school, Dhuapalong Government Primary School operates under the guidelines set by the Ministry of Primary and Mass Education. Fee structures and refund policies are subject to government regulations.
            </p>

            <h2>2. Admission Fee Refund</h2>
            <p>
              Admission fees, once paid, are generally non-refundable. However, in exceptional cases where a student's admission is cancelled by the school administration before the academic session begins, a partial refund may be considered on a case-by-case basis.
            </p>

            <h2>3. Tuition Fee Refund</h2>
            <p>
              Monthly or quarterly tuition fees paid in advance may be eligible for refund if:
            </p>
            <ul>
              <li>A student withdraws before the beginning of the paid period</li>
              <li>The school fails to provide scheduled classes for more than 10 consecutive working days</li>
              <li>A student transfers to another government school within the district</li>
            </ul>

            <h2>4. Non-Refundable Fees</h2>
            <p>The following fees are non-refundable under any circumstances:</p>
            <ul>
              <li>Registration and processing fees</li>
              <li>Examination fees once the examination has been conducted</li>
              <li>Library and laboratory deposit ( refunded upon return of materials )</li>
              <li>Uniform and textbook costs</li>
              <li>Activity and event participation fees</li>
            </ul>

            <h2>5. How to Request a Refund</h2>
            <p>
              To request a refund, a written application must be submitted to the Headmaster through the school office. The application should include:
            </p>
            <ul>
              <li>Student's full name and class</li>
              <li>Reason for the refund request</li>
              <li>Original payment receipt or transaction details</li>
              <li>Bank account details for online transfer (if applicable)</li>
            </ul>

            <h2>6. Processing Time</h2>
            <p>
              Approved refunds will be processed within 30 working days from the date of approval. The refund will be made through the same payment method used for the original transaction, unless otherwise specified.
            </p>

            <h2>7. Contact for Refund Queries</h2>
            <p>
              For any questions regarding refunds, please contact the school office during working hours or email us at info@dhps.edu.bd.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
