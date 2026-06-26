import { cn } from "../../utils/cn";

export default function Avatar({ src, alt, name, size = "md", className }) {
  const sizes = {
    sm: "w-10 h-10 text-sm",
    md: "w-14 h-14 text-base",
    lg: "w-20 h-20 text-lg",
    xl: "w-28 h-28 text-xl",
  };

  const initials = name
    ?.split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  if (src) {
    return (
      <img
        src={src}
        alt={alt || name}
        className={cn("rounded-full object-cover", sizes[size], className)}
      />
    );
  }

  return (
    <div
      className={cn(
        "rounded-full flex items-center justify-center bg-primary-50 text-primary-600 font-semibold font-poppins",
        sizes[size],
        className
      )}
    >
      {initials || "?"}
    </div>
  );
}
