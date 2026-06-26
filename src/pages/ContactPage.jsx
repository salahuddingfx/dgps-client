import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PAGE_SEO, SEO_DEFAULTS } from "../constants/seo";
import { ContactPointJsonLd, BreadcrumbJsonLd } from "../components/shared/JsonLd";
import PageHeader from "../components/shared/PageHeader";
import ScrollReveal from "../components/shared/ScrollReveal";
import Input from "../components/ui/Input";
import Textarea from "../components/ui/Textarea";
import Button from "../components/ui/Button";
import { contactSchema } from "../schemas";
import { SCHOOL_INFO } from "../constants/navigation";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { toast } from "sonner";
import LottiePlayer from "../components/ui/LottiePlayer";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { cn } from "../utils/cn";

const SPINNER_ANIMATION = "https://lottie.host/0988e0f5-3a9a-4baa-8f1a-c99f5e5e9e9e/spinner.lottie";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useLanguage();
  const { theme } = useTheme();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async () => {
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success(t("contact.successMessage"));
      reset();
    } catch {
      toast.error(t("contact.errorMessage"));
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: MapPin, label: t("contact.address"), value: `${SCHOOL_INFO.address.line1}, ${SCHOOL_INFO.address.district}, ${SCHOOL_INFO.address.division}` },
    { icon: Phone, label: t("contact.phone"), value: SCHOOL_INFO.contact.phone, href: `tel:${SCHOOL_INFO.contact.phone}` },
    { icon: Mail, label: t("contact.email"), value: SCHOOL_INFO.contact.email, href: `mailto:${SCHOOL_INFO.contact.email}` },
    { icon: Clock, label: t("contact.officeHours"), value: `Sun-Thu: ${SCHOOL_INFO.officeHours.weekdays}` },
  ];

  return (
    <>
      <Helmet>
        <title>{PAGE_SEO.contact.title}</title>
        <meta name="description" content={PAGE_SEO.contact.description} />
        <meta property="og:title" content={PAGE_SEO.contact.title} />
        <meta property="og:description" content={PAGE_SEO.contact.description} />
        <meta property="og:image" content={`${SEO_DEFAULTS.siteUrl}${PAGE_SEO.contact.image}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_SEO.contact.title} />
        <meta name="twitter:description" content={PAGE_SEO.contact.description} />
        <meta name="twitter:image" content={`${SEO_DEFAULTS.siteUrl}${PAGE_SEO.contact.image}`} />
      </Helmet>

      <ContactPointJsonLd />
      <BreadcrumbJsonLd items={[{ label: "Home", path: "/" }, { label: "Contact" }]} />

      <PageHeader
        title={t("pageHeader.contactUs")}
        description={t("pageHeader.contactDescription")}
        breadcrumbs={[{ label: t("pageHeader.contactUs") }]}
      />

      <section className={cn(
        "section-padding transition-colors duration-300",
        theme === "dark" ? "bg-slate-800" : "bg-white"
      )}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <ScrollReveal animation="fadeLeft">
                <h2 className={cn(
                  "text-2xl font-bold font-poppins mb-6 transition-colors duration-300",
                  theme === "dark" ? "text-white" : "text-heading"
                )}>
                  {t("contact.getInTouch")}
                </h2>
                <div className="space-y-5 mb-8">
                  {contactInfo.map((info) => {
                    const Icon = info.icon;
                    const Wrapper = info.href ? "a" : "div";
                    return (
                      <Wrapper
                        key={info.label}
                        {...(info.href ? { href: info.href } : {})}
                        className="flex items-start gap-4 group"
                      >
                        <div className={cn(
                          "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300",
                          theme === "dark"
                            ? "bg-primary-900/30 group-hover:bg-primary-800/40"
                            : "bg-primary-50 group-hover:bg-primary-100"
                        )}>
                          <Icon className="w-5 h-5 text-primary-500" />
                        </div>
                        <div>
                          <h4 className={cn(
                            "text-sm font-semibold transition-colors duration-300",
                            theme === "dark" ? "text-white" : "text-heading"
                          )}>
                            {info.label}
                          </h4>
                          <p className={cn(
                            "text-sm transition-colors duration-300",
                            theme === "dark" ? "text-slate-400" : "text-paragraph"
                          )}>
                            {info.value}
                          </p>
                        </div>
                      </Wrapper>
                    );
                  })}
                </div>

                <div className={cn(
                  "rounded-2xl p-5 transition-colors duration-300",
                  theme === "dark" ? "bg-primary-900/20" : "bg-secondary-50"
                )}>
                  <h4 className={cn(
                    "text-sm font-semibold mb-2 transition-colors duration-300",
                    theme === "dark" ? "text-secondary-400" : "text-secondary-700"
                  )}>
                    {t("contact.emergencyContact")}
                  </h4>
                  <a
                    href={`tel:${SCHOOL_INFO.contact.emergency}`}
                    className={cn(
                      "text-sm transition-colors duration-300",
                      theme === "dark" ? "text-secondary-400 hover:text-secondary-300" : "text-secondary-600 hover:text-secondary-700"
                    )}
                  >
                    {SCHOOL_INFO.contact.emergency}
                  </a>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-3">
              <ScrollReveal animation="fadeRight">
                <div className={cn(
                  "rounded-2xl border p-8 transition-colors duration-300",
                  theme === "dark"
                    ? "bg-slate-800 border-slate-700"
                    : "bg-white border-border"
                )}>
                  <h2 className={cn(
                    "text-2xl font-bold font-poppins mb-6 transition-colors duration-300",
                    theme === "dark" ? "text-white" : "text-heading"
                  )}>
                    {t("contact.sendMessage")}
                  </h2>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <Input
                        label={t("contact.yourName")}
                        placeholder={t("contact.enterName")}
                        error={errors.name?.message}
                        {...register("name")}
                      />
                      <Input
                        label={t("contact.emailAddress")}
                        type="email"
                        placeholder={t("contact.enterEmail")}
                        error={errors.email?.message}
                        {...register("email")}
                      />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <Input
                        label={t("contact.phoneNumber")}
                        placeholder={t("contact.phonePlaceholder")}
                        error={errors.phone?.message}
                        {...register("phone")}
                      />
                      <Input
                        label={t("contact.subject")}
                        placeholder={t("contact.subjectPlaceholder")}
                        error={errors.subject?.message}
                        {...register("subject")}
                      />
                    </div>
                    <Textarea
                      label={t("contact.yourMessage")}
                      placeholder={t("contact.messagePlaceholder")}
                      error={errors.message?.message}
                      {...register("message")}
                    />
                    <Button type="submit" size="lg" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                       <LottiePlayer src={SPINNER_ANIMATION} className="w-5 h-5" loop={true} speed={2} />
                          {t("contact.sending")}
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          {t("contact.sendButton")}
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <section className={cn(
        "section-padding transition-colors duration-300",
        theme === "dark" ? "bg-slate-900" : "bg-muted"
      )}>
        <div className="container-wide">
          <ScrollReveal animation="fadeUp">
            <div className={cn(
              "rounded-2xl overflow-hidden shadow-lg transition-colors duration-300",
              theme === "dark" ? "shadow-slate-800" : "shadow-medium"
            )}>
              <div className={cn(
                "relative w-full aspect-video min-h-[400px]",
                theme === "dark" ? "bg-slate-800" : "bg-slate-100"
              )}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.876!2d92.0947!3d21.4523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adc09c1b1c1b1b%3A0x1b1b1b1b1b1b1b1b!2sDhuapalong%2C%20Khuniapalong%2C%20Ramu%2C%20Cox%27s%20Bazar!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
                  width="100%"
                  height="100%"
                  style={{ border: 0, position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="School Location - Dhuapalong, Khuniapalong, Ramu, Cox's Bazar"
                  className="rounded-2xl"
                />
              </div>
              <div className={cn(
                "p-4 text-center transition-colors duration-300",
                theme === "dark" ? "bg-slate-800" : "bg-white"
              )}>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <MapPin className={cn(
                    "w-4 h-4 transition-colors duration-300",
                    theme === "dark" ? "text-primary-400" : "text-primary-500"
                  )} />
                  <h3 className={cn(
                    "text-sm font-semibold transition-colors duration-300",
                    theme === "dark" ? "text-white" : "text-heading"
                  )}>
                    {SCHOOL_INFO.name}
                  </h3>
                </div>
                <p className={cn(
                  "text-xs transition-colors duration-300",
                  theme === "dark" ? "text-slate-400" : "text-paragraph"
                )}>
                  {SCHOOL_INFO.address.line1}, {SCHOOL_INFO.address.upazila}, {SCHOOL_INFO.address.district}, {SCHOOL_INFO.address.division}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
