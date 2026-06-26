import { cn } from "../../utils/cn";

export default function Divider({ text = "or", className }) {
  return (
    <div className={cn("flex items-center gap-4 my-6", className)}>
      <div className="flex-1 h-px bg-border" />
      <span className="text-xs text-paragraph/60 font-medium uppercase tracking-wider">{text}</span>
      <div className="flex-1 h-px bg-border" />
    </div>
  );
}
