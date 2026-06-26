import { cn } from "../../utils/cn";

export default function Tabs({ tabs, activeTab, onTabChange, className }) {
  return (
    <div className={cn("border-b border-border", className)}>
      <div className="flex gap-0 overflow-x-auto scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => onTabChange(tab.value)}
            className={cn(
              "px-5 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors -mb-px",
              activeTab === tab.value
                ? "border-primary-500 text-primary-500"
                : "border-transparent text-paragraph hover:text-heading hover:border-border"
            )}
          >
            {tab.label}
            {tab.count !== undefined && (
              <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-muted">
                {tab.count}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
