import { forwardRef } from "react";
import { cn } from "../../utils/cn";

const Textarea = forwardRef(({ className, label, error, ...props }, ref) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-heading mb-1.5">
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        className={cn(
          "w-full px-4 py-2.5 text-sm rounded-xl border border-border bg-white text-heading placeholder:text-paragraph/50 transition-all duration-200 resize-y min-h-[120px]",
          "focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500",
          error && "border-danger focus:ring-danger/20 focus:border-danger",
          className
        )}
        {...props}
      />
      {error && (
        <p className="mt-1 text-xs text-danger">{error}</p>
      )}
    </div>
  );
});

Textarea.displayName = "Textarea";
export default Textarea;
