import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";
import { cn } from "../../utils/cn";

export default function Drawer({ isOpen, onClose, title, children, side = "right", className }) {
  const drawerRef = useRef(null);

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

  if (!isOpen) return null;

  const sideStyles = {
    right: "right-0 translate-x-0",
    left: "left-0 translate-x-0",
  };

  return (
    <>
      <div
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        ref={drawerRef}
        className={cn(
          "fixed top-0 z-50 h-full w-full max-w-sm bg-white shadow-large transition-transform duration-300",
          sideStyles[side],
          className
        )}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <h3 className="text-lg font-semibold text-heading font-poppins">{title}</h3>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-muted transition-colors"
            aria-label="Close drawer"
          >
            <X className="w-5 h-5 text-paragraph" />
          </button>
        </div>
        <div className="p-6 overflow-y-auto h-[calc(100%-73px)]">{children}</div>
      </div>
    </>
  );
}
