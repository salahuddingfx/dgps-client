import Breadcrumb from "../ui/Breadcrumb";
import { motion } from "framer-motion";
import { fadeInDown, fadeIn, viewportConfig } from "../../animations";
import { useTheme } from "../../context/ThemeContext";
import { cn } from "../../utils/cn";

export default function PageHeader({ title, description, breadcrumbs = [] }) {
  const { theme } = useTheme();

  return (
    <section className={cn(
      "relative text-white py-16 md:py-20 overflow-hidden transition-colors duration-300",
      theme === "dark"
        ? "bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900"
        : "bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700"
    )}>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3" />
      </div>
      <div className="container-wide relative z-10">
        <motion.div
          {...fadeInDown}
          viewport={viewportConfig}
          className="mb-4"
        >
          <Breadcrumb
            items={breadcrumbs}
            className="[&_a]:text-white/70 [&_a:hover]:text-white [&_span:last-child]:text-white [&_svg]:text-white/50"
          />
        </motion.div>
        <motion.h1
          {...fadeInDown}
          viewport={viewportConfig}
          className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins mb-4"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            {...fadeIn}
            viewport={viewportConfig}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-white/80 text-base md:text-lg max-w-2xl"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
