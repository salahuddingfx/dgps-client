import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { PAGE_SEO, SEO_DEFAULTS } from "../constants/seo";
import { BreadcrumbJsonLd } from "../components/shared/JsonLd";
import PageHeader from "../components/shared/PageHeader";
import TeacherCard from "../components/shared/TeacherCard";
import { TEACHERS } from "../constants/navigation";
import { useDebounce } from "../hooks";
import Input from "../components/ui/Input";
import { Search } from "lucide-react";

export default function TeachersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedQuery = useDebounce(searchQuery);

  const filteredTeachers = TEACHERS.filter(
    (teacher) =>
      teacher.name.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
      teacher.designation.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
      teacher.subjects.some((s) => s.toLowerCase().includes(debouncedQuery.toLowerCase()))
  );

  return (
    <>
      <Helmet>
        <title>{PAGE_SEO.teachers.title}</title>
        <meta name="description" content={PAGE_SEO.teachers.description} />
        <meta property="og:title" content={PAGE_SEO.teachers.title} />
        <meta property="og:description" content={PAGE_SEO.teachers.description} />
        <meta property="og:image" content={`${SEO_DEFAULTS.siteUrl}${PAGE_SEO.teachers.image}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_SEO.teachers.title} />
        <meta name="twitter:description" content={PAGE_SEO.teachers.description} />
        <meta name="twitter:image" content={`${SEO_DEFAULTS.siteUrl}${PAGE_SEO.teachers.image}`} />
      </Helmet>

      <BreadcrumbJsonLd items={[{ label: "Home", path: "/" }, { label: "Teachers" }]} />

      <PageHeader
        title="Our Teachers"
        description="Meet our dedicated team of qualified and experienced educators."
        breadcrumbs={[{ label: "Teachers" }]}
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="max-w-md mx-auto mb-10">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-paragraph" />
              <input
                type="text"
                placeholder="Search by name, designation, or subject..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search teachers"
                className="w-full pl-10 pr-4 py-3 text-sm rounded-xl border border-border bg-white text-heading placeholder:text-paragraph/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500"
              />
            </div>
          </div>

          {filteredTeachers.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredTeachers.map((teacher) => (
                <TeacherCard key={teacher.id} teacher={teacher} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-paragraph text-lg">No teachers found matching your search.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
