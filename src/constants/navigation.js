export const SCHOOL_INFO = {
  name: "Dhuapalong Govt. Primary School",
  shortName: "DGPS",
  tagline: "Building Tomorrow's Leaders Today",
  established: "1965",
  motto: "Education for All",
  address: {
    line1: "Dhuapalong, Khuniapalong",
    area: "Rabeta",
    upazila: "Ramu",
    district: "Cox's Bazar",
    division: "Chattogram",
    country: "Bangladesh",
    postal: "4300",
  },
  contact: {
    phone: "+880-1700-000000",
    email: "info@dhps.edu.bd",
    emergency: "+880-1700-111111",
  },
  officeHours: {
    weekdays: "8:00 AM - 4:00 PM",
    friday: "9:00 AM - 12:00 PM",
    closed: "Government Holidays",
  },
  social: {
    facebook: "#",
    youtube: "#",
  },
};

export const NAV_LINKS = [
  { label: "Home", path: "/" },
  {
    label: "About",
    path: "/about",
    children: [
      { label: "About School", path: "/about" },
      { label: "Principal Message", path: "/about/principal" },
    ],
  },
  {
    label: "Academic",
    path: "/academic",
    children: [
      { label: "Overview", path: "/academic" },
      { label: "Play", path: "/academic/play" },
      { label: "Nursery", path: "/academic/nursery" },
      { label: "Class One", path: "/academic/class-one" },
      { label: "Class Two", path: "/academic/class-two" },
      { label: "Class Three", path: "/academic/class-three" },
      { label: "Class Four", path: "/academic/class-four" },
      { label: "Class Five", path: "/academic/class-five" },
    ],
  },
  {
    label: "Admission",
    path: "/admission",
    children: [
      { label: "Admission Info", path: "/admission" },
      { label: "Apply Online", path: "/admission/apply" },
    ],
  },
  { label: "Results", path: "/results" },
  { label: "Routine", path: "/routine" },
  { label: "Notices", path: "/notices", badge: true },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
  { label: "Student Portal", path: "/login" },
];

export { PRINCIPAL_INFO, STATS, FACILITIES, TEACHERS, NOTICES, NEWS, EVENTS, GALLERY_ALBUMS, ACHIEVEMENTS, TESTIMONIALS, FAQS, DOWNLOADS, HERO_SLIDES } from "./data";
export { BUS_ROUTES, LIBRARY_BOOKS, DONATION_GOALS, RECENT_DONORS, CAMPUS_GALLERY, CALENDAR_EVENTS } from "./newData";

export const FOOTER_LINKS = {
  about: [
    { label: "About School", path: "/about" },
    { label: "Principal Message", path: "/about/principal" },
    { label: "Teachers", path: "/teachers" },
    { label: "Facilities", path: "/facilities" },
    { label: "Achievements", path: "/achievements" },
    { label: "Gallery", path: "/gallery" },
  ],
  academics: [
    { label: "Play", path: "/academic/play" },
    { label: "Nursery", path: "/academic/nursery" },
    { label: "Class One", path: "/academic/class-one" },
    { label: "Class Two", path: "/academic/class-two" },
    { label: "Class Three", path: "/academic/class-three" },
    { label: "Class Four", path: "/academic/class-four" },
    { label: "Class Five", path: "/academic/class-five" },
  ],
  resources: [
    { label: "Notice Board", path: "/notices" },
    { label: "News", path: "/news" },
    { label: "Events", path: "/events" },
    { label: "Events Calendar", path: "/events/calendar" },
    { label: "Downloads", path: "/downloads" },
    { label: "Admission", path: "/admission" },
    { label: "FAQ", path: "/faq" },
  ],
  policies: [
    { label: "Privacy Policy", path: "/privacy" },
    { label: "Terms of Service", path: "/terms" },
    { label: "Refund Policy", path: "/refund-policy" },
    { label: "Cookie Policy", path: "/cookie-policy" },
    { label: "Disclaimer", path: "/disclaimer" },
    { label: "Children's Policy", path: "/children-policy" },
    { label: "Developer", path: "/developer" },
  ],
  explore: [
    { label: "Virtual Tour", path: "/virtual-tour" },
    { label: "Testimonials", path: "/testimonials" },
    { label: "Donate", path: "/donate" },
  ],
};
