import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Calendar,
  FileText,
  ClipboardList,
  TrendingUp,
  AlertCircle,
  Clock,
  Library,
  ChevronRight,
  CalendarCheck,
  BarChart3,
  Bell,
} from "lucide-react";
import { fadeInUp, staggerContainer, staggerItem, viewportConfig } from "../../animations";
import { NOTICES, EVENTS } from "../../constants/data";

const STUDENT_NOTICES = NOTICES.slice(0, 4);
const STUDENT_EVENTS = EVENTS.filter((e) => e.type === "upcoming").slice(0, 3);

const QUICK_STATS = [
  {
    label: "Attendance",
    value: "92%",
    icon: ClipboardList,
    color: "bg-green-50 text-green-600",
    link: "/student/attendance",
  },
  {
    label: "Current GPA",
    value: "4.92",
    icon: TrendingUp,
    color: "bg-blue-50 text-blue-600",
    link: "/student/results",
  },
  {
    label: "Pending Fees",
    value: "৳2,500",
    icon: AlertCircle,
    color: "bg-yellow-50 text-yellow-600",
    link: "/student/dashboard",
  },
  {
    label: "Next Exam",
    value: "Feb 15",
    icon: Clock,
    color: "bg-purple-50 text-purple-600",
    link: "/student/dashboard",
  },
];

const QUICK_LINKS = [
  { label: "Results", icon: BarChart3, path: "/student/results", color: "bg-blue-500" },
  { label: "Routine", icon: Calendar, path: "/student/routine", color: "bg-green-500" },
  { label: "Attendance", icon: CalendarCheck, path: "/student/attendance", color: "bg-orange-500" },
  { label: "Library", icon: Library, path: "/student/dashboard", color: "bg-purple-500" },
];

export default function StudentDashboard() {
  const { student } = useSelector((state) => state.studentAuth);

  return (
    <>
      <Helmet>
        <title>Student Dashboard | Dhuapalong Govt. Primary School</title>
        <meta name="description" content="Access your student dashboard to view results, attendance, routine, and more." />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Welcome Banner */}
        <section className="bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white py-10 md:py-14">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center shrink-0">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <div>
                <p className="text-white/70 text-sm mb-1">Welcome back,</p>
                <h1 className="text-2xl md:text-3xl font-bold font-poppins">{student?.name || "Student"}</h1>
                <p className="text-white/70 text-sm mt-1">
                  {student?.class} &middot; Section {student?.section} &middot; Roll {student?.roll}
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="container-wide py-8 space-y-8">
          {/* Quick Stats */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {QUICK_STATS.map((stat) => (
              <motion.div key={stat.label} variants={staggerItem}>
                <Link
                  to={stat.link}
                  className="block bg-white rounded-2xl border border-border shadow-card p-5 hover-lift transition-all"
                >
                  <div className={`w-10 h-10 rounded-xl ${stat.color} flex items-center justify-center mb-3`}>
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <p className="text-2xl font-bold text-heading font-poppins">{stat.value}</p>
                  <p className="text-sm text-paragraph mt-1">{stat.label}</p>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Recent Notices */}
            <div className="lg:col-span-2">
              <motion.div
                {...fadeInUp}
                viewport={viewportConfig}
                className="bg-white rounded-2xl border border-border shadow-card p-6"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <Bell className="w-5 h-5 text-primary-500" />
                    <h2 className="text-lg font-semibold text-heading font-poppins">Recent Notices</h2>
                  </div>
                  <Link to="/notices" className="text-sm text-primary-500 hover:text-primary-600 font-medium flex items-center gap-1">
                    View All <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="space-y-3">
                  {STUDENT_NOTICES.map((notice) => (
                    <div key={notice.id} className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-primary-500 mt-2 shrink-0" />
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium text-heading line-clamp-1">{notice.title}</h3>
                        <p className="text-xs text-paragraph mt-0.5 line-clamp-1">{notice.description}</p>
                        <p className="text-xs text-paragraph/60 mt-1">
                          {new Date(notice.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Upcoming Events */}
            <div>
              <motion.div
                {...fadeInUp}
                viewport={viewportConfig}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl border border-border shadow-card p-6"
              >
                <div className="flex items-center gap-2 mb-5">
                  <Calendar className="w-5 h-5 text-primary-500" />
                  <h2 className="text-lg font-semibold text-heading font-poppins">Upcoming Events</h2>
                </div>
                <div className="space-y-3">
                  {STUDENT_EVENTS.map((event) => {
                    const eventDate = new Date(event.date);
                    return (
                      <div key={event.id} className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                        <div className="w-12 h-12 rounded-xl bg-primary-50 flex flex-col items-center justify-center text-primary-500 shrink-0">
                          <span className="text-lg font-bold font-poppins leading-none">
                            {eventDate.getDate()}
                          </span>
                          <span className="text-[10px] font-medium uppercase">
                            {eventDate.toLocaleDateString("en-US", { month: "short" })}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-medium text-heading line-clamp-1">{event.title}</h3>
                          <p className="text-xs text-paragraph mt-0.5 line-clamp-1">{event.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Quick Links */}
          <motion.div
            {...fadeInUp}
            viewport={viewportConfig}
          >
            <h2 className="text-lg font-semibold text-heading font-poppins mb-4">Quick Links</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {QUICK_LINKS.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className="flex items-center gap-3 bg-white rounded-2xl border border-border shadow-card p-5 hover-lift transition-all group"
                >
                  <div className={`w-11 h-11 rounded-xl ${link.color} flex items-center justify-center shrink-0`}>
                    <link.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-heading group-hover:text-primary-500 transition-colors">
                      {link.label}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
