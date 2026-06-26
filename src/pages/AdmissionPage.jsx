import { Helmet } from "react-helmet-async";
import { PAGE_SEO, SEO_DEFAULTS } from "../constants/seo";
import { BreadcrumbJsonLd } from "../components/shared/JsonLd";
import PageHeader from "../components/shared/PageHeader";
import ScrollReveal from "../components/shared/ScrollReveal";
import { FAQS } from "../constants/navigation";
import Accordion from "../components/ui/Accordion";
import { FileText, Download, CheckCircle } from "lucide-react";
import Button from "../components/ui/Button";

const admissionProcedure = [
  "Visit the school office during working hours",
  "Collect and fill out the admission form",
  "Submit required documents (see below)",
  "Appear for a brief interaction (for Class I onwards)",
  "Complete the registration process",
  "Pay the admission fee (if applicable)",
];

const requiredDocuments = [
  "Student's Birth Certificate",
  "Parents' National ID Card",
  "Previous school transfer certificate (if applicable)",
  "Four passport-size photographs of the student",
  "Guardian's contact information",
];

const eligibility = [
  { class: "Play Group", age: "3-4 years" },
  { class: "Nursery", age: "4-5 years" },
  { class: "Class One", age: "5-6 years" },
];

export default function AdmissionPage() {
  return (
    <>
      <Helmet>
        <title>{PAGE_SEO.admission.title}</title>
        <meta name="description" content={PAGE_SEO.admission.description} />
        <meta property="og:title" content={PAGE_SEO.admission.title} />
        <meta property="og:description" content={PAGE_SEO.admission.description} />
        <meta property="og:image" content={`${SEO_DEFAULTS.siteUrl}${PAGE_SEO.admission.image}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_SEO.admission.title} />
        <meta name="twitter:description" content={PAGE_SEO.admission.description} />
        <meta name="twitter:image" content={`${SEO_DEFAULTS.siteUrl}${PAGE_SEO.admission.image}`} />
      </Helmet>

      <BreadcrumbJsonLd items={[{ label: "Home", path: "/" }, { label: "Admission" }]} />

      <PageHeader
        title="Admission"
        description="Join our school family. Learn about the admission process and requirements."
        breadcrumbs={[{ label: "Admission" }]}
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <ScrollReveal>
                <h2 className="text-2xl font-bold text-heading font-poppins mb-6">Admission Procedure</h2>
                <ol className="space-y-4 mb-10">
                  {admissionProcedure.map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-7 h-7 rounded-lg bg-primary-50 text-primary-500 flex items-center justify-center text-sm font-bold shrink-0">
                        {i + 1}
                      </span>
                      <span className="text-paragraph pt-0.5">{step}</span>
                    </li>
                  ))}
                </ol>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-2xl font-bold text-heading font-poppins mb-6">Required Documents</h2>
                <ul className="space-y-3 mb-10">
                  {requiredDocuments.map((doc, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary-500 shrink-0 mt-0.5" />
                      <span className="text-paragraph">{doc}</span>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>

            <div>
              <ScrollReveal>
                <h2 className="text-2xl font-bold text-heading font-poppins mb-6">Eligibility</h2>
                <div className="bg-white rounded-2xl border border-border overflow-hidden mb-10">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-primary-50">
                        <th className="text-left px-6 py-3 text-sm font-semibold text-heading">Class</th>
                        <th className="text-left px-6 py-3 text-sm font-semibold text-heading">Required Age</th>
                      </tr>
                    </thead>
                    <tbody>
                      {eligibility.map((item, i) => (
                        <tr key={i} className="border-t border-border">
                          <td className="px-6 py-3 text-sm text-heading font-medium">{item.class}</td>
                          <td className="px-6 py-3 text-sm text-paragraph">{item.age}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-8 text-white">
                  <h3 className="text-xl font-bold font-poppins mb-3">Download Admission Form</h3>
                  <p className="text-white/70 text-sm mb-6">
                    You can also collect the admission form directly from the school office during working hours.
                  </p>
                  <Button variant="white" size="lg">
                    <Download className="w-5 h-5" />
                    Download Form
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-heading font-poppins mb-6 text-center">Frequently Asked Questions</h2>
              <Accordion items={FAQS} defaultOpen={0} />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
