import { Download, FileText } from "lucide-react";
import { cn } from "../../utils/cn";
import { motion } from "framer-motion";
import { fadeInUp, viewportConfig } from "../../animations";
import Badge from "../ui/Badge";

export default function DownloadCard({ file, className }) {
  return (
    <motion.div
      {...fadeInUp}
      viewport={viewportConfig}
      className={cn(
        "bg-white rounded-2xl border border-border shadow-card hover-lift p-4 flex items-center gap-4",
        className
      )}
    >
      <div className="shrink-0 w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center">
        <FileText className="w-6 h-6 text-danger" />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-semibold text-heading font-poppins line-clamp-1">{file.title}</h4>
        <div className="flex items-center gap-2 mt-1">
          <Badge variant="muted" className="text-xs">{file.category}</Badge>
          <span className="text-xs text-paragraph">{file.format} · {file.size}</span>
        </div>
      </div>
      <button className="shrink-0 p-2.5 rounded-xl bg-primary-50 text-primary-500 hover:bg-primary-100 transition-colors">
        <Download className="w-5 h-5" />
      </button>
    </motion.div>
  );
}
