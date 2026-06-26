import { Helmet } from "react-helmet-async";
import { PAGE_SEO, SEO_DEFAULTS } from "../constants/seo";
import { BreadcrumbJsonLd } from "../components/shared/JsonLd";
import PageHeader from "../components/shared/PageHeader";
import { Code, ExternalLink, GitBranch, Globe, Heart } from "lucide-react";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeInUp, viewportConfig } from "../animations";

const SKILLS = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "GSAP", "Three.js"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "Laravel", "PHP", "Django", "Python", "REST APIs"],
  },
  {
    category: "Database",
    items: ["MySQL", "MongoDB", "PostgreSQL"],
  },
  {
    category: "Tools & Others",
    items: ["Git", "Docker", "Linux", "Figma", "Vercel", "Netlify", "Sanctum Auth", "Redux Toolkit"],
  },
];

export default function DeveloperPage() {
  return (
    <>
      <Helmet>
        <title>{PAGE_SEO.developer.title}</title>
        <meta name="description" content={PAGE_SEO.developer.description} />
        <meta property="og:title" content={PAGE_SEO.developer.title} />
        <meta property="og:description" content={PAGE_SEO.developer.description} />
        <meta property="og:image" content={`${SEO_DEFAULTS.siteUrl}${PAGE_SEO.developer.image}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_SEO.developer.title} />
        <meta name="twitter:description" content={PAGE_SEO.developer.description} />
        <meta name="twitter:image" content={`${SEO_DEFAULTS.siteUrl}${PAGE_SEO.developer.image}`} />
      </Helmet>

      <BreadcrumbJsonLd items={[{ label: "Home", path: "/" }, { label: "Developer" }]} />

      <PageHeader
        title="Developer"
        description="The people who built this website."
        breadcrumbs={[{ label: "Developer" }]}
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            {/* Developer Card */}
            <motion.div
              {...fadeInUp}
              viewport={viewportConfig}
              className="bg-gradient-to-br from-primary-50 to-primary-100/50 rounded-3xl p-8 md:p-10 border border-primary-200/50 mb-10"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-28 h-28 rounded-full overflow-hidden shrink-0 shadow-lg border-4 border-white">
                  <img
                    src="https://salahuddin.codes/CV-Images.png"
                    alt="Salah Uddin Kader"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="text-center md:text-left">
                  <h2 className="text-2xl font-bold text-heading font-poppins mb-1">
                    Salah Uddin Kader
                  </h2>
                  <p className="text-primary-600 font-medium mb-3">Full Stack Developer</p>
                  <p className="text-paragraph text-sm leading-relaxed max-w-md">
                    Built the complete website ecosystem — public site, admin panel, and Laravel API backend.
                  </p>

                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mt-5">
                    <a
                      href="https://salahuddin.codes"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-primary-200 text-sm font-medium text-heading hover:border-primary-400 hover:shadow-md transition-all"
                    >
                      <Globe className="w-4 h-4" />
                      salahuddin.codes
                    </a>
                    <a
                      href="https://github.com/salahuddingfx"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-primary-200 text-sm font-medium text-heading hover:border-primary-400 hover:shadow-md transition-all"
                    >
                      <FaGithub className="w-4 h-4" />
                      GitHub
                    </a>
                    <a
                      href="https://facebook.com/salahuddingfx"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-primary-200 text-sm font-medium text-heading hover:border-primary-400 hover:shadow-md transition-all"
                    >
                      <FaFacebookF className="w-4 h-4" />
                      Facebook
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div
              {...fadeInUp}
              viewport={viewportConfig}
              className="mb-10"
            >
              <h3 className="text-lg font-semibold text-heading font-poppins mb-5 flex items-center gap-2">
                <Code className="w-5 h-5 text-primary-500" />
                Skills & Technologies
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SKILLS.map((group) => (
                  <div key={group.category} className="bg-muted/30 rounded-2xl p-5 border border-border">
                    <p className="text-xs text-primary-600 font-semibold uppercase tracking-wide mb-3">{group.category}</p>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 bg-white rounded-lg border border-border text-xs font-medium text-heading"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Agency Card */}
            <motion.div
              {...fadeInUp}
              viewport={viewportConfig}
              className="bg-gradient-to-br from-secondary-50 to-secondary-100/50 rounded-3xl p-8 md:p-10 border border-secondary-200/50 mb-10"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-28 h-28 rounded-2xl bg-secondary-600 flex items-center justify-center shrink-0 shadow-lg">
                  <span className="text-3xl font-bold text-white font-poppins">N</span>
                </div>

                <div className="text-center md:text-left">
                  <h2 className="text-2xl font-bold text-heading font-poppins mb-1">
                    Nextora Studio
                  </h2>
                  <p className="text-secondary-600 font-medium mb-3">Digital Agency</p>
                  <p className="text-paragraph text-sm leading-relaxed max-w-md">
                    Professional web development, branding, and digital solutions for businesses and institutions.
                  </p>

                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mt-5">
                    <a
                      href="https://nextorastudio.tech"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-secondary-200 text-sm font-medium text-heading hover:border-secondary-400 hover:shadow-md transition-all"
                    >
                      <Globe className="w-4 h-4" />
                      Website
                    </a>
                    <a
                      href="https://facebook.com/nextorastudio.bd"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-secondary-200 text-sm font-medium text-heading hover:border-secondary-400 hover:shadow-md transition-all"
                    >
                      <FaFacebookF className="w-4 h-4" />
                      Facebook
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.p
              {...fadeInUp}
              viewport={viewportConfig}
              className="text-center text-xs text-paragraph/50 mt-10 flex items-center justify-center gap-1.5"
            >
              Made with <Heart className="w-3 h-3 text-red-400 fill-red-400" /> by Salah Uddin Kader @ Nextora Studio
            </motion.p>
          </div>
        </div>
      </section>
    </>
  );
}
