import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { cn } from "../../utils/cn";

export default function Modal({ isOpen, onClose, title, children, size = "md", className }) {
  const [isMounted, setIsMounted] = useState(false);
  const overlayRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isMounted || !isOpen) return null;

  const sizes = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
    full: "max-w-[90vw]",
  };

  return createPortal(
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={(e) => e.target === overlayRef.current && onClose()}
    >
      <div
        className={cn(
          "bg-white rounded-2xl shadow-large w-full animate-scale-in",
          sizes[size],
          className
        )}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          {title ? (
            <h3 className="text-lg font-semibold text-heading font-poppins">{title}</h3>
          ) : <div />}
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-muted transition-colors ml-auto"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 text-paragraph" />
          </button>
        </div>
        <div className="p-6 max-h-[70vh] overflow-y-auto">{children}</div>
      </div>
    </div>,
    document.body
  );
}
