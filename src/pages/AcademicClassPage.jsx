import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { SEO_DEFAULTS } from "../constants/seo";
import { BreadcrumbJsonLd } from "../components/shared/JsonLd";
import PageHeader from "../components/shared/PageHeader";
import ScrollReveal from "../components/shared/ScrollReveal";
import { SUBJECTS_BY_CLASS } from "../constants/data";
import { CLASS_SCHEDULE } from "../constants/data";
import Button from "../components/ui/Button";

const classDetails = {
  play: {
    title: "Play Group",
    description: "Our Play Group program introduces children to a fun and engaging learning environment through activities, stories, songs, and games.",
    age: "3-4 years",
    highlights: ["Activity-based learning", "Creative play", "Social skills development", "Basic motor skills", "Story time", "Art and craft"],
  },
  nursery: {
    title: "Nursery",
    description: "Nursery focuses on early literacy, numeracy, and social skills development through structured yet playful activities.",
    age: "4-5 years",
    highlights: ["Letter and sound recognition", "Number concepts 1-20", "Fine motor activities", "Rhymes and songs", "Color and shape recognition", "Physical activities"],
  },
  "class-one": {
    title: "Class One",
    description: "Class One builds a strong foundation in Bangla, English, and Mathematics with structured, engaging learning.",
    age: "5-6 years",
    highlights: ["Bangla reading and writing", "English alphabet and basic words", "Numbers 1-100", "General Knowledge", "Islamic Studies basics", "Physical Education"],
  },
  "class-two": {
    title: "Class Two",
    description: "Class Two deepens understanding of core subjects and introduces basic science concepts through hands-on activities.",
    age: "6-7 years",
    highlights: ["Bangla reading comprehension", "English sentence formation", "Numbers and basic operations", "General Knowledge", "Islamic Studies", "Creative activities"],
  },
  "class-three": {
    title: "Class Three",
    description: "Class Three adds Science and Social Science to the curriculum, broadening students' knowledge of the world.",
    age: "7-8 years",
    highlights: ["Bangla literature", "English grammar", "Mathematics operations", "General Science", "Social Science", "Islamic Studies"],
  },
  "class-four": {
    title: "Class Four",
    description: "Class Four prepares students for advanced topics and develops critical thinking and analytical skills.",
    age: "8-9 years",
    highlights: ["Advanced Bangla", "English grammar and composition", "Mathematics and problem solving", "Science experiments", "Social Science", "Physical Education"],
  },
  "class-five": {
    title: "Class Five",
    description: "Class Five is the final year, preparing students comprehensively for the Primary Education Completion Examination (PECE).",
    age: "9-10 years",
    highlights: ["PECE preparation", "Comprehensive revision", "Mock examinations", "Science practical", "ICT basics", "Exam strategies"],
  },
};

export default function AcademicClassPage() {
  const { className } = useParams();
  const details = classDetails[className] || classDetails.play;
  const subjects = SUBJECTS_BY_CLASS[className] || SUBJECTS_BY_CLASS.play;

  return (
    <>
      <Helmet>
        <title>{details.title} | Dhuapalong Govt. Primary School</title>
        <meta name="description" content={details.description} />
        <meta property="og:title" content={`${details.title} | Dhuapalong Govt. Primary School`} />
        <meta property="og:description" content={details.description} />
        <meta property="og:image" content={`${SEO_DEFAULTS.siteUrl}/og-image.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${details.title} | Dhuapalong Govt. Primary School`} />
        <meta name="twitter:description" content={details.description} />
        <meta name="twitter:image" content={`${SEO_DEFAULTS.siteUrl}/og-image.jpg`} />
      </Helmet>

      <BreadcrumbJsonLd items={[{ label: "Home", path: "/" }, { label: "Academic", path: "/academic" }, { label: details.title }]} />

      <PageHeader
        title={details.title}
        description={details.description}
        breadcrumbs={[
          { label: "Academic", path: "/academic" },
          { label: details.title },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12">
            <ScrollReveal animation="fadeLeft">
              <div>
                <h2 className="text-2xl font-bold text-heading font-poppins mb-4">About {details.title}</h2>
                <p className="text-paragraph leading-relaxed mb-6">{details.description}</p>
                <div className="bg-primary-50 rounded-xl p-4 mb-6">
                  <span className="text-sm font-medium text-primary-600">Age Group: {details.age}</span>
                </div>
                <h3 className="text-lg font-semibold text-heading font-poppins mb-4">Learning Highlights</h3>
                <ul className="space-y-2">
                  {details.highlights.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-paragraph">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fadeRight">
              <div>
                <h3 className="text-lg font-semibold text-heading font-poppins mb-4">Subjects</h3>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {subjects.map((subject, i) => (
                    <div key={i} className="bg-white rounded-xl border border-border p-4 text-center">
                      <span className="text-sm font-medium text-heading">{subject}</span>
                    </div>
                  ))}
                </div>

                <h3 className="text-lg font-semibold text-heading font-poppins mb-4">Class Schedule</h3>
                <div className="bg-white rounded-xl border border-border overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-primary-50">
                        <th className="text-left px-4 py-2 text-sm font-semibold text-heading">Period</th>
                        <th className="text-left px-4 py-2 text-sm font-semibold text-heading">Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      {CLASS_SCHEDULE.slice(0, 6).map((item, index) => (
                        <tr key={index} className={item.period === "Break" ? "bg-accent-50" : "border-t border-border"}>
                          <td className="px-4 py-2 text-sm text-heading">{item.period}</td>
                          <td className="px-4 py-2 text-sm text-paragraph">{item.time}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="mt-12 text-center">
            <Link to="/admission">
              <Button size="lg">Apply for Admission</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
