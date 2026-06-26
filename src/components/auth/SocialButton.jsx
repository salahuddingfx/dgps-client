import { cn } from "../../utils/cn";

export default function SocialButton({ icon: Icon, label, className, ...props }) {
  return (
    <button
      type="button"
      className={cn(
        "w-full flex items-center justify-center gap-3 px-4 py-2.5 rounded-xl border border-border text-sm font-medium text-heading bg-white hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
      {...props}
    >
      {Icon && <Icon className="w-5 h-5" />}
      {label}
    </button>
  );
}
