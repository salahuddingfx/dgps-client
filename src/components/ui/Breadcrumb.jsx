import { ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "../../utils/cn";

export default function Breadcrumb({ items = [], className }) {
  return (
    <nav aria-label="Breadcrumb" className={cn("flex items-center gap-1.5 text-sm", className)}>
      <Link
        to="/"
        className="flex items-center gap-1 text-paragraph hover:text-primary-500 transition-colors"
      >
        <Home className="w-4 h-4" />
        <span>Home</span>
      </Link>
      {items.map((item, index) => (
        <span key={index} className="flex items-center gap-1.5">
          <ChevronRight className="w-3.5 h-3.5 text-paragraph/50" />
          {item.path ? (
            <Link
              to={item.path}
              className="text-paragraph hover:text-primary-500 transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-heading font-medium">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
