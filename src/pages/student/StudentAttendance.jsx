import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { CalendarCheck, ChevronLeft, ChevronRight, CheckCircle, XCircle, Clock } from "lucide-react";
import * as studentAuthService from "../../services/studentAuthService";
import { fadeInUp, viewportConfig } from "../../animations";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function StudentAttendance() {
  const [loading, setLoading] = useState(true);
  const [attendanceData, setAttendanceData] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const data = await studentAuthService.getStudentAttendance();
        setAttendanceData(data);
      } catch {
        // error handled silently
      } finally {
        setLoading(false);
      }
    };
    fetchAttendance();
  }, []);

  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "present": return "bg-green-500 text-white";
      case "absent": return "bg-red-500 text-white";
      case "late": return "bg-yellow-500 text-white";
      default: return "bg-gray-100 text-paragraph";
    }
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case "present": return "Present";
      case "absent": return "Absent";
      case "late": return "Late";
      default: return "";
    }
  };

  const totalDays = attendanceData
    ? attendanceData.summary.totalPresent + attendanceData.summary.totalAbsent + attendanceData.summary.totalLate
    : 0;

  const attendancePercentage = totalDays > 0
    ? ((attendanceData.summary.totalPresent + attendanceData.summary.totalLate) / totalDays * 100).toFixed(1)
    : 0;

  return (
    <>
      <Helmet>
        <title>My Attendance | Dhuapalong Govt. Primary School</title>
        <meta name="description" content="View your monthly attendance record." />
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
                  <CalendarCheck className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-2xl md:text-3xl font-bold font-poppins">My Attendance</h1>
              </div>
              <p className="text-white/70 text-sm">Track your attendance for the current month</p>
            </motion.div>
          </div>
        </section>

        <div className="container-wide py-8 space-y-8">
          {/* Summary Cards */}
          <motion.div
            variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
            initial="initial"
            animate="animate"
            className="grid grid-cols-2 lg:grid-cols-4 gap-4"
          >
            <motion.div
              variants={fadeInUp}
              viewport={viewportConfig}
              className="bg-white rounded-2xl border border-border shadow-card p-5"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-3">
                <CalendarCheck className="w-5 h-5 text-blue-600" />
              </div>
              <p className="text-2xl font-bold text-heading font-poppins">{totalDays}</p>
              <p className="text-sm text-paragraph mt-1">Total Working Days</p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              viewport={viewportConfig}
              className="bg-white rounded-2xl border border-border shadow-card p-5"
            >
              <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center mb-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <p className="text-2xl font-bold text-heading font-poppins">{attendanceData?.summary.totalPresent || 0}</p>
              <p className="text-sm text-paragraph mt-1">Present</p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              viewport={viewportConfig}
              className="bg-white rounded-2xl border border-border shadow-card p-5"
            >
              <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center mb-3">
                <XCircle className="w-5 h-5 text-red-600" />
              </div>
              <p className="text-2xl font-bold text-heading font-poppins">{attendanceData?.summary.totalAbsent || 0}</p>
              <p className="text-sm text-paragraph mt-1">Absent</p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              viewport={viewportConfig}
              className="bg-white rounded-2xl border border-border shadow-card p-5"
            >
              <div className="w-10 h-10 rounded-xl bg-yellow-50 flex items-center justify-center mb-3">
                <Clock className="w-5 h-5 text-yellow-600" />
              </div>
              <p className="text-2xl font-bold text-heading font-poppins">{attendancePercentage}%</p>
              <p className="text-sm text-paragraph mt-1">Attendance Rate</p>
            </motion.div>
          </motion.div>

          {/* Calendar */}
          <motion.div
            {...fadeInUp}
            viewport={viewportConfig}
            className="bg-white rounded-2xl border border-border shadow-card p-6"
          >
            {/* Month Navigation */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={prevMonth}
                className="p-2 rounded-xl hover:bg-gray-100 transition-colors text-paragraph hover:text-heading"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <h2 className="text-lg font-semibold text-heading font-poppins">
                {currentDate.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
              </h2>
              <button
                onClick={nextMonth}
                className="p-2 rounded-xl hover:bg-gray-100 transition-colors text-paragraph hover:text-heading"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Weekday Headers */}
            <div className="grid grid-cols-7 gap-2 mb-3">
              {WEEKDAYS.map((day) => (
                <div key={day} className="text-center text-xs font-semibold text-paragraph uppercase py-2">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Days */}
            {loading ? (
              <div className="flex items-center justify-center py-16">
                <div className="w-8 h-8 border-2 border-primary-500 border-t-transparent rounded-full animate-spin" />
              </div>
            ) : (
              <div className="grid grid-cols-7 gap-2">
                {/* Empty cells for days before month start */}
                {Array.from({ length: firstDayOfMonth }).map((_, i) => (
                  <div key={`empty-${i}`} className="aspect-square" />
                ))}

                {/* Day cells */}
                {Array.from({ length: daysInMonth }).map((_, i) => {
                  const day = i + 1;
                  const status = attendanceData?.attendance[day];
                  const isToday = new Date().getDate() === day && new Date().getMonth() === month && new Date().getFullYear() === year;

                  return (
                    <div
                      key={day}
                      className={`aspect-square rounded-xl flex flex-col items-center justify-center text-sm relative transition-all ${
                        status
                          ? getStatusColor(status)
                          : "bg-gray-50 text-paragraph"
                      } ${isToday ? "ring-2 ring-primary-500 ring-offset-2" : ""}`}
                      title={status ? getStatusLabel(status) : ""}
                    >
                      <span className={`font-medium ${status ? "text-white" : ""}`}>{day}</span>
                      {status && (
                        <span className="text-[8px] uppercase font-bold mt-0.5 hidden sm:block">
                          {status === "present" ? "P" : status === "absent" ? "A" : "L"}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {/* Legend */}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-6 pt-4 border-t border-border">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-green-500" />
                <span className="text-xs text-paragraph">Present</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-red-500" />
                <span className="text-xs text-paragraph">Absent</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-yellow-500" />
                <span className="text-xs text-paragraph">Late</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded ring-2 ring-primary-500 ring-offset-1" />
                <span className="text-xs text-paragraph">Today</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
