import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { PAGE_SEO, SEO_DEFAULTS } from "../constants/seo";
import { BreadcrumbJsonLd } from "../components/shared/JsonLd";
import PageHeader from "../components/shared/PageHeader";
import { ACHIEVEMENTS } from "../constants/navigation";
import Badge from "../components/ui/Badge";
import ScrollReveal from "../components/shared/ScrollReveal";

export default function AchievementsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = ["all", "students", "teachers", "school"];

  const filtered = activeCategory === "all"
    ? ACHIEVEMENTS
    : ACHIEVEMENTS.filter((a) => a.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>{PAGE_SEO.achievements.title}</title>
        <meta name="description" content={PAGE_SEO.achievements.description} />
        <meta property="og:title" content={PAGE_SEO.achievements.title} />
        <meta property="og:description" content={PAGE_SEO.achievements.description} />
        <meta property="og:image" content={`${SEO_DEFAULTS.siteUrl}${PAGE_SEO.achievements.image}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_SEO.achievements.title} />
        <meta name="twitter:description" content={PAGE_SEO.achievements.description} />
        <meta name="twitter:image" content={`${SEO_DEFAULTS.siteUrl}${PAGE_SEO.achievements.image}`} />
      </Helmet>

      <BreadcrumbJsonLd items={[{ label: "Home", path: "/" }, { label: "Achievements" }]} />

      <PageHeader
        title="Achievements"
        description="Celebrating the accomplishments of our students, teachers, and institution."
        breadcrumbs={[{ label: "Achievements" }]}
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="flex gap-2 overflow-x-auto pb-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 text-sm rounded-xl capitalize whitespace-nowrap transition-colors ${
                  activeCategory === cat
                    ? "bg-primary-500 text-white"
                    : "bg-muted text-paragraph hover:bg-primary-50"
                }`}
              >
                {cat === "all" ? "All" : cat}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((achievement) => (
              <ScrollReveal key={achievement.id}>
                <div className="bg-white rounded-2xl border border-border shadow-card hover-lift p-6 h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant={
                      achievement.category === "students" ? "success" :
                      achievement.category === "teachers" ? "secondary" : "primary"
                    }>
                      {achievement.category}
                    </Badge>
                    <span className="text-xs text-paragraph">{achievement.year}</span>
                  </div>
                  <h3 className="text-base font-semibold text-heading font-poppins mb-2">{achievement.title}</h3>
                  <p className="text-sm text-paragraph leading-relaxed">{achievement.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
