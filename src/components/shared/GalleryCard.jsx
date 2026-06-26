import { cn } from "../../utils/cn";
import { motion } from "framer-motion";
import { fadeInUp, viewportConfig } from "../../animations";
import { Images } from "lucide-react";

export default function GalleryCard({ album, className, onClick }) {
  return (
    <motion.div
      {...fadeInUp}
      viewport={viewportConfig}
      onClick={() => onClick?.(album)}
      className={cn(
        "bg-white rounded-2xl border border-border shadow-card hover-lift overflow-hidden cursor-pointer group",
        className
      )}
    >
      <div className="relative h-48 bg-gradient-to-br from-primary-200 via-primary-100 to-secondary-100 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-primary-500/0 group-hover:bg-primary-500/10 transition-colors duration-300" />
        <Images className="w-10 h-10 text-primary-300 group-hover:scale-110 transition-transform duration-300" />
        <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-xs font-medium text-heading px-2.5 py-1 rounded-full">
          {album.count} photos
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-heading font-poppins group-hover:text-primary-500 transition-colors">
          {album.title}
        </h3>
      </div>
    </motion.div>
  );
}
