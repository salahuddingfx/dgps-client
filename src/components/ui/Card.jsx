import { cn } from "../../utils/cn";

export default function Card({ children, className, hover = false, padding = "md", ...props }) {
  const paddings = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <div
      className={cn(
        "bg-white rounded-2xl border border-border shadow-card",
        hover && "hover-lift hover:shadow-card-hover",
        paddings[padding],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className, ...props }) {
  return (
    <div className={cn("mb-4", className)} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className, as: Tag = "h3", ...props }) {
  return (
    <Tag
      className={cn("text-lg font-semibold text-heading font-poppins", className)}
      {...props}
    >
      {children}
    </Tag>
  );
}

export function CardDescription({ children, className, ...props }) {
  return (
    <p className={cn("text-sm text-paragraph mt-1", className)} {...props}>
      {children}
    </p>
  );
}

export function CardContent({ children, className, ...props }) {
  return (
    <div className={cn("", className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className, ...props }) {
  return (
    <div className={cn("mt-4 pt-4 border-t border-border flex items-center", className)} {...props}>
      {children}
    </div>
  );
}
