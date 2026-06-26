import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../../utils/cn";

export default function Accordion({ items = [], defaultOpen = null }) {
  const [openIndex, setOpenIndex] = useState(defaultOpen);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <div
          key={item.id || index}
          className="border border-border rounded-xl overflow-hidden bg-white"
        >
          <button
            onClick={() => toggle(index)}
            className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-muted/50 transition-colors"
            aria-expanded={openIndex === index}
          >
            <span className="font-medium text-heading pr-4">{item.question || item.title}</span>
            <ChevronDown
              className={cn(
                "w-5 h-5 text-paragraph shrink-0 transition-transform duration-200",
                openIndex === index && "rotate-180"
              )}
            />
          </button>
          <div
            className={cn(
              "overflow-hidden transition-all duration-300",
              openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            )}
          >
            <div className="px-5 pb-4 text-sm text-paragraph leading-relaxed">
              {item.answer || item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
