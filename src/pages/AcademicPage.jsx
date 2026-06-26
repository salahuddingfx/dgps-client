import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { PAGE_SEO, SEO_DEFAULTS } from "../constants/seo";
import { BreadcrumbJsonLd } from "../components/shared/JsonLd";
import PageHeader from "../components/shared/PageHeader";
import ScrollReveal from "../components/shared/ScrollReveal";
import { SUBJECTS_BY_CLASS, CLASS_SCHEDULE } from "../constants/data";
import { ArrowRight } from "lucide-react";

const classes = [
  { id: "play", label: "Play", description: "Play group introduces children to a fun learning environment through activities, stories, and games." },
  { id: "nursery", label: "Nursery", description: "Nursery focuses on early literacy, numeracy, and social skills development." },
  { id: "class-one", label: "Class One", description: "Class One builds foundation in Bangla, English, and Mathematics with structured learning." },
  { id: "class-two", label: "Class Two", description: "Class Two deepens understanding of core subjects and introduces basic science concepts." },
  { id: "class-three", label: "Class Three", description: "Class Three adds Science and Social Science to the curriculum for broader knowledge." },
  { id: "class-four", label: "Class Four", description: "Class Four prepares students for advanced topics and critical thinking skills." },
  { id: "class-five", label: "Class Five", description: "Class Five is the final year preparing students for the Primary Education Completion Examination." },
];

export default function AcademicPage() {
  return (
    <>
      <Helmet>
        <title>{PAGE_SEO.academic.title}</title>
        <meta name="description" content={PAGE_SEO.academic.description} />
        <meta property="og:title" content={PAGE_SEO.academic.title} />
        <meta property="og:description" content={PAGE_SEO.academic.description} />
        <meta property="og:image" content={`${SEO_DEFAULTS.siteUrl}${PAGE_SEO.academic.image}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_SEO.academic.title} />
        <meta name="twitter:description" content={PAGE_SEO.academic.description} />
        <meta name="twitter:image" content={`${SEO_DEFAULTS.siteUrl}${PAGE_SEO.academic.image}`} />
      </Helmet>

      <BreadcrumbJsonLd items={[{ label: "Home", path: "/" }, { label: "Academic" }]} />

      <PageHeader
        title="Academic Programs"
        description="Comprehensive curriculum from Play to Class Five following the national education framework."
        breadcrumbs={[{ label: "Academic" }]}
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto mb-16">
              <h2 className="text-2xl font-bold text-heading font-poppins mb-6">Overview</h2>
              <div className="space-y-4 text-paragraph leading-relaxed">
                <p>
                  Dhuapalong Government Primary School offers education from Play Group to Class Five, following the national curriculum prescribed by the National Curriculum and Textbook Board (NCTB) of Bangladesh.
                </p>
                <p>
                  Our academic program is designed to build strong foundational skills in literacy, numeracy, and general knowledge. We emphasize interactive learning, critical thinking, and moral development to prepare students for their future academic journey.
                </p>
                <p>
                  The school maintains a favorable student-teacher ratio to ensure personalized attention for every student. Regular assessments and parent-teacher meetings help track student progress throughout the academic year.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <h2 className="text-2xl font-bold text-heading font-poppins mb-8 text-center">Classes We Offer</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {classes.map((cls, index) => (
              <ScrollReveal key={cls.id} delay={index * 0.05}>
                <Link to={`/academic/${cls.id}`}>
                  <div className="bg-white rounded-2xl border border-border shadow-card hover-lift p-6 h-full">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center">
                        <span className="text-lg font-bold text-primary-500 font-poppins">{index + 1}</span>
                      </div>
                      <ArrowRight className="w-5 h-5 text-paragraph group-hover:text-primary-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <h3 className="text-lg font-semibold text-heading font-poppins mb-2">{cls.label}</h3>
                    <p className="text-sm text-paragraph leading-relaxed">{cls.description}</p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-heading font-poppins mb-6 text-center">Daily Class Schedule</h2>
              <div className="bg-white rounded-2xl border border-border overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-primary-50">
                        <th className="text-left px-6 py-3 text-sm font-semibold text-heading">Period</th>
                        <th className="text-left px-6 py-3 text-sm font-semibold text-heading">Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      {CLASS_SCHEDULE.map((item, index) => (
                        <tr key={index} className={item.period === "Break" ? "bg-accent-50" : "border-t border-border"}>
                          <td className="px-6 py-3 text-sm text-heading">{item.period}</td>
                          <td className="px-6 py-3 text-sm text-paragraph">{item.time}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
