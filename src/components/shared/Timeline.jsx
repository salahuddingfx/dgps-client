import { cn } from "../../utils/cn";
import { motion } from "framer-motion";
import { fadeInUp, viewportConfig } from "../../animations";

export default function Timeline({ items = [], className }) {
  return (
    <div className={cn("relative", className)}>
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />
      <div className="space-y-8">
        {items.map((item, index) => (
          <motion.div
            key={item.id || index}
            {...fadeInUp}
            viewport={viewportConfig}
            transition={{ delay: index * 0.1 }}
            className={cn(
              "relative flex items-start gap-6",
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            )}
          >
            <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary-500 rounded-full -translate-x-1/2 mt-1.5 z-10 ring-4 ring-white" />
            <div className={cn("flex-1 ml-10 md:ml-0", index % 2 === 0 ? "md:text-right md:pr-10" : "md:text-left md:pl-10")}>
              <span className="inline-block text-sm font-bold text-primary-500 mb-1">{item.year}</span>
              <h3 className="text-lg font-semibold text-heading font-poppins mb-2">{item.title}</h3>
              <p className="text-sm text-paragraph leading-relaxed">{item.description}</p>
            </div>
            <div className="hidden md:block flex-1" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
