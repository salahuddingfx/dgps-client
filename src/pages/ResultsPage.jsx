import { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { PAGE_SEO, SEO_DEFAULTS } from "../constants/seo";
import { BreadcrumbJsonLd } from "../components/shared/JsonLd";
import PageHeader from "../components/shared/PageHeader";
import ScrollReveal from "../components/shared/ScrollReveal";
import Select from "../components/ui/Select";
import Button from "../components/ui/Button";
import { Award, Printer, TrendingUp } from "lucide-react";

const classOptions = [
  { value: "class-one", label: "Class One" },
  { value: "class-three", label: "Class Three" },
  { value: "class-five", label: "Class Five" },
];

const examOptions = [
  { value: "1st-term", label: "1st Term Exam" },
  { value: "2nd-term", label: "2nd Term Exam" },
  { value: "final", label: "Final Exam" },
];

const MOCK_RESULTS = {
  "class-one": {
    "1st-term": [
      { subject: "Bangla", marks: 82, total: 100 },
      { subject: "English", marks: 75, total: 100 },
      { subject: "Mathematics", marks: 90, total: 100 },
      { subject: "General Knowledge", marks: 88, total: 100 },
      { subject: "Islamic Studies", marks: 95, total: 100 },
      { subject: "Physical Education", marks: 85, total: 100 },
    ],
    "2nd-term": [
      { subject: "Bangla", marks: 86, total: 100 },
      { subject: "English", marks: 78, total: 100 },
      { subject: "Mathematics", marks: 92, total: 100 },
      { subject: "General Knowledge", marks: 90, total: 100 },
      { subject: "Islamic Studies", marks: 93, total: 100 },
      { subject: "Physical Education", marks: 88, total: 100 },
    ],
    final: [
      { subject: "Bangla", marks: 88, total: 100 },
      { subject: "English", marks: 82, total: 100 },
      { subject: "Mathematics", marks: 95, total: 100 },
      { subject: "General Knowledge", marks: 92, total: 100 },
      { subject: "Islamic Studies", marks: 97, total: 100 },
      { subject: "Physical Education", marks: 90, total: 100 },
    ],
  },
  "class-three": {
    "1st-term": [
      { subject: "Bangla", marks: 78, total: 100 },
      { subject: "English", marks: 70, total: 100 },
      { subject: "Mathematics", marks: 85, total: 100 },
      { subject: "Science", marks: 76, total: 100 },
      { subject: "Social Science", marks: 82, total: 100 },
      { subject: "Islamic Studies", marks: 91, total: 100 },
      { subject: "Physical Education", marks: 88, total: 100 },
    ],
    "2nd-term": [
      { subject: "Bangla", marks: 82, total: 100 },
      { subject: "English", marks: 74, total: 100 },
      { subject: "Mathematics", marks: 88, total: 100 },
      { subject: "Science", marks: 80, total: 100 },
      { subject: "Social Science", marks: 85, total: 100 },
      { subject: "Islamic Studies", marks: 93, total: 100 },
      { subject: "Physical Education", marks: 90, total: 100 },
    ],
    final: [
      { subject: "Bangla", marks: 85, total: 100 },
      { subject: "English", marks: 78, total: 100 },
      { subject: "Mathematics", marks: 91, total: 100 },
      { subject: "Science", marks: 84, total: 100 },
      { subject: "Social Science", marks: 88, total: 100 },
      { subject: "Islamic Studies", marks: 95, total: 100 },
      { subject: "Physical Education", marks: 92, total: 100 },
    ],
  },
  "class-five": {
    "1st-term": [
      { subject: "Bangla", marks: 75, total: 100 },
      { subject: "English", marks: 68, total: 100 },
      { subject: "Mathematics", marks: 82, total: 100 },
      { subject: "Science", marks: 72, total: 100 },
      { subject: "Social Science", marks: 80, total: 100 },
      { subject: "Islamic Studies", marks: 88, total: 100 },
      { subject: "Physical Education", marks: 85, total: 100 },
      { subject: "Information Technology", marks: 78, total: 100 },
    ],
    "2nd-term": [
      { subject: "Bangla", marks: 80, total: 100 },
      { subject: "English", marks: 73, total: 100 },
      { subject: "Mathematics", marks: 86, total: 100 },
      { subject: "Science", marks: 77, total: 100 },
      { subject: "Social Science", marks: 83, total: 100 },
      { subject: "Islamic Studies", marks: 90, total: 100 },
      { subject: "Physical Education", marks: 87, total: 100 },
      { subject: "Information Technology", marks: 82, total: 100 },
    ],
    final: [
      { subject: "Bangla", marks: 84, total: 100 },
      { subject: "English", marks: 77, total: 100 },
      { subject: "Mathematics", marks: 90, total: 100 },
      { subject: "Science", marks: 81, total: 100 },
      { subject: "Social Science", marks: 86, total: 100 },
      { subject: "Islamic Studies", marks: 92, total: 100 },
      { subject: "Physical Education", marks: 89, total: 100 },
      { subject: "Information Technology", marks: 85, total: 100 },
    ],
  },
};

function getGrade(marks) {
  if (marks >= 80) return { grade: "A+", gpa: 5.0 };
  if (marks >= 70) return { grade: "A", gpa: 4.0 };
  if (marks >= 60) return { grade: "A-", gpa: 3.5 };
  if (marks >= 50) return { grade: "B", gpa: 3.0 };
  if (marks >= 40) return { grade: "C", gpa: 2.0 };
  if (marks >= 33) return { grade: "D", gpa: 1.0 };
  return { grade: "F", gpa: 0.0 };
}

function getGradeColor(grade) {
  if (grade === "A+") return "bg-green-100 text-green-700";
  if (grade === "A") return "bg-blue-100 text-blue-700";
  if (grade === "A-") return "bg-cyan-100 text-cyan-700";
  if (grade === "B") return "bg-yellow-100 text-yellow-700";
  if (grade === "C") return "bg-orange-100 text-orange-700";
  return "bg-red-100 text-red-700";
}

export default function ResultsPage() {
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedExam, setSelectedExam] = useState("");

  const results = useMemo(() => {
    if (!selectedClass || !selectedExam) return null;
    return MOCK_RESULTS[selectedClass]?.[selectedExam] || null;
  }, [selectedClass, selectedExam]);

  const overallGPA = useMemo(() => {
    if (!results) return 0;
    const total = results.reduce((sum, r) => sum + getGrade(r.marks).gpa, 0);
    return (total / results.length).toFixed(2);
  }, [results]);

  const classLabel = classOptions.find((c) => c.value === selectedClass)?.label || "";
  const examLabel = examOptions.find((e) => e.value === selectedExam)?.label || "";

  return (
    <>
      <Helmet>
        <title>{PAGE_SEO.results.title}</title>
        <meta name="description" content={PAGE_SEO.results.description} />
        <meta property="og:title" content={PAGE_SEO.results.title} />
        <meta property="og:description" content={PAGE_SEO.results.description} />
        <meta property="og:image" content={`${SEO_DEFAULTS.siteUrl}${PAGE_SEO.results.image}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_SEO.results.title} />
        <meta name="twitter:description" content={PAGE_SEO.results.description} />
        <meta name="twitter:image" content={`${SEO_DEFAULTS.siteUrl}${PAGE_SEO.results.image}`} />
      </Helmet>

      <BreadcrumbJsonLd items={[{ label: "Home", path: "/" }, { label: "Results" }]} />

      <PageHeader
        title="Exam Results"
        description="View examination results for all classes and terms."
        breadcrumbs={[{ label: "Results" }]}
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              {/* Selection Controls */}
              <div className="bg-white rounded-2xl border border-border p-6 md:p-8 mb-8">
                <h2 className="text-lg font-semibold text-heading font-poppins mb-4">Select Class & Exam</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Select
                    label="Class"
                    options={classOptions}
                    placeholder="Select a class"
                    value={selectedClass}
                    onChange={(e) => setSelectedClass(e.target.value)}
                  />
                  <Select
                    label="Examination"
                    options={examOptions}
                    placeholder="Select exam term"
                    value={selectedExam}
                    onChange={(e) => setSelectedExam(e.target.value)}
                  />
                </div>
              </div>

              {/* Results Table */}
              {results ? (
                <ScrollReveal>
                  <div id="results-content" className="bg-white rounded-2xl border border-border overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-primary-500 to-primary-600 p-6 text-white print:bg-primary-500 print:text-white">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-xl font-bold font-poppins">
                            {classLabel} — {examLabel}
                          </h3>
                          <p className="text-white/70 text-sm mt-1">
                            Dhuapalong Govt. Primary School
                          </p>
                          <p className="text-white/70 text-sm">
                            Academic Session 2025-2026
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="bg-white/20 rounded-xl px-4 py-3">
                            <p className="text-xs text-white/70">Overall GPA</p>
                            <p className="text-2xl font-bold">{overallGPA}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="bg-primary-50 print:bg-gray-100">
                            <th className="text-left px-6 py-3 text-sm font-semibold text-heading">#</th>
                            <th className="text-left px-6 py-3 text-sm font-semibold text-heading">Subject</th>
                            <th className="text-center px-6 py-3 text-sm font-semibold text-heading">Marks</th>
                            <th className="text-center px-6 py-3 text-sm font-semibold text-heading">Grade</th>
                            <th className="text-center px-6 py-3 text-sm font-semibold text-heading">GPA</th>
                          </tr>
                        </thead>
                        <tbody>
                          {results.map((row, i) => {
                            const { grade, gpa } = getGrade(row.marks);
                            return (
                              <tr key={i} className="border-t border-border hover:bg-primary-50/30 transition-colors">
                                <td className="px-6 py-3 text-sm text-paragraph">{i + 1}</td>
                                <td className="px-6 py-3 text-sm font-medium text-heading">{row.subject}</td>
                                <td className="px-6 py-3 text-sm text-center text-heading">
                                  {row.marks} <span className="text-paragraph">/ {row.total}</span>
                                </td>
                                <td className="px-6 py-3 text-center">
                                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getGradeColor(grade)}`}>
                                    {grade}
                                  </span>
                                </td>
                                <td className="px-6 py-3 text-sm text-center font-medium text-heading">{gpa.toFixed(1)}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>

                    {/* Summary */}
                    <div className="p-6 bg-accent-50 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="flex items-center gap-2 text-heading">
                        <Award className="w-5 h-5 text-primary-500" />
                        <span className="text-sm font-medium">
                          Total Subjects: {results.length} | Highest GPA: 5.0
                        </span>
                      </div>
                      <Button variant="outline" size="sm" onClick={() => window.print()}>
                        <Printer className="w-4 h-4" />
                        Print Result
                      </Button>
                    </div>
                  </div>
                </ScrollReveal>
              ) : (
                <ScrollReveal>
                  <div className="text-center py-16">
                    <TrendingUp className="w-12 h-12 text-paragraph/30 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-heading font-poppins mb-2">Select Class & Exam</h3>
                    <p className="text-paragraph text-sm">
                      Choose a class and exam term above to view the results.
                    </p>
                  </div>
                </ScrollReveal>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
