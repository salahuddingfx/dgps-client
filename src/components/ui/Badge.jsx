import { cn } from "../../utils/cn";

export default function Badge({ children, variant = "default", className, ...props }) {
  const variants = {
    default: "bg-primary-50 text-primary-600 border-primary-200",
    secondary: "bg-secondary-50 text-secondary-600 border-secondary-200",
    accent: "bg-accent-50 text-accent-800 border-accent-200",
    success: "bg-green-50 text-green-600 border-green-200",
    danger: "bg-red-50 text-red-600 border-red-200",
    warning: "bg-yellow-50 text-yellow-600 border-yellow-200",
    muted: "bg-muted text-paragraph border-border",
    outline: "bg-transparent text-heading border-border",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-full border",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
