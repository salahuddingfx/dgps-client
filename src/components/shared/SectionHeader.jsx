import { motion } from "framer-motion";
import { fadeInUp, viewportConfig } from "../../animations";
import { cn } from "../../utils/cn";

export default function SectionHeader({
  subtitle,
  title,
  description,
  align = "center",
  className,
}) {
  const alignStyles = {
    center: "text-center",
    left: "text-left",
    right: "text-right",
  };

  return (
    <motion.div
      {...fadeInUp}
      viewport={viewportConfig}
      className={cn("mb-12 md:mb-16", alignStyles[align], className)}
    >
      {subtitle && (
        <span className="inline-block text-sm font-semibold text-primary-500 uppercase tracking-wider mb-3">
          {subtitle}
        </span>
      )}
      {title && (
        <h2 className="text-3xl md:text-4xl font-bold text-heading font-poppins mb-4">
          {title}
        </h2>
      )}
      {description && (
        <p className="text-paragraph max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
