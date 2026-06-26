import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { SCHOOL_INFO, FOOTER_LINKS } from "../../constants/navigation";
import { useScrollPosition } from "../../hooks";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";
import { cn } from "../../utils/cn";

export default function Footer() {
  const { scrollPosition } = useScrollPosition();
  const { language, t } = useLanguage();
  const { theme } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerSectionTranslations = {
    About: t("footer.about"),
    Academics: t("footer.academics"),
    Resources: t("footer.resources"),
    Policies: t("footer.policies"),
  };

  const footerLinkTranslations = {
    "About School": t("nav.aboutSchool"),
    "Principal Message": t("nav.principalMessage"),
    Teachers: t("nav.teachers"),
    Facilities: t("nav.facilities"),
    Achievements: t("nav.achievements"),
    Gallery: t("nav.gallery"),
    Play: t("nav.play"),
    Nursery: t("nav.nursery"),
    "Class One": t("nav.classOne"),
    "Class Two": t("nav.classTwo"),
    "Class Three": t("nav.classThree"),
    "Class Four": t("nav.classFour"),
    "Class Five": t("nav.classFive"),
    "Notice Board": t("nav.notices"),
    News: t("nav.news"),
    Events: t("nav.events"),
    Downloads: t("nav.downloads"),
    Admission: t("nav.admission"),
    FAQ: t("nav.faq"),
    "Privacy Policy": t("footer.privacy"),
    "Terms of Service": t("footer.terms"),
    "Refund Policy": t("footer.refund"),
    "Cookie Policy": t("footer.cookies"),
    Disclaimer: t("footer.disclaimer"),
    "Children's Policy": t("footer.children"),
    Developer: language === "bn" ? "ডেভেলপার" : "Developer",
  };

  const translatedFooterLinks = Object.fromEntries(
    Object.entries(FOOTER_LINKS).map(([key, links]) => [
      key,
      links.map((link) => ({
        ...link,
        label: footerLinkTranslations[link.label] || link.label,
      })),
    ])
  );

  return (
    <footer className={cn(
      "relative transition-colors duration-300",
      theme === "dark" ? "bg-slate-900 text-white" : "bg-heading text-white"
    )}>
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none -translate-y-[99%]">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block">
          <path
            d="M0 60C240 120 480 0 720 60C960 120 1200 0 1440 60V120H0V60Z"
            fill={theme === "dark" ? "#0F172A" : "#1E293B"}
          />
        </svg>
      </div>
      <div className="container-wide pt-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 pb-6">
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-3">
              <div className={cn(
                "w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold font-poppins text-base transition-colors duration-300",
                theme === "dark" ? "bg-primary-600" : "bg-primary-500"
              )}>
                D
              </div>
              <div>
                <h3 className="text-sm font-bold font-poppins text-white">Dhuapalong</h3>
                <p className="text-[11px] text-white/70">Govt. Primary School</p>
              </div>
            </div>
            <ul className="space-y-1.5 mb-3">
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-primary-400 shrink-0" />
                <span className="text-xs text-white/70">{SCHOOL_INFO.address.line1}, {SCHOOL_INFO.address.district}</span>
              </li>
              <li>
                <a href={`tel:${SCHOOL_INFO.contact.phone}`} className="flex items-center gap-2 text-xs text-white/70 hover:text-white transition-colors">
                  <Phone className="w-3.5 h-3.5 text-primary-400 shrink-0" />
                  {SCHOOL_INFO.contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${SCHOOL_INFO.contact.email}`} className="flex items-center gap-2 text-xs text-white/70 hover:text-white transition-colors">
                  <Mail className="w-3.5 h-3.5 text-primary-400 shrink-0" />
                  {SCHOOL_INFO.contact.email}
                </a>
              </li>
            </ul>
            <div className="flex items-center gap-2">
              <a
                href={SCHOOL_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary-500 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a
                href={SCHOOL_INFO.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary-500 transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {Object.entries(translatedFooterLinks).map(([key, links]) => (
            <div key={key}>
              <h4 className="text-xs font-semibold font-poppins mb-2.5 uppercase tracking-wider text-white/90">
                {footerSectionTranslations[key.charAt(0).toUpperCase() + key.slice(1)] || key.charAt(0).toUpperCase() + key.slice(1)}
              </h4>
              <ul className="space-y-1.5">
                {links.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-xs text-white/60 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 py-3 flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-xs text-white/50">
            <span>&copy; {new Date().getFullYear()} {SCHOOL_INFO.name}</span>
            <span className="text-white/20">|</span>
            <span>{t("footer.developedBy")}</span>
            <Link
              to="/developer"
              className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors"
            >
              <img
                src="https://salahuddin.codes/CV-Images.png"
                alt="Salah Uddin Kader"
                className="w-5 h-5 rounded-full object-cover border border-white/20"
              />
              <span className="underline underline-offset-2">Salah Uddin Kader</span>
            </Link>
          </div>
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <Link to="/privacy" className="text-[11px] text-white/50 hover:text-white transition-colors">{t("footer.privacy")}</Link>
            <Link to="/terms" className="text-[11px] text-white/50 hover:text-white transition-colors">{t("footer.terms")}</Link>
            <Link to="/refund-policy" className="text-[11px] text-white/50 hover:text-white transition-colors">{t("footer.refund")}</Link>
            <Link to="/cookie-policy" className="text-[11px] text-white/50 hover:text-white transition-colors">{t("footer.cookies")}</Link>
            <Link to="/disclaimer" className="text-[11px] text-white/50 hover:text-white transition-colors">{t("footer.disclaimer")}</Link>
            <Link to="/children-policy" className="text-[11px] text-white/50 hover:text-white transition-colors">{t("footer.children")}</Link>
          </div>
        </div>
      </div>

      {scrollPosition > 300 && (
        <button
          onClick={scrollToTop}
          className={cn(
            "fixed bottom-6 right-6 w-10 h-10 rounded-xl text-white shadow-lg transition-all duration-300 flex items-center justify-center z-50",
            theme === "dark"
              ? "bg-primary-600 hover:bg-primary-700"
              : "bg-primary-500 hover:bg-primary-600"
          )}
          aria-label={t("common.backToTop")}
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </footer>
  );
}
