import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, LogIn, UserPlus, MapPin, GraduationCap, Sun, Moon } from "lucide-react";
import { NAV_LINKS, SCHOOL_INFO, NOTICES } from "../../constants/navigation";
import { useScrollPosition, useMediaQuery } from "../../hooks";
import { cn } from "../../utils/cn";
import Button from "../ui/Button";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";

export default function Navbar() {
  const { isScrolled } = useScrollPosition();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const isActive = (path) => location.pathname === path;
  const importantNoticeCount = NOTICES.filter((n) => n.isImportant).length;

  const navTranslations = {
    Home: t("nav.home"),
    About: t("nav.about"),
    Academic: t("nav.academic"),
    Admission: t("nav.admission"),
    Notices: t("nav.notices"),
    Gallery: t("nav.gallery"),
    Contact: t("nav.contact"),
    Login: t("nav.login"),
    Register: t("nav.register"),
    "Apply Now": t("nav.applyNow"),
    Menu: t("nav.menu"),
    "About School": t("nav.aboutSchool"),
    "Principal Message": t("nav.principalMessage"),
    Overview: t("nav.overview"),
    Play: t("nav.play"),
    Nursery: t("nav.nursery"),
    "Class One": t("nav.classOne"),
    "Class Two": t("nav.classTwo"),
    "Class Three": t("nav.classThree"),
    "Class Four": t("nav.classFour"),
    "Class Five": t("nav.classFive"),
  };

  const translatedNavLinks = NAV_LINKS.map((link) => ({
    ...link,
    label: navTranslations[link.label] || link.label,
    children: link.children?.map((child) => ({
      ...child,
      label: navTranslations[child.label] || child.label,
    })),
  }));

  return (
    <>
      <div className={cn(
        "sticky top-0 z-[60] text-xs overflow-hidden hidden md:block transition-colors duration-300",
        theme === "dark"
          ? "bg-primary-900 text-white"
          : "bg-primary-700 text-white"
      )}>
        <div className="container-wide flex items-center justify-between">
          <div className="overflow-hidden flex-1 marquee-wrapper">
            <div className="marquee-track flex items-center whitespace-nowrap py-1.5">
              {[...Array(2)].map((_, setIdx) => (
                <span key={setIdx} className="flex items-center">
                  {[
                    { text: language === "bn" ? "শিক্ষাই জ্ঞানের আলো" : "Education is the Light of Knowledge", icon: null },
                    { text: "+880-1700-000000", icon: Phone },
                    { text: language === "bn" ? "Admission চলছে 2026 সেশনের" : "Admission Open for 2026 Session", icon: null },
                    { text: language === "bn" ? "প্লে থেকে পঞ্চম শ্রেণি পর্যন্ত" : "From Play to Class Five", icon: GraduationCap },
                    { text: "Dhuapalong, Khuniapalong, Ramu, Cox's Bazar", icon: MapPin },
                  ].map(({ text, icon: Icon }, i) => (
                    <span key={`${setIdx}-${i}`} className="mx-5 flex items-center gap-1.5">
                      {Icon && <Icon className="w-3 h-3 text-white/50" />}
                      {text}
                    </span>
                  ))}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 ml-4 py-1.5">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2 py-1 rounded-md hover:bg-white/10 transition-colors text-white/90 hover:text-white"
              aria-label="Toggle language"
            >
              {language === "bn" ? "EN" : "বাংলা"}
            </button>

            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-md hover:bg-white/10 transition-colors text-white/90 hover:text-white"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            </button>

            <a href={`tel:${SCHOOL_INFO.contact.phone}`} className="flex items-center gap-1 hover:text-accent-300 transition-colors">
              <Phone className="w-3 h-3" />
              {SCHOOL_INFO.contact.phone}
            </a>
          </div>
        </div>
      </div>

      <header
        className={cn(
          "sticky top-[32px] z-50 transition-all duration-300",
          isScrolled
            ? theme === "dark"
              ? "bg-slate-800/95 backdrop-blur-md shadow-soft"
              : "bg-white/95 backdrop-blur-md shadow-soft"
            : theme === "dark"
              ? "bg-slate-800"
              : "bg-white"
        )}
      >
        <div className="container-wide">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link to="/" className="flex items-center gap-3 shrink-0">
              <div className={cn(
                "w-10 h-10 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center text-white font-bold font-poppins text-lg transition-colors duration-300",
                theme === "dark" ? "bg-primary-600" : "bg-primary-500"
              )}>
                D
              </div>
              <div className="hidden sm:block">
                <span className={cn(
                  "text-sm lg:text-base font-bold font-poppins leading-tight block transition-colors duration-300",
                  theme === "dark" ? "text-white" : "text-heading"
                )}>
                  Dhuapalong
                </span>
                <p className={cn(
                  "text-[10px] lg:text-xs leading-tight transition-colors duration-300",
                  theme === "dark" ? "text-slate-400" : "text-paragraph"
                )}>
                  Govt. Primary School
                </p>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {translatedNavLinks.map((link) => (
                <div
                  key={link.path}
                  className="relative group"
                  onMouseEnter={() => link.children && setOpenDropdown(link.path)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    to={link.path}
                    className={cn(
                      "flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                      isActive(link.path)
                        ? "text-primary-500 bg-primary-50 dark:bg-primary-900/30"
                        : theme === "dark"
                          ? "text-slate-200 hover:text-primary-400 hover:bg-slate-700"
                          : "text-heading hover:text-primary-500 hover:bg-muted"
                    )}
                  >
                    {link.label}
                    {link.badge && importantNoticeCount > 0 && (
                      <span className="ml-1 inline-flex items-center justify-center min-w-[18px] h-[18px] px-1 text-[10px] font-bold text-white bg-red-500 rounded-full">
                        {importantNoticeCount}
                      </span>
                    )}
                    {link.children && <ChevronDown className="w-3.5 h-3.5" />}
                  </Link>
                  {link.children && openDropdown === link.path && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className={cn(
                        "absolute top-full left-0 mt-1 w-56 rounded-xl shadow-large border py-2 z-50 transition-colors duration-300",
                        theme === "dark"
                          ? "bg-slate-800 border-slate-700"
                          : "bg-white border-border"
                      )}
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className={cn(
                            "block px-4 py-2 text-sm transition-colors",
                            isActive(child.path)
                              ? "text-primary-500 bg-primary-50 dark:bg-primary-900/30"
                              : theme === "dark"
                                ? "text-slate-200 hover:bg-slate-700 hover:text-primary-400"
                                : "text-heading hover:bg-muted hover:text-primary-500"
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <Link to="/login" className="hidden lg:inline-flex">
                <Button variant="ghost" size="sm">
                  <LogIn className="w-4 h-4" />
                  {t("nav.login")}
                </Button>
              </Link>
              <Link to="/register" className="hidden lg:inline-flex">
                <Button size="sm">
                  <UserPlus className="w-4 h-4" />
                  {t("nav.register")}
                </Button>
              </Link>
              <Link to="/admission" className="hidden lg:inline-flex">
                <Button variant="outline" size="sm">{t("nav.applyNow")}</Button>
              </Link>

              <div className="flex items-center gap-1 lg:hidden">
                <button
                  onClick={toggleLanguage}
                  className={cn(
                    "p-2 rounded-xl transition-colors text-xs font-medium",
                    theme === "dark"
                      ? "text-slate-300 hover:bg-slate-700"
                      : "text-heading hover:bg-muted"
                  )}
                  aria-label="Toggle language"
                >
                  {language === "bn" ? "EN" : "বা"}
                </button>
                <button
                  onClick={toggleTheme}
                  className={cn(
                    "p-2 rounded-xl transition-colors",
                    theme === "dark"
                      ? "text-slate-300 hover:bg-slate-700"
                      : "text-heading hover:bg-muted"
                  )}
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
              </div>

              <button
                onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl hover:bg-muted transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-heading" />
                ) : (
                  <Menu className="w-6 h-6 text-heading" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)} />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className={cn(
                "absolute right-0 top-0 h-full w-80 max-w-[85vw] shadow-large overflow-y-auto transition-colors duration-300",
                theme === "dark" ? "bg-slate-800" : "bg-white"
              )}
            >
              <div className="p-4">
                <div className="flex items-center justify-between mb-6">
                  <span className={cn(
                    "font-bold font-poppins transition-colors duration-300",
                    theme === "dark" ? "text-white" : "text-heading"
                  )}>
                    {t("nav.menu")}
                  </span>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-lg hover:bg-muted"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <nav className="space-y-1">
                  {translatedNavLinks.map((link) => (
                    <div key={link.path}>
                      <Link
                        to={link.path}
                        className={cn(
                          "block px-4 py-3 text-sm font-medium rounded-xl transition-colors",
                          isActive(link.path)
                            ? "text-primary-500 bg-primary-50 dark:bg-primary-900/30"
                            : theme === "dark"
                              ? "text-slate-200 hover:bg-slate-700"
                              : "text-heading hover:bg-muted"
                        )}
                      >
                        <span className="flex items-center gap-2">
                          {link.label}
                          {link.badge && importantNoticeCount > 0 && (
                            <span className="inline-flex items-center justify-center min-w-[18px] h-[18px] px-1 text-[10px] font-bold text-white bg-red-500 rounded-full">
                              {importantNoticeCount}
                            </span>
                          )}
                        </span>
                      </Link>
                      {link.children && (
                        <div className="ml-4 mt-1 space-y-1">
                          {link.children.map((child) => (
                            <Link
                              key={child.path}
                              to={child.path}
                              className={cn(
                                "block px-4 py-2 text-sm rounded-lg transition-colors",
                                isActive(child.path)
                                  ? "text-primary-500 bg-primary-50 dark:bg-primary-900/30"
                                  : theme === "dark"
                                    ? "text-slate-400 hover:bg-slate-700 hover:text-slate-200"
                                    : "text-paragraph hover:bg-muted hover:text-heading"
                              )}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
                <div className="mt-6 px-4 space-y-2">
                  <Link to="/login" className="block">
                    <Button variant="outline" className="w-full">
                      <LogIn className="w-4 h-4" />
                      {t("nav.login")}
                    </Button>
                  </Link>
                  <Link to="/register" className="block">
                    <Button className="w-full">
                      <UserPlus className="w-4 h-4" />
                      {t("nav.register")}
                    </Button>
                  </Link>
                  <Link to="/admission" className="block">
                    <Button variant="secondary" className="w-full">{t("nav.applyNow")}</Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
