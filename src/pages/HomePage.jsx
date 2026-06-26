import { Helmet } from "react-helmet-async";
import { SEO_DEFAULTS, PAGE_SEO } from "../constants/seo";
import { SchoolJsonLd, WebSiteJsonLd } from "../components/shared/JsonLd";
import Hero from "../components/home/Hero";
import PrincipalMessage from "../components/home/PrincipalMessage";
import SchoolStats from "../components/home/SchoolStats";
import LatestNotices from "../components/home/LatestNotices";
import LatestNews from "../components/home/LatestNews";
import TeachersPreview from "../components/home/TeachersPreview";
import FacilitiesPreview from "../components/home/FacilitiesPreview";
import StudentActivities from "../components/home/StudentActivities";
import AchievementsPreview from "../components/home/AchievementsPreview";
import GalleryPreview from "../components/home/GalleryPreview";
import Testimonials from "../components/home/Testimonials";
import FAQPreview from "../components/home/FAQPreview";
import ContactCTA from "../components/home/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>{PAGE_SEO.home.title}</title>
        <meta name="description" content={PAGE_SEO.home.description} />
        <meta property="og:title" content={PAGE_SEO.home.title} />
        <meta property="og:description" content={PAGE_SEO.home.description} />
        <meta property="og:type" content={SEO_DEFAULTS.type} />
        <meta property="og:image" content={`${SEO_DEFAULTS.siteUrl}${PAGE_SEO.home.image}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_SEO.home.title} />
        <meta name="twitter:description" content={PAGE_SEO.home.description} />
        <meta name="twitter:image" content={`${SEO_DEFAULTS.siteUrl}${PAGE_SEO.home.image}`} />
      </Helmet>
      <SchoolJsonLd />
      <WebSiteJsonLd />
      <Hero />
      <PrincipalMessage />
      <SchoolStats />
      <LatestNotices />
      <LatestNews />
      <TeachersPreview />
      <FacilitiesPreview />
      <StudentActivities />
      <AchievementsPreview />
      <GalleryPreview />
      <Testimonials />
      <FAQPreview />
      <ContactCTA />
    </>
  );
}
