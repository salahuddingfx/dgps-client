import { forwardRef } from "react";
import { cn } from "../../utils/cn";

const Button = forwardRef(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const variants = {
      primary: "bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700 shadow-sm",
      secondary: "bg-secondary-500 text-white hover:bg-secondary-600 active:bg-secondary-700 shadow-sm",
      accent: "bg-accent-500 text-heading hover:bg-accent-600 active:bg-accent-700 shadow-sm",
      outline: "border-2 border-primary-500 text-primary-500 hover:bg-primary-50 active:bg-primary-100",
      "outline-secondary": "border-2 border-secondary-500 text-secondary-500 hover:bg-secondary-50 active:bg-secondary-100",
      ghost: "text-primary-500 hover:bg-primary-50 active:bg-primary-100",
      danger: "bg-danger text-white hover:bg-red-600 active:bg-red-700 shadow-sm",
      white: "bg-white text-primary-500 hover:bg-gray-50 active:bg-gray-100 shadow-sm",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm rounded-lg",
      md: "px-6 py-2.5 text-sm rounded-xl",
      lg: "px-8 py-3 text-base rounded-xl",
      xl: "px-10 py-4 text-lg rounded-2xl",
      icon: "p-2.5 rounded-xl",
      "icon-sm": "p-2 rounded-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
