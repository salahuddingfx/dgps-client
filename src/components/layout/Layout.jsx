import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CanonicalUrl from "../shared/CanonicalUrl";
import { useTheme } from "../../context/ThemeContext";
import { cn } from "../../utils/cn";

export default function Layout({ children }) {
  const { pathname } = useLocation();
  const { theme } = useTheme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={cn(
      "min-h-screen flex flex-col transition-colors duration-300",
      theme === "dark" ? "bg-slate-900 text-white" : "bg-background text-foreground"
    )}>
      <CanonicalUrl />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
