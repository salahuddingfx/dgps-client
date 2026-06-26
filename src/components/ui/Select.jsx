import { forwardRef } from "react";
import { cn } from "../../utils/cn";

const Select = forwardRef(({ className, label, error, options = [], placeholder = "Select an option", ...props }, ref) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-heading mb-1.5">
          {label}
        </label>
      )}
      <select
        ref={ref}
        className={cn(
          "w-full px-4 py-2.5 text-sm rounded-xl border border-border bg-white text-heading transition-all duration-200 appearance-none cursor-pointer",
          "focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500",
          error && "border-danger focus:ring-danger/20 focus:border-danger",
          className
        )}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="mt-1 text-xs text-danger">{error}</p>
      )}
    </div>
  );
});

Select.displayName = "Select";
export default Select;
