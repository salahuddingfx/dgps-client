import { Helmet } from "react-helmet-async";
import { PAGE_SEO, SEO_DEFAULTS } from "../constants/seo";
import { SchoolJsonLd, BreadcrumbJsonLd } from "../components/shared/JsonLd";
import PageHeader from "../components/shared/PageHeader";
import ScrollReveal from "../components/shared/ScrollReveal";
import SectionHeader from "../components/shared/SectionHeader";
import Timeline from "../components/shared/Timeline";
import { SCHOOL_INFO } from "../constants/navigation";
import { Crosshair, Rocket } from "lucide-react";
const history = [
  {
    id: 1,
    year: "1965",
    title: "School Established",
    description: "Dhuapalong Government Primary School was established to serve the educational needs of the local community.",
  },
  {
    id: 2,
    year: "1985",
    title: "New Building Constructed",
    description: "A permanent building was constructed with government funding, replacing the earlier temporary structure.",
  },
  {
    id: 3,
    year: "2000",
    title: "Digital Initiative",
    description: "Introduction of computers and digital learning tools to modernize education.",
  },
  {
    id: 4,
    year: "2010",
    title: "School Expansion",
    description: "Additional classrooms were added to accommodate growing student enrollment.",
  },
  {
    id: 5,
    year: "2020",
    title: "Smart Classroom",
    description: "Installation of digital classrooms with projectors and interactive learning systems.",
  },
  {
    id: 6,
    year: "2025",
    title: "Modern Era",
    description: "Complete renovation of facilities and introduction of modern teaching methodologies.",
  },
];

const vision = "To create a nurturing educational environment where every child develops the knowledge, skills, and values needed to become responsible citizens and future leaders of Bangladesh.";

const mission = "To provide accessible, inclusive, and quality primary education that fosters academic excellence, moral development, and creative thinking, preparing students for successful futures.";

const infrastructure = [
  { label: "Total Campus Area", value: "2.5 Acres" },
  { label: "Classrooms", value: "8 Rooms" },
  { label: "Computer Lab", value: "15 Stations" },
  { label: "Library", value: "2000+ Books" },
  { label: "Playground", value: "Spacious Field" },
  { label: "Drinking Water", value: "Purified Supply" },
];

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>{PAGE_SEO.about.title}</title>
        <meta name="description" content={PAGE_SEO.about.description} />
        <meta property="og:title" content={PAGE_SEO.about.title} />
        <meta property="og:description" content={PAGE_SEO.about.description} />
        <meta property="og:image" content={`${SEO_DEFAULTS.siteUrl}${PAGE_SEO.about.image}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_SEO.about.title} />
        <meta name="twitter:description" content={PAGE_SEO.about.description} />
        <meta name="twitter:image" content={`${SEO_DEFAULTS.siteUrl}${PAGE_SEO.about.image}`} />
      </Helmet>

      <SchoolJsonLd />
      <BreadcrumbJsonLd items={[{ label: "Home", path: "/" }, { label: "About" }]} />

      <PageHeader
        title="About Our School"
        description="Six decades of educational excellence and community service."
        breadcrumbs={[{ label: "About School" }]}
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal animation="fadeLeft">
              <div className="space-y-6">
                <span className="text-sm font-semibold text-primary-500 uppercase tracking-wider">Our Story</span>
                <h2 className="text-3xl font-bold text-heading font-poppins">
                  A Legacy of Excellence Since {SCHOOL_INFO.established}
                </h2>
                <div className="space-y-4 text-paragraph leading-relaxed">
                  <p>
                    {SCHOOL_INFO.name} was established in {SCHOOL_INFO.established} with a vision to provide quality education to the children of Dhuapalong and surrounding areas. What started as a small institution with a handful of students has grown into a thriving school serving over 450 students.
                  </p>
                  <p>
                    Located in the heart of Dhuapalong, Ramu, Cox's Bazar, our school has been a pillar of the community for over six decades. We have consistently maintained high academic standards while fostering the overall development of our students.
                  </p>
                  <p>
                    Our dedicated team of 18 qualified teachers works tirelessly to ensure every student receives personalized attention and the best possible education. We follow the national curriculum while incorporating modern teaching methods to make learning engaging and effective.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fadeRight">
              <div className="grid grid-cols-2 gap-4">
                {infrastructure.map((item) => (
                  <div key={item.label} className="bg-primary-50 rounded-2xl p-5 text-center">
                    <div className="text-xl font-bold text-primary-500 font-poppins">{item.value}</div>
                    <div className="text-sm text-paragraph mt-1">{item.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal animation="fadeLeft">
              <div className="bg-white rounded-2xl border border-border p-8">
                <div className="w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center mb-5">
                  <Crosshair className="w-7 h-7 text-primary-500" />
                </div>
                <h3 className="text-xl font-bold text-heading font-poppins mb-4">Our Vision</h3>
                <p className="text-paragraph leading-relaxed">{vision}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fadeRight">
              <div className="bg-white rounded-2xl border border-border p-8">
                <div className="w-14 h-14 rounded-xl bg-secondary-50 flex items-center justify-center mb-5">
                  <Rocket className="w-7 h-7 text-secondary-500" />
                </div>
                <h3 className="text-xl font-bold text-heading font-poppins mb-4">Our Mission</h3>
                <p className="text-paragraph leading-relaxed">{mission}</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <SectionHeader
            subtitle="Our Journey"
            title="School Timeline"
            description="Key milestones in the history of our institution."
          />
          <div className="max-w-3xl mx-auto">
            <Timeline items={history} />
          </div>
        </div>
      </section>
    </>
  );
}
