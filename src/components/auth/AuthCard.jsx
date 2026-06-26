import { cn } from "../../utils/cn";

export default function AuthCard({ children, className }) {
  return (
    <div
      className={cn(
        "bg-white rounded-2xl border border-border shadow-card p-8",
        className
      )}
    >
      {children}
    </div>
  );
}
