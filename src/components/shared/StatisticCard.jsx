import { cn } from "../../utils/cn";

export default function StatisticCard({ value, label, suffix = "", icon: Icon, className }) {
  return (
    <div className={cn("text-center p-6 rounded-2xl bg-white border border-border shadow-card hover-lift", className)}>
      {Icon && (
        <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary-50 flex items-center justify-center">
          <Icon className="w-6 h-6 text-primary-500" />
        </div>
      )}
      <div className="text-3xl md:text-4xl font-bold text-primary-500 font-poppins mb-1">
        {value}
        {suffix}
      </div>
      <div className="text-sm text-paragraph">{label}</div>
    </div>
  );
}
