import { Link } from "react-router-dom";
import Badge from "../ui/Badge";
import { Calendar, ArrowRight } from "lucide-react";
import { cn } from "../../utils/cn";
import { motion } from "framer-motion";
import { fadeInUp, viewportConfig } from "../../animations";
import { Newspaper } from "lucide-react";

export default function NewsCard({ news, className }) {
  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <motion.div
      {...fadeInUp}
      viewport={viewportConfig}
      className={cn(
        "bg-white rounded-2xl border border-border shadow-card hover-lift overflow-hidden group",
        className
      )}
    >
      <Link to={`/news/${news.id}`}>
        <div className="h-48 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center overflow-hidden">
          {news.image ? (
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <Newspaper className="w-12 h-12 text-primary-300 opacity-40" />
          )}
        </div>
        <div className="p-5">
          <div className="flex items-center gap-3 mb-3">
            <Badge variant="secondary">{news.category}</Badge>
            <div className="flex items-center gap-1.5 text-xs text-paragraph">
              <Calendar className="w-3.5 h-3.5" />
              {formatDate(news.date)}
            </div>
          </div>
          <h3 className="text-base font-semibold text-heading font-poppins mb-2 line-clamp-2 group-hover:text-primary-500 transition-colors">
            {news.title}
          </h3>
          <p className="text-sm text-paragraph line-clamp-3 mb-3">{news.excerpt}</p>
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-500 group-hover:gap-2.5 transition-all">
            Read More
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
