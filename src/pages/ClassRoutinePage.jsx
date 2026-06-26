import { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { PAGE_SEO, SEO_DEFAULTS } from "../constants/seo";
import { BreadcrumbJsonLd } from "../components/shared/JsonLd";
import PageHeader from "../components/shared/PageHeader";
import ScrollReveal from "../components/shared/ScrollReveal";
import Select from "../components/ui/Select";
import Button from "../components/ui/Button";
import { Clock, Printer, BookOpen } from "lucide-react";

const classOptions = [
  { value: "play", label: "Play Group" },
  { value: "nursery", label: "Nursery" },
  { value: "class-one", label: "Class One" },
  { value: "class-two", label: "Class Two" },
  { value: "class-three", label: "Class Three" },
  { value: "class-four", label: "Class Four" },
  { value: "class-five", label: "Class Five" },
];

const DAYS = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday"];
const PERIODS = [1, 2, 3, 4, 5, 6, 7, 8];

const SUBJECT_COLORS = {
  Bangla: { bg: "bg-red-50", text: "text-red-700", border: "border-red-200" },
  English: { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200" },
  Mathematics: { bg: "bg-purple-50", text: "text-purple-700", border: "border-purple-200" },
  Science: { bg: "bg-green-50", text: "text-green-700", border: "border-green-200" },
  "Social Science": { bg: "bg-yellow-50", text: "text-yellow-700", border: "border-yellow-200" },
  "Islamic Studies": { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200" },
  "Physical Education": { bg: "bg-orange-50", text: "text-orange-700", border: "border-orange-200" },
  "General Knowledge": { bg: "bg-cyan-50", text: "text-cyan-700", border: "border-cyan-200" },
  "Information Technology": { bg: "bg-indigo-50", text: "text-indigo-700", border: "border-indigo-200" },
  Drawing: { bg: "bg-pink-50", text: "text-pink-700", border: "border-pink-200" },
  "Religious Studies": { bg: "bg-teal-50", text: "text-teal-700", border: "border-teal-200" },
  Break: { bg: "bg-gray-50", text: "text-gray-500", border: "border-gray-200" },
};

function getSubjectStyle(subject) {
  return (
    SUBJECT_COLORS[subject] || {
      bg: "bg-slate-50",
      text: "text-slate-700",
      border: "border-slate-200",
    }
  );
}

const MOCK_ROUTINES = {
  play: {
    "Saturday": [
      null, { subject: "Drawing", teacher: "Ruma Begum", room: "Play A" },
      { subject: "General Knowledge", teacher: "Nasima Khatun", room: "Play A" },
      null,
      { subject: "Physical Education", teacher: "Kamal Hossain", room: "Playground" },
      { subject: "Drawing", teacher: "Ruma Begum", room: "Play A" },
      null, null,
    ],
    "Sunday": [
      null, { subject: "Bangla", teacher: "Fatema Begum", room: "Play A" },
      { subject: "English", teacher: "Shahana Akter", room: "Play A" },
      null,
      { subject: "Mathematics", teacher: "Fatema Begum", room: "Play A" },
      { subject: "Physical Education", teacher: "Kamal Hossain", room: "Playground" },
      null, null,
    ],
    "Monday": [
      null, { subject: "General Knowledge", teacher: "Nasima Khatun", room: "Play A" },
      { subject: "Drawing", teacher: "Ruma Begum", room: "Play A" },
      null,
      { subject: "Bangla", teacher: "Fatema Begum", room: "Play A" },
      { subject: "English", teacher: "Shahana Akter", room: "Play A" },
      null, null,
    ],
    "Tuesday": [
      null, { subject: "Mathematics", teacher: "Fatema Begum", room: "Play A" },
      { subject: "Physical Education", teacher: "Kamal Hossain", room: "Playground" },
      null,
      { subject: "Drawing", teacher: "Ruma Begum", room: "Play A" },
      { subject: "General Knowledge", teacher: "Nasima Khatun", room: "Play A" },
      null, null,
    ],
    "Wednesday": [
      null, { subject: "English", teacher: "Shahana Akter", room: "Play A" },
      { subject: "Bangla", teacher: "Fatema Begum", room: "Play A" },
      null,
      { subject: "Mathematics", teacher: "Fatema Begum", room: "Play A" },
      { subject: "Drawing", teacher: "Ruma Begum", room: "Play A" },
      null, null,
    ],
  },
  "class-three": {
    "Saturday": [
      { subject: "Bangla", teacher: "Fatema Begum", room: "Room 3A" },
      { subject: "Mathematics", teacher: "Mohammad Rahman", room: "Room 3A" },
      { subject: "Science", teacher: "Rafiqul Islam", room: "Room 3A" },
      null,
      { subject: "English", teacher: "Shahana Akter", room: "Room 3A" },
      { subject: "Islamic Studies", teacher: "Ruma Begum", room: "Room 3A" },
      { subject: "Physical Education", teacher: "Kamal Hossain", room: "Playground" },
      null,
    ],
    "Sunday": [
      { subject: "English", teacher: "Shahana Akter", room: "Room 3A" },
      { subject: "Science", teacher: "Rafiqul Islam", room: "Room 3A" },
      { subject: "Bangla", teacher: "Fatema Begum", room: "Room 3A" },
      null,
      { subject: "Social Science", teacher: "Nasima Khatun", room: "Room 3A" },
      { subject: "Mathematics", teacher: "Mohammad Rahman", room: "Room 3A" },
      { subject: "Islamic Studies", teacher: "Ruma Begum", room: "Room 3A" },
      null,
    ],
    "Monday": [
      { subject: "Mathematics", teacher: "Mohammad Rahman", room: "Room 3A" },
      { subject: "Bangla", teacher: "Fatema Begum", room: "Room 3A" },
      { subject: "English", teacher: "Shahana Akter", room: "Room 3A" },
      null,
      { subject: "Science", teacher: "Rafiqul Islam", room: "Room 3A" },
      { subject: "Social Science", teacher: "Nasima Khatun", room: "Room 3A" },
      { subject: "Physical Education", teacher: "Kamal Hossain", room: "Playground" },
      null,
    ],
    "Tuesday": [
      { subject: "Science", teacher: "Rafiqul Islam", room: "Room 3A" },
      { subject: "Social Science", teacher: "Nasima Khatun", room: "Room 3A" },
      { subject: "Mathematics", teacher: "Mohammad Rahman", room: "Room 3A" },
      null,
      { subject: "Bangla", teacher: "Fatema Begum", room: "Room 3A" },
      { subject: "English", teacher: "Shahana Akter", room: "Room 3A" },
      { subject: "Islamic Studies", teacher: "Ruma Begum", room: "Room 3A" },
      null,
    ],
    "Wednesday": [
      { subject: "Bangla", teacher: "Fatema Begum", room: "Room 3A" },
      { subject: "English", teacher: "Shahana Akter", room: "Room 3A" },
      { subject: "Islamic Studies", teacher: "Ruma Begum", room: "Room 3A" },
      null,
      { subject: "Mathematics", teacher: "Mohammad Rahman", room: "Room 3A" },
      { subject: "Science", teacher: "Rafiqul Islam", room: "Room 3A" },
      { subject: "Social Science", teacher: "Nasima Khatun", room: "Room 3A" },
      null,
    ],
  },
  "class-five": {
    "Saturday": [
      { subject: "Bangla", teacher: "Fatema Begum", room: "Room 5A" },
      { subject: "Mathematics", teacher: "Mohammad Rahman", room: "Room 5A" },
      { subject: "Science", teacher: "Rafiqul Islam", room: "Room 5A" },
      null,
      { subject: "English", teacher: "Shahana Akter", room: "Room 5A" },
      { subject: "Social Science", teacher: "Nasima Khatun", room: "Room 5A" },
      { subject: "Information Technology", teacher: "Rafiqul Islam", room: "Computer Lab" },
      null,
    ],
    "Sunday": [
      { subject: "English", teacher: "Shahana Akter", room: "Room 5A" },
      { subject: "Science", teacher: "Rafiqul Islam", room: "Room 5A" },
      { subject: "Mathematics", teacher: "Mohammad Rahman", room: "Room 5A" },
      null,
      { subject: "Bangla", teacher: "Fatema Begum", room: "Room 5A" },
      { subject: "Islamic Studies", teacher: "Ruma Begum", room: "Room 5A" },
      { subject: "Physical Education", teacher: "Kamal Hossain", room: "Playground" },
      null,
    ],
    "Monday": [
      { subject: "Science", teacher: "Rafiqul Islam", room: "Room 5A" },
      { subject: "Social Science", teacher: "Nasima Khatun", room: "Room 5A" },
      { subject: "Bangla", teacher: "Fatema Begum", room: "Room 5A" },
      null,
      { subject: "English", teacher: "Shahana Akter", room: "Room 5A" },
      { subject: "Mathematics", teacher: "Mohammad Rahman", room: "Room 5A" },
      { subject: "Information Technology", teacher: "Rafiqul Islam", room: "Computer Lab" },
      null,
    ],
    "Tuesday": [
      { subject: "Mathematics", teacher: "Mohammad Rahman", room: "Room 5A" },
      { subject: "Bangla", teacher: "Fatema Begum", room: "Room 5A" },
      { subject: "Information Technology", teacher: "Rafiqul Islam", room: "Computer Lab" },
      null,
      { subject: "Science", teacher: "Rafiqul Islam", room: "Room 5A" },
      { subject: "English", teacher: "Shahana Akter", room: "Room 5A" },
      { subject: "Islamic Studies", teacher: "Ruma Begum", room: "Room 5A" },
      null,
    ],
    "Wednesday": [
      { subject: "Social Science", teacher: "Nasima Khatun", room: "Room 5A" },
      { subject: "Islamic Studies", teacher: "Ruma Begum", room: "Room 5A" },
      { subject: "Mathematics", teacher: "Mohammad Rahman", room: "Room 5A" },
      null,
      { subject: "Bangla", teacher: "Fatema Begum", room: "Room 5A" },
      { subject: "Science", teacher: "Rafiqul Islam", room: "Room 5A" },
      { subject: "Physical Education", teacher: "Kamal Hossain", room: "Playground" },
      null,
    ],
  },
};

function PeriodCell({ data }) {
  if (!data) {
    return (
      <div className="p-2 text-center text-xs text-paragraph/40">
        —
      </div>
    );
  }

  if (data.subject === "Break") {
    const style = getSubjectStyle("Break");
    return (
      <div className={`p-2 rounded-lg text-center ${style.bg} ${style.text}`}>
        <span className="text-xs font-medium">Break</span>
      </div>
    );
  }

  const style = getSubjectStyle(data.subject);

  return (
    <div className={`p-2 rounded-lg border ${style.bg} ${style.border} ${style.text} min-h-[60px]`}>
      <p className="text-xs font-semibold leading-tight">{data.subject}</p>
      <p className="text-[10px] opacity-70 mt-1 leading-tight">{data.teacher}</p>
      <p className="text-[10px] opacity-60 mt-0.5">{data.room}</p>
    </div>
  );
}

export default function ClassRoutinePage() {
  const [selectedClass, setSelectedClass] = useState("class-three");

  const routine = useMemo(() => {
    return MOCK_ROUTINES[selectedClass] || MOCK_ROUTINES["class-three"];
  }, [selectedClass]);

  const classLabel = classOptions.find((c) => c.value === selectedClass)?.label || "";

  return (
    <>
      <Helmet>
        <title>{PAGE_SEO.routine.title}</title>
        <meta name="description" content={PAGE_SEO.routine.description} />
        <meta property="og:title" content={PAGE_SEO.routine.title} />
        <meta property="og:description" content={PAGE_SEO.routine.description} />
        <meta property="og:image" content={`${SEO_DEFAULTS.siteUrl}${PAGE_SEO.routine.image}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_SEO.routine.title} />
        <meta name="twitter:description" content={PAGE_SEO.routine.description} />
        <meta name="twitter:image" content={`${SEO_DEFAULTS.siteUrl}${PAGE_SEO.routine.image}`} />
      </Helmet>

      <BreadcrumbJsonLd items={[{ label: "Home", path: "/" }, { label: "Class Routine" }]} />

      <PageHeader
        title="Class Routine"
        description="Weekly class schedule for all classes."
        breadcrumbs={[{ label: "Class Routine" }]}
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <ScrollReveal>
            {/* Controls */}
            <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4 mb-8">
              <div className="w-full sm:w-72">
                <Select
                  label="Select Class"
                  options={classOptions}
                  value={selectedClass}
                  onChange={(e) => setSelectedClass(e.target.value)}
                />
              </div>
              <Button variant="outline" size="sm" onClick={() => window.print()}>
                <Printer className="w-4 h-4" />
                Print Routine
              </Button>
            </div>

            {/* Routine Header */}
            <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-t-2xl p-6 text-white print:bg-primary-500">
              <div className="flex items-center gap-3">
                <BookOpen className="w-6 h-6" />
                <div>
                  <h2 className="text-xl font-bold font-poppins">{classLabel} — Weekly Routine</h2>
                  <p className="text-white/70 text-sm mt-1">
                    <Clock className="w-3.5 h-3.5 inline mr-1" />
                    Saturday — Wednesday | 8:00 AM - 2:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Routine Grid */}
            <div className="border border-border rounded-b-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[700px]">
                  <thead>
                    <tr className="bg-primary-50">
                      <th className="px-3 py-3 text-left text-sm font-semibold text-heading w-20">Period</th>
                      {DAYS.map((day) => (
                        <th key={day} className="px-2 py-3 text-center text-sm font-semibold text-heading">
                          {day.slice(0, 3)}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {PERIODS.map((period) => (
                      <tr key={period} className="border-t border-border">
                        <td className="px-3 py-2 text-xs font-semibold text-heading bg-primary-50/50 text-center">
                          {period === 4 ? "Break" : `P${period}`}
                        </td>
                        {DAYS.map((day) => {
                          const cellData = routine[day]?.[period - 1];
                          const isBreak = period === 4;
                          return (
                            <td key={`${day}-${period}`} className="px-1.5 py-1.5 border-l border-border">
                              {isBreak ? (
                                <div className="p-2 text-center text-xs text-paragraph/40 bg-gray-50 rounded-lg">
                                  Break
                                </div>
                              ) : (
                                <PeriodCell data={cellData} />
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Legend */}
            <div className="mt-6 flex flex-wrap gap-2">
              {Object.entries(SUBJECT_COLORS)
                .filter(([key]) => key !== "Break")
                .map(([subject, colors]) => (
                  <div
                    key={subject}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs ${colors.bg} ${colors.text} border ${colors.border}`}
                  >
                    <span className="w-2 h-2 rounded-full bg-current opacity-40" />
                    {subject}
                  </div>
                ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
