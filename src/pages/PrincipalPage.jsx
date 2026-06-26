import { Helmet } from "react-helmet-async";
import { PAGE_SEO, SEO_DEFAULTS } from "../constants/seo";
import { BreadcrumbJsonLd } from "../components/shared/JsonLd";
import PageHeader from "../components/shared/PageHeader";
import ScrollReveal from "../components/shared/ScrollReveal";
import { PRINCIPAL_INFO } from "../constants/navigation";

export default function PrincipalPage() {
  return (
    <>
      <Helmet>
        <title>{PAGE_SEO.principal.title}</title>
        <meta name="description" content={PAGE_SEO.principal.description} />
        <meta property="og:title" content={PAGE_SEO.principal.title} />
        <meta property="og:description" content={PAGE_SEO.principal.description} />
        <meta property="og:image" content={`${SEO_DEFAULTS.siteUrl}${PAGE_SEO.principal.image}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_SEO.principal.title} />
        <meta name="twitter:description" content={PAGE_SEO.principal.description} />
        <meta name="twitter:image" content={`${SEO_DEFAULTS.siteUrl}${PAGE_SEO.principal.image}`} />
      </Helmet>

      <BreadcrumbJsonLd items={[{ label: "Home", path: "/" }, { label: "About", path: "/about" }, { label: "Principal Message" }]} />

      <PageHeader
        title="Principal's Message"
        description="A message from our Headmaster about the school's vision and values."
        breadcrumbs={[
          { label: "About", path: "/about" },
          { label: "Principal Message" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="grid md:grid-cols-3 gap-10 items-start">
                <div className="md:col-span-1">
                  <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 text-center">
                    <div className="w-24 h-24 mx-auto rounded-2xl bg-white flex items-center justify-center mb-4 shadow-card">
                      <span className="text-4xl font-bold text-primary-500 font-poppins">
                        {PRINCIPAL_INFO.name.charAt(0)}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-heading font-poppins">{PRINCIPAL_INFO.name}</h3>
                    <p className="text-sm text-primary-500 font-medium mt-1">{PRINCIPAL_INFO.designation}</p>
                    <p className="text-xs text-paragraph mt-1">{PRINCIPAL_INFO.qualification}</p>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <h2 className="text-2xl md:text-3xl font-bold text-heading font-poppins mb-6">
                    A Message from Our Headmaster
                  </h2>
                  <div className="space-y-4 text-paragraph leading-relaxed">
                    {PRINCIPAL_INFO.message.split("\n\n").map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                  <div className="mt-8 pt-6 border-t border-border">
                    <p className="text-heading font-semibold font-poppins">{PRINCIPAL_INFO.name}</p>
                    <p className="text-sm text-paragraph">{PRINCIPAL_INFO.designation}</p>
                    <p className="text-sm text-paragraph">{PRINCIPAL_INFO.qualification}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
