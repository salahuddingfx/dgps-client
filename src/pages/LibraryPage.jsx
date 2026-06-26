import { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { PAGE_SEO, SEO_DEFAULTS } from "../constants/seo";
import { BreadcrumbJsonLd } from "../components/shared/JsonLd";
import PageHeader from "../components/shared/PageHeader";
import ScrollReveal from "../components/shared/ScrollReveal";
import SectionHeader from "../components/shared/SectionHeader";
import { LIBRARY_BOOKS } from "../constants/newData";
import { Search, BookOpen, Filter, CheckCircle, XCircle } from "lucide-react";

const CATEGORIES = ["All", "Fiction", "Science", "Math", "History", "Literature", "English"];

export default function LibraryPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredBooks = useMemo(() => {
    return LIBRARY_BOOKS.filter((book) => {
      const matchesSearch =
        book.title.toLowerCase().includes(search.toLowerCase()) ||
        book.author.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = activeCategory === "All" || book.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  const stats = useMemo(() => {
    const total = LIBRARY_BOOKS.length;
    const available = LIBRARY_BOOKS.filter((b) => b.status === "available").length;
    const borrowed = total - available;
    const categories = new Set(LIBRARY_BOOKS.map((b) => b.category)).size;
    return { total, available, borrowed, categories };
  }, []);

  return (
    <>
      <Helmet>
        <title>{PAGE_SEO.library.title}</title>
        <meta name="description" content={PAGE_SEO.library.description} />
        <meta property="og:title" content={PAGE_SEO.library.title} />
        <meta property="og:description" content={PAGE_SEO.library.description} />
        <meta property="og:image" content={`${SEO_DEFAULTS.siteUrl}${PAGE_SEO.library.image}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_SEO.library.title} />
        <meta name="twitter:description" content={PAGE_SEO.library.description} />
        <meta name="twitter:image" content={`${SEO_DEFAULTS.siteUrl}${PAGE_SEO.library.image}`} />
      </Helmet>

      <BreadcrumbJsonLd items={[{ label: "Home", path: "/" }, { label: "Library" }]} />

      <PageHeader
        title="School Library"
        description="Explore our collection of books, journals, and digital resources."
        breadcrumbs={[{ label: "Library" }]}
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <div className="bg-primary-50 rounded-2xl p-5 text-center">
                <div className="text-2xl font-bold text-primary-500 font-poppins">{stats.total}</div>
                <div className="text-sm text-paragraph mt-1">Total Books</div>
              </div>
              <div className="bg-green-50 rounded-2xl p-5 text-center">
                <div className="text-2xl font-bold text-green-500 font-poppins">{stats.available}</div>
                <div className="text-sm text-paragraph mt-1">Available</div>
              </div>
              <div className="bg-amber-50 rounded-2xl p-5 text-center">
                <div className="text-2xl font-bold text-amber-500 font-poppins">{stats.borrowed}</div>
                <div className="text-sm text-paragraph mt-1">Borrowed</div>
              </div>
              <div className="bg-purple-50 rounded-2xl p-5 text-center">
                <div className="text-2xl font-bold text-purple-500 font-poppins">{stats.categories}</div>
                <div className="text-sm text-paragraph mt-1">Categories</div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-paragraph/50" />
                <input
                  type="text"
                  placeholder="Search by title or author..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                />
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <Filter className="w-4 h-4 text-paragraph/70" />
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      activeCategory === cat
                        ? "bg-primary-500 text-white shadow-md"
                        : "bg-background text-paragraph hover:bg-primary-50 border border-border"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {filteredBooks.length === 0 ? (
            <ScrollReveal>
              <div className="text-center py-16">
                <BookOpen className="w-16 h-16 text-paragraph/30 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-heading font-poppins mb-2">No Books Found</h3>
                <p className="text-paragraph">Try adjusting your search or filter criteria.</p>
              </div>
            </ScrollReveal>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredBooks.map((book, index) => (
                <ScrollReveal key={book.id} animation="fadeUp" delay={index * 0.05}>
                  <div className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 group">
                    <div
                      className="h-40 flex items-center justify-center relative"
                      style={{ backgroundColor: `${book.coverColor}15` }}
                    >
                      <BookOpen className="w-12 h-12 opacity-30" style={{ color: book.coverColor }} />
                      <span
                        className="absolute top-3 left-3 text-xs font-semibold px-2 py-1 rounded-full"
                        style={{ backgroundColor: `${book.coverColor}20`, color: book.coverColor }}
                      >
                        {book.category}
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="text-base font-bold text-heading font-poppins mb-1 line-clamp-2">
                        {book.title}
                      </h3>
                      <p className="text-sm text-paragraph mb-3">by {book.author}</p>
                      <div className="flex items-center gap-2">
                        {book.status === "available" ? (
                          <span className="flex items-center gap-1.5 text-xs font-medium text-green-600 bg-green-50 px-2.5 py-1 rounded-full">
                            <CheckCircle className="w-3.5 h-3.5" />
                            Available
                          </span>
                        ) : (
                          <span className="flex items-center gap-1.5 text-xs font-medium text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full">
                            <XCircle className="w-3.5 h-3.5" />
                            Borrowed
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
