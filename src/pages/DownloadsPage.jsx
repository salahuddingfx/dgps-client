import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { PAGE_SEO, SEO_DEFAULTS } from "../constants/seo";
import { BreadcrumbJsonLd } from "../components/shared/JsonLd";
import PageHeader from "../components/shared/PageHeader";
import DownloadCard from "../components/shared/DownloadCard";
import { DOWNLOADS } from "../constants/navigation";
import Tabs from "../components/ui/Tabs";

export default function DownloadsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = ["all", ...new Set(DOWNLOADS.map((d) => d.category.toLowerCase()))];

  const filtered = activeCategory === "all"
    ? DOWNLOADS
    : DOWNLOADS.filter((d) => d.category.toLowerCase() === activeCategory);

  return (
    <>
      <Helmet>
        <title>{PAGE_SEO.downloads.title}</title>
        <meta name="description" content={PAGE_SEO.downloads.description} />
        <meta property="og:title" content={PAGE_SEO.downloads.title} />
        <meta property="og:description" content={PAGE_SEO.downloads.description} />
        <meta property="og:image" content={`${SEO_DEFAULTS.siteUrl}${PAGE_SEO.downloads.image}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_SEO.downloads.title} />
        <meta name="twitter:description" content={PAGE_SEO.downloads.description} />
        <meta name="twitter:image" content={`${SEO_DEFAULTS.siteUrl}${PAGE_SEO.downloads.image}`} />
      </Helmet>

      <BreadcrumbJsonLd items={[{ label: "Home", path: "/" }, { label: "Downloads" }]} />

      <PageHeader
        title="Downloads"
        description="Download important documents including forms, routines, and circulars."
        breadcrumbs={[{ label: "Downloads" }]}
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

          <div className="grid md:grid-cols-2 gap-4">
            {filtered.map((file) => (
              <DownloadCard key={file.id} file={file} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
