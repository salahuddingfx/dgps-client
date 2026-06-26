import { AlertCircle, CheckCircle, Info, AlertTriangle, X } from "lucide-react";
import { cn } from "../../utils/cn";

export default function Alert({ type = "info", title, children, dismissible = false, onDismiss, className }) {
  const types = {
    info: {
      icon: Info,
      bg: "bg-blue-50",
      border: "border-blue-200",
      text: "text-blue-800",
      iconColor: "text-blue-500",
    },
    success: {
      icon: CheckCircle,
      bg: "bg-green-50",
      border: "border-green-200",
      text: "text-green-800",
      iconColor: "text-green-500",
    },
    warning: {
      icon: AlertTriangle,
      bg: "bg-yellow-50",
      border: "border-yellow-200",
      text: "text-yellow-800",
      iconColor: "text-yellow-500",
    },
    danger: {
      icon: AlertCircle,
      bg: "bg-red-50",
      border: "border-red-200",
      text: "text-red-800",
      iconColor: "text-red-500",
    },
  };

  const config = types[type];
  const Icon = config.icon;

  return (
    <div
      className={cn(
        "flex items-start gap-3 p-4 rounded-xl border",
        config.bg,
        config.border,
        className
      )}
      role="alert"
    >
      <Icon className={cn("w-5 h-5 shrink-0 mt-0.5", config.iconColor)} />
      <div className="flex-1">
        {title && (
          <h4 className={cn("text-sm font-semibold", config.text)}>{title}</h4>
        )}
        <div className={cn("text-sm", config.text, title && "mt-1")}>{children}</div>
      </div>
      {dismissible && (
        <button
          onClick={onDismiss}
          className={cn("p-1 rounded-lg hover:bg-black/5 transition-colors", config.text)}
          aria-label="Dismiss"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
