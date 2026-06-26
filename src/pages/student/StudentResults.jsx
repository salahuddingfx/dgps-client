import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { BarChart3, TrendingUp, ChevronDown } from "lucide-react";
import * as studentAuthService from "../../services/studentAuthService";
import { fadeInUp, viewportConfig } from "../../animations";
import Select from "../../components/ui/Select";
import Badge from "../../components/ui/Badge";

const TERM_OPTIONS = [
  { value: "all", label: "All Terms" },
  { value: "1st Term", label: "1st Term" },
  { value: "2nd Term", label: "2nd Term" },
  { value: "Final", label: "Final" },
];

const CLASS_OPTIONS = [
  { value: "all", label: "All Classes" },
  { value: "Class III", label: "Class III" },
  { value: "Class IV", label: "Class IV" },
  { value: "Class V", label: "Class V" },
];

export default function StudentResults() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTerm, setSelectedTerm] = useState("all");
  const [selectedClass, setSelectedClass] = useState("all");

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const data = await studentAuthService.getStudentResults();
        setResults(data);
      } catch {
        // error handled silently
      } finally {
        setLoading(false);
      }
    };
    fetchResults();
  }, []);

  const filteredResults = results.filter((r) => {
    const termMatch = selectedTerm === "all" || r.term === selectedTerm;
    const classMatch = selectedClass === "all" || r.className === selectedClass;
    return termMatch && classMatch;
  });

  const gpaTrend = results.map((r) => ({
    term: r.term,
    className: r.className,
    gpa: r.gpa,
  }));

  const maxGpa = 5;

  return (
    <>
      <Helmet>
        <title>My Results | Dhuapalong Govt. Primary School</title>
        <meta name="description" content="View your exam results and GPA trends." />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white py-10 md:py-14">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-2xl md:text-3xl font-bold font-poppins">My Results</h1>
              </div>
              <p className="text-white/70 text-sm">Track your academic performance across all terms</p>
            </motion.div>
          </div>
        </section>

        <div className="container-wide py-8 space-y-8">
          {/* GPA Trend Chart */}
          <motion.div
            {...fadeInUp}
            viewport={viewportConfig}
            className="bg-white rounded-2xl border border-border shadow-card p-6"
          >
            <div className="flex items-center gap-2 mb-5">
              <TrendingUp className="w-5 h-5 text-primary-500" />
              <h2 className="text-lg font-semibold text-heading font-poppins">GPA Trend</h2>
            </div>

            {loading ? (
              <div className="flex items-center justify-center py-12">
                <div className="w-8 h-8 border-2 border-primary-500 border-t-transparent rounded-full animate-spin" />
              </div>
            ) : (
              <div className="flex items-end gap-3 sm:gap-4 h-48 px-2">
                {gpaTrend.map((item, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center gap-2">
                    <span className="text-xs font-semibold text-heading">{item.gpa.toFixed(2)}</span>
                    <div className="w-full relative" style={{ height: `${(item.gpa / maxGpa) * 140}px` }}>
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-500 to-primary-400 rounded-t-lg" />
                    </div>
                    <div className="text-center">
                      <p className="text-[10px] sm:text-xs text-paragraph font-medium leading-tight">
                        {item.term}
                      </p>
                      <p className="text-[10px] text-paragraph/60">{item.className}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Filters */}
          <motion.div
            {...fadeInUp}
            viewport={viewportConfig}
            transition={{ delay: 0.1 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <div className="w-full sm:w-48">
              <Select
                options={CLASS_OPTIONS}
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                placeholder="Select Class"
              />
            </div>
            <div className="w-full sm:w-48">
              <Select
                options={TERM_OPTIONS}
                value={selectedTerm}
                onChange={(e) => setSelectedTerm(e.target.value)}
                placeholder="Select Term"
              />
            </div>
          </motion.div>

          {/* Results List */}
          {loading ? (
            <div className="flex items-center justify-center py-16">
              <div className="w-8 h-8 border-2 border-primary-500 border-t-transparent rounded-full animate-spin" />
            </div>
          ) : filteredResults.length === 0 ? (
            <div className="bg-white rounded-2xl border border-border shadow-card p-12 text-center">
              <BarChart3 className="w-12 h-12 text-paragraph/30 mx-auto mb-3" />
              <p className="text-paragraph">No results found for the selected filters.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredResults.map((result) => (
                <motion.div
                  key={result.id}
                  {...fadeInUp}
                  viewport={viewportConfig}
                  className="bg-white rounded-2xl border border-border shadow-card overflow-hidden"
                >
                  <div className="px-6 py-4 border-b border-border bg-gray-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <h3 className="text-base font-semibold text-heading font-poppins">
                        {result.className} — {result.term}
                      </h3>
                      <Badge variant="primary">{result.year}</Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-paragraph">Total: <span className="font-semibold text-heading">{result.totalMarks}</span></span>
                      <span className="text-paragraph">GPA: <span className="font-bold text-primary-500">{result.gpa.toFixed(2)}</span></span>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left text-xs font-semibold text-paragraph uppercase tracking-wider px-6 py-3">
                            Subject
                          </th>
                          <th className="text-center text-xs font-semibold text-paragraph uppercase tracking-wider px-4 py-3">
                            Marks
                          </th>
                          <th className="text-center text-xs font-semibold text-paragraph uppercase tracking-wider px-4 py-3">
                            Grade
                          </th>
                          <th className="text-center text-xs font-semibold text-paragraph uppercase tracking-wider px-4 py-3">
                            GPA
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {result.subjects.map((subject, idx) => (
                          <tr
                            key={idx}
                            className="border-b border-border last:border-b-0 hover:bg-gray-50/50 transition-colors"
                          >
                            <td className="px-6 py-3 text-sm font-medium text-heading">{subject.name}</td>
                            <td className="px-4 py-3 text-sm text-center text-paragraph">{subject.marks}</td>
                            <td className="px-4 py-3 text-center">
                              <Badge
                                variant={
                                  subject.grade === "A+" ? "success" :
                                  subject.grade === "A" ? "primary" :
                                  subject.grade === "A-" ? "secondary" :
                                  "muted"
                                }
                              >
                                {subject.grade}
                              </Badge>
                            </td>
                            <td className="px-4 py-3 text-sm text-center font-semibold text-heading">
                              {subject.gpa.toFixed(1)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
