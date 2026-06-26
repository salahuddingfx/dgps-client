import { cn } from "../../utils/cn";
import { Check, X } from "lucide-react";

const rules = [
  { label: "At least 8 characters", test: (p) => p.length >= 8 },
  { label: "One uppercase letter", test: (p) => /[A-Z]/.test(p) },
  { label: "One lowercase letter", test: (p) => /[a-z]/.test(p) },
  { label: "One number", test: (p) => /[0-9]/.test(p) },
  { label: "One special character", test: (p) => /[^A-Za-z0-9]/.test(p) },
];

export default function PasswordStrength({ password = "" }) {
  const score = rules.filter((r) => r.test(password)).length;

  const getStrength = () => {
    if (score <= 1) return { label: "Weak", color: "bg-danger", textColor: "text-danger" };
    if (score <= 3) return { label: "Fair", color: "bg-accent-500", textColor: "text-accent-700" };
    return { label: "Strong", color: "bg-secondary-500", textColor: "text-secondary-600" };
  };

  const strength = getStrength();

  if (!password) return null;

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-paragraph">Password strength</span>
        <span className={cn("text-xs font-semibold", strength.textColor)}>{strength.label}</span>
      </div>
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "h-1 flex-1 rounded-full transition-colors duration-300",
              i < score ? strength.color : "bg-border"
            )}
          />
        ))}
      </div>
      <ul className="space-y-1.5">
        {rules.map((rule) => (
          <li key={rule.label} className="flex items-center gap-2 text-xs">
            {rule.test(password) ? (
              <Check className="w-3.5 h-3.5 text-secondary-500 shrink-0" />
            ) : (
              <X className="w-3.5 h-3.5 text-paragraph/40 shrink-0" />
            )}
            <span className={rule.test(password) ? "text-secondary-600" : "text-paragraph/60"}>
              {rule.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
