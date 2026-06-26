import { Helmet } from "react-helmet-async";
import { PAGE_SEO, SEO_DEFAULTS } from "../constants/seo";
import { BreadcrumbJsonLd } from "../components/shared/JsonLd";
import PageHeader from "../components/shared/PageHeader";
import NewsCard from "../components/shared/NewsCard";
import { NEWS } from "../constants/navigation";

export default function NewsPage() {
  return (
    <>
      <Helmet>
        <title>{PAGE_SEO.news.title}</title>
        <meta name="description" content={PAGE_SEO.news.description} />
        <meta property="og:title" content={PAGE_SEO.news.title} />
        <meta property="og:description" content={PAGE_SEO.news.description} />
        <meta property="og:image" content={`${SEO_DEFAULTS.siteUrl}${PAGE_SEO.news.image}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_SEO.news.title} />
        <meta name="twitter:description" content={PAGE_SEO.news.description} />
        <meta name="twitter:image" content={`${SEO_DEFAULTS.siteUrl}${PAGE_SEO.news.image}`} />
      </Helmet>

      <BreadcrumbJsonLd items={[{ label: "Home", path: "/" }, { label: "News" }]} />

      <PageHeader
        title="News & Updates"
        description="Stay informed about the latest happenings at our school."
        breadcrumbs={[{ label: "News" }]}
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {NEWS.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
