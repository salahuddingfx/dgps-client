import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { PAGE_SEO, SEO_DEFAULTS } from "../constants/seo";
import { BreadcrumbJsonLd } from "../components/shared/JsonLd";
import PageHeader from "../components/shared/PageHeader";
import NoticeCard from "../components/shared/NoticeCard";
import Pagination from "../components/ui/Pagination";
import { NOTICES } from "../constants/navigation";
import { useDebounce } from "../hooks";
import { Search } from "lucide-react";

const categories = ["All", "Examination", "Holiday", "Admission", "Event", "Meeting"];

export default function NoticesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const debouncedQuery = useDebounce(searchQuery);

  const filtered = NOTICES.filter((notice) => {
    const matchesSearch =
      notice.title.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
      notice.description.toLowerCase().includes(debouncedQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || notice.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginated = filtered.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <>
      <Helmet>
        <title>{PAGE_SEO.notices.title}</title>
        <meta name="description" content={PAGE_SEO.notices.description} />
        <meta property="og:title" content={PAGE_SEO.notices.title} />
        <meta property="og:description" content={PAGE_SEO.notices.description} />
        <meta property="og:image" content={`${SEO_DEFAULTS.siteUrl}${PAGE_SEO.notices.image}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_SEO.notices.title} />
        <meta name="twitter:description" content={PAGE_SEO.notices.description} />
        <meta name="twitter:image" content={`${SEO_DEFAULTS.siteUrl}${PAGE_SEO.notices.image}`} />
      </Helmet>

      <BreadcrumbJsonLd items={[{ label: "Home", path: "/" }, { label: "Notice Board" }]} />

      <PageHeader
        title="Notice Board"
        description="Important notices, announcements, and circulars from the school."
        breadcrumbs={[{ label: "Notice Board" }]}
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-paragraph" />
              <input
                type="text"
                placeholder="Search notices..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search notices"
                className="w-full pl-10 pr-4 py-3 text-sm rounded-xl border border-border bg-white text-heading placeholder:text-paragraph/50 transition-all focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => { setSelectedCategory(cat); setCurrentPage(1); }}
                  aria-pressed={selectedCategory === cat}
                  className={`px-4 py-2 text-sm rounded-xl whitespace-nowrap transition-colors ${
                    selectedCategory === cat
                      ? "bg-primary-500 text-white"
                      : "bg-muted text-paragraph hover:bg-primary-50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {paginated.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {paginated.map((notice) => (
                <NoticeCard key={notice.id} notice={notice} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-paragraph text-lg">No notices found.</p>
            </div>
          )}

          <div className="flex justify-center">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </section>
    </>
  );
}
