import { cn } from "../../utils/cn";
import { motion } from "framer-motion";
import { fadeInUp, viewportConfig } from "../../animations";
import { BookOpen, Trees, Monitor, Presentation, Droplets, HeartPulse } from "lucide-react";

const iconMap = {
  BookOpen,
  Trees,
  Monitor,
  Presentation,
  Droplets,
  Heart: HeartPulse,
};

export default function FacilityCard({ facility, className }) {
  const IconComponent = iconMap[facility.icon] || BookOpen;

  return (
    <motion.div
      {...fadeInUp}
      viewport={viewportConfig}
      className={cn(
        "bg-white rounded-2xl border border-border shadow-card hover-lift p-6 text-center group",
        className
      )}
    >
      <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary-50 flex items-center justify-center group-hover:bg-primary-100 transition-colors">
        <IconComponent className="w-8 h-8 text-primary-500" />
      </div>
      <h3 className="text-lg font-semibold text-heading font-poppins mb-2">{facility.title}</h3>
      <p className="text-sm text-paragraph leading-relaxed">{facility.description}</p>
    </motion.div>
  );
}
