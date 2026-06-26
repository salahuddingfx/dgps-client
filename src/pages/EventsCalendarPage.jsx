import { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { PAGE_SEO, SEO_DEFAULTS } from "../constants/seo";
import { BreadcrumbJsonLd } from "../components/shared/JsonLd";
import PageHeader from "../components/shared/PageHeader";
import ScrollReveal from "../components/shared/ScrollReveal";
import { CALENDAR_EVENTS } from "../constants/newData";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  LayoutList,
  Grid3X3,
  Clock,
  MapPin,
  X,
} from "lucide-react";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const EVENT_TYPE_COLORS = {
  academic: { bg: "bg-blue-50", text: "text-blue-600", dot: "bg-blue-500" },
  cultural: { bg: "bg-pink-50", text: "text-pink-600", dot: "bg-pink-500" },
  meeting: { bg: "bg-green-50", text: "text-green-600", dot: "bg-green-500" },
  exam: { bg: "bg-purple-50", text: "text-purple-600", dot: "bg-purple-500" },
  sports: { bg: "bg-orange-50", text: "text-orange-600", dot: "bg-orange-500" },
  holiday: { bg: "bg-cyan-50", text: "text-cyan-600", dot: "bg-cyan-500" },
};

export default function EventsCalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 5, 1));
  const [viewMode, setViewMode] = useState("calendar");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [filterType, setFilterType] = useState("all");

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  const filteredEvents = useMemo(() => {
    return CALENDAR_EVENTS.filter((e) => {
      if (filterType !== "all" && e.type !== filterType) return false;
      const eventDate = new Date(e.date);
      return eventDate.getMonth() === month && eventDate.getFullYear() === year;
    });
  }, [month, year, filterType]);

  const getEventsForDay = (day) => {
    return filteredEvents.filter((e) => {
      const d = new Date(e.date);
      return d.getDate() === day;
    });
  };

  const calendarDays = [];
  for (let i = 0; i < firstDay; i++) {
    calendarDays.push(null);
  }
  for (let d = 1; d <= daysInMonth; d++) {
    calendarDays.push(d);
  }

  const allFilteredEvents = useMemo(() => {
    return CALENDAR_EVENTS.filter((e) => {
      if (filterType !== "all" && e.type !== filterType) return false;
      const eventDate = new Date(e.date);
      const now = new Date(2026, 5, 1);
      return eventDate >= now;
    }).sort((a, b) => new Date(a.date) - new Date(b.date));
  }, [filterType]);

  const eventTypes = [...new Set(CALENDAR_EVENTS.map((e) => e.type))];

  return (
    <>
      <Helmet>
        <title>{PAGE_SEO.eventsCalendar.title}</title>
        <meta name="description" content={PAGE_SEO.eventsCalendar.description} />
        <meta property="og:title" content={PAGE_SEO.eventsCalendar.title} />
        <meta property="og:description" content={PAGE_SEO.eventsCalendar.description} />
        <meta property="og:image" content={`${SEO_DEFAULTS.siteUrl}${PAGE_SEO.eventsCalendar.image}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_SEO.eventsCalendar.title} />
        <meta name="twitter:description" content={PAGE_SEO.eventsCalendar.description} />
        <meta name="twitter:image" content={`${SEO_DEFAULTS.siteUrl}${PAGE_SEO.eventsCalendar.image}`} />
      </Helmet>

      <BreadcrumbJsonLd items={[{ label: "Home", path: "/" }, { label: "Events Calendar" }]} />

      <PageHeader
        title="Events Calendar"
        description="Stay updated with all school events, exams, and activities."
        breadcrumbs={[{ label: "Events Calendar" }]}
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm font-medium text-paragraph">Filter:</span>
              <button
                onClick={() => setFilterType("all")}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  filterType === "all"
                    ? "bg-primary-500 text-white"
                    : "bg-background text-paragraph border border-border hover:bg-primary-50"
                }`}
              >
                All
              </button>
              {eventTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setFilterType(type)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition-all ${
                    filterType === type
                      ? "bg-primary-500 text-white"
                      : "bg-background text-paragraph border border-border hover:bg-primary-50"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode("calendar")}
                className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                  viewMode === "calendar" ? "bg-primary-500 text-white" : "bg-background border border-border text-paragraph hover:bg-primary-50"
                }`}
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                  viewMode === "list" ? "bg-primary-500 text-white" : "bg-background border border-border text-paragraph hover:bg-primary-50"
                }`}
              >
                <LayoutList className="w-4 h-4" />
              </button>
            </div>
          </div>

          {viewMode === "calendar" ? (
            <ScrollReveal>
              <div className="bg-white rounded-2xl border border-border overflow-hidden">
                <div className="flex items-center justify-between p-4 border-b border-border">
                  <button
                    onClick={prevMonth}
                    className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center hover:bg-primary-50 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5 text-paragraph" />
                  </button>
                  <h3 className="text-xl font-bold text-heading font-poppins">
                    {MONTHS[month]} {year}
                  </h3>
                  <button
                    onClick={nextMonth}
                    className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center hover:bg-primary-50 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5 text-paragraph" />
                  </button>
                </div>

                <div className="grid grid-cols-7">
                  {DAYS.map((day) => (
                    <div key={day} className="p-3 text-center text-xs font-semibold text-paragraph bg-background border-b border-border">
                      {day}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-7">
                  {calendarDays.map((day, index) => {
                    const events = day ? getEventsForDay(day) : [];
                    const isToday = day === 26 && month === 5 && year === 2026;
                    return (
                      <div
                        key={index}
                        className={`min-h-[80px] md:min-h-[100px] p-2 border-b border-r border-border ${
                          day ? "bg-white hover:bg-gray-50 cursor-pointer" : "bg-gray-50/50"
                        }`}
                        onClick={() => events.length > 0 && setSelectedEvent(events[0])}
                      >
                        {day && (
                          <>
                            <span
                              className={`text-sm font-medium inline-flex items-center justify-center w-7 h-7 rounded-full ${
                                isToday ? "bg-primary-500 text-white" : "text-heading"
                              }`}
                            >
                              {day}
                            </span>
                            <div className="space-y-1 mt-1">
                              {events.slice(0, 2).map((event) => (
                                <div
                                  key={event.id}
                                  className="text-[10px] md:text-xs px-1.5 py-0.5 rounded truncate"
                                  style={{ backgroundColor: `${event.color}20`, color: event.color }}
                                >
                                  {event.title}
                                </div>
                              ))}
                              {events.length > 2 && (
                                <div className="text-[10px] text-paragraph/60 px-1.5">
                                  +{events.length - 2} more
                                </div>
                              )}
                            </div>
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>
          ) : (
            <ScrollReveal>
              <div className="space-y-4">
                {allFilteredEvents.length === 0 ? (
                  <div className="text-center py-16 bg-gray-50 rounded-2xl">
                    <Calendar className="w-16 h-16 text-paragraph/30 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-heading font-poppins mb-2">No Upcoming Events</h3>
                    <p className="text-paragraph">Check back later for new events.</p>
                  </div>
                ) : (
                  allFilteredEvents.map((event, index) => {
                    const colors = EVENT_TYPE_COLORS[event.type] || EVENT_TYPE_COLORS.academic;
                    const eventDate = new Date(event.date);
                    return (
                      <ScrollReveal key={event.id} animation="fadeUp" delay={index * 0.05}>
                        <div
                          className="bg-white rounded-2xl border border-border p-5 hover:shadow-md transition-shadow cursor-pointer"
                          onClick={() => setSelectedEvent(event)}
                        >
                          <div className="flex items-start gap-4">
                            <div className="w-14 h-14 rounded-xl bg-primary-50 flex flex-col items-center justify-center shrink-0">
                              <span className="text-xs font-semibold text-primary-500 uppercase">
                                {MONTHS[eventDate.getMonth()].slice(0, 3)}
                              </span>
                              <span className="text-lg font-bold text-primary-500 font-poppins">
                                {eventDate.getDate()}
                              </span>
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full capitalize ${colors.bg} ${colors.text}`}>
                                  {event.type}
                                </span>
                              </div>
                              <h4 className="text-base font-bold text-heading font-poppins">{event.title}</h4>
                              <p className="text-sm text-paragraph mt-1 line-clamp-2">{event.description}</p>
                            </div>
                          </div>
                        </div>
                      </ScrollReveal>
                    );
                  })
                )}
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 relative">
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-background flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <X className="w-4 h-4 text-paragraph" />
            </button>

            {(() => {
              const colors = EVENT_TYPE_COLORS[selectedEvent.type] || EVENT_TYPE_COLORS.academic;
              const eventDate = new Date(selectedEvent.date);
              return (
                <>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full capitalize ${colors.bg} ${colors.text}`}>
                    {selectedEvent.type}
                  </span>
                  <h3 className="text-xl font-bold text-heading font-poppins mt-3 mb-2">
                    {selectedEvent.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-paragraph mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-primary-500" />
                      {eventDate.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
                    </span>
                  </div>
                  <p className="text-sm text-paragraph leading-relaxed">{selectedEvent.description}</p>
                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="mt-6 w-full py-2.5 bg-primary-500 text-white font-semibold rounded-xl hover:bg-primary-600 transition-colors text-sm"
                  >
                    Close
                  </button>
                </>
              );
            })()}
          </div>
        </div>
      )}
    </>
  );
}
