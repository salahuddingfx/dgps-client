import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Calendar, Clock, User, BookOpen } from "lucide-react";
import * as studentAuthService from "../../services/studentAuthService";
import { fadeInUp, viewportConfig } from "../../animations";
import Tabs from "../../components/ui/Tabs";

const DAY_ORDER = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday"];

export default function StudentRoutine() {
  const [loading, setLoading] = useState(true);
  const [routineData, setRoutineData] = useState(null);
  const [activeDay, setActiveDay] = useState(() => {
    const today = new Date().getDay();
    const dayMap = { 6: "Saturday", 0: "Sunday", 1: "Monday", 2: "Tuesday", 3: "Wednesday" };
    return dayMap[today] || "Saturday";
  });

  useEffect(() => {
    const fetchRoutine = async () => {
      try {
        const data = await studentAuthService.getStudentRoutine();
        setRoutineData(data);
      } catch {
        // error handled silently
      } finally {
        setLoading(false);
      }
    };
    fetchRoutine();
  }, []);

  const dayTabs = DAY_ORDER.map((day) => ({
    value: day,
    label: day.slice(0, 3),
  }));

  const currentRoutine = routineData?.routine[activeDay] || [];

  return (
    <>
      <Helmet>
        <title>My Routine | Dhuapalong Govt. Primary School</title>
        <meta name="description" content="View your personal class routine." />
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
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold font-poppins">My Routine</h1>
                  {routineData && (
                    <p className="text-white/70 text-sm mt-1">
                      {routineData.className} &middot; Section {routineData.section}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="container-wide py-8 space-y-6">
          {/* Day Tabs */}
          <motion.div
            {...fadeInUp}
            viewport={viewportConfig}
            className="bg-white rounded-2xl border border-border shadow-card overflow-hidden"
          >
            <div className="px-6 pt-4">
              <Tabs
                tabs={dayTabs}
                activeTab={activeDay}
                onTabChange={setActiveDay}
              />
            </div>

            {/* Routine Table */}
            <div className="p-6">
              {loading ? (
                <div className="flex items-center justify-center py-16">
                  <div className="w-8 h-8 border-2 border-primary-500 border-t-transparent rounded-full animate-spin" />
                </div>
              ) : currentRoutine.length === 0 ? (
                <div className="text-center py-12">
                  <Calendar className="w-12 h-12 text-paragraph/30 mx-auto mb-3" />
                  <p className="text-paragraph">No classes scheduled for this day.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {currentRoutine.map((item, index) => {
                    const isBreak = item.subject === "Break";
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className={`flex items-center gap-4 p-4 rounded-xl transition-colors ${
                          isBreak
                            ? "bg-gray-50 border border-dashed border-gray-200"
                            : "bg-white border border-border shadow-sm hover:shadow-md"
                        }`}
                      >
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                          isBreak ? "bg-gray-100" : "bg-primary-50"
                        }`}>
                          <Clock className={`w-5 h-5 ${isBreak ? "text-gray-400" : "text-primary-500"}`} />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <h3 className={`text-sm font-semibold ${isBreak ? "text-paragraph" : "text-heading"}`}>
                              {item.subject}
                            </h3>
                            {!isBreak && (
                              <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary-50 text-primary-600 font-medium">
                                Period {index + 1}
                              </span>
                            )}
                          </div>
                          {!isBreak && item.teacher && (
                            <div className="flex items-center gap-1.5 mt-1">
                              <User className="w-3 h-3 text-paragraph/50" />
                              <span className="text-xs text-paragraph">{item.teacher}</span>
                            </div>
                          )}
                        </div>

                        <div className="text-right shrink-0">
                          <p className={`text-xs font-medium ${isBreak ? "text-paragraph/60" : "text-heading"}`}>
                            {item.time}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              )}
            </div>
          </motion.div>

          {/* Info Card */}
          <motion.div
            {...fadeInUp}
            viewport={viewportConfig}
            transition={{ delay: 0.2 }}
            className="bg-primary-50 rounded-2xl border border-primary-100 p-5"
          >
            <div className="flex items-start gap-3">
              <BookOpen className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" />
              <div>
                <h3 className="text-sm font-semibold text-heading mb-1">Class Routine Information</h3>
                <p className="text-xs text-paragraph leading-relaxed">
                  This is your personal class routine. School hours are from 8:00 AM to 12:20 PM (Saturday to Wednesday).
                  Thursday and Friday are weekends. If there are any changes to the routine, you will be notified via notices.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
