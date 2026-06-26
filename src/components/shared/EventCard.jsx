import { Calendar, Clock } from "lucide-react";
import { cn } from "../../utils/cn";
import { motion } from "framer-motion";
import { fadeInUp, viewportConfig } from "../../animations";
import Badge from "../ui/Badge";

export default function EventCard({ event, className }) {
  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const eventDate = new Date(event.date);
  const day = eventDate.getDate();
  const month = eventDate.toLocaleDateString("en-US", { month: "short" });

  return (
    <motion.div
      {...fadeInUp}
      viewport={viewportConfig}
      className={cn(
        "bg-white rounded-2xl border border-border shadow-card hover-lift p-5 flex gap-4",
        className
      )}
    >
      <div className="shrink-0 w-16 h-16 rounded-xl bg-primary-50 flex flex-col items-center justify-center text-primary-500">
        <span className="text-2xl font-bold font-poppins leading-none">{day}</span>
        <span className="text-xs font-medium uppercase">{month}</span>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <Badge variant={event.type === "upcoming" ? "success" : "muted"}>
            {event.type === "upcoming" ? "Upcoming" : "Past"}
          </Badge>
        </div>
        <h3 className="text-base font-semibold text-heading font-poppins mb-1 line-clamp-1">
          {event.title}
        </h3>
        <p className="text-sm text-paragraph line-clamp-2">{event.description}</p>
      </div>
    </motion.div>
  );
}
