import { lazy } from "react";
import { GuestRoute } from "../components/auth/ProtectedRoute";
import ProtectedStudentRoute from "../components/auth/ProtectedStudentRoute";

const HomePage = lazy(() => import("../pages/HomePage"));
const AboutPage = lazy(() => import("../pages/AboutPage"));
const PrincipalPage = lazy(() => import("../pages/PrincipalPage"));
const AcademicPage = lazy(() => import("../pages/AcademicPage"));
const AcademicClassPage = lazy(() => import("../pages/AcademicClassPage"));
const TeachersPage = lazy(() => import("../pages/TeachersPage"));
const FacilitiesPage = lazy(() => import("../pages/FacilitiesPage"));
const AdmissionPage = lazy(() => import("../pages/AdmissionPage"));
const AdmissionFormPage = lazy(() => import("../pages/AdmissionFormPage"));
const ResultsPage = lazy(() => import("../pages/ResultsPage"));
const ClassRoutinePage = lazy(() => import("../pages/ClassRoutinePage"));
const NoticesPage = lazy(() => import("../pages/NoticesPage"));
const NewsPage = lazy(() => import("../pages/NewsPage"));
const NewsDetailPage = lazy(() => import("../pages/NewsDetailPage"));
const EventsPage = lazy(() => import("../pages/EventsPage"));
const GalleryPage = lazy(() => import("../pages/GalleryPage"));
const AchievementsPage = lazy(() => import("../pages/AchievementsPage"));
const DownloadsPage = lazy(() => import("../pages/DownloadsPage"));
const FAQPage = lazy(() => import("../pages/FAQPage"));
const ContactPage = lazy(() => import("../pages/ContactPage"));
const PrivacyPage = lazy(() => import("../pages/PrivacyPage"));
const TermsPage = lazy(() => import("../pages/TermsPage"));
const RefundPolicyPage = lazy(() => import("../pages/RefundPolicyPage"));
const CookiePolicyPage = lazy(() => import("../pages/CookiePolicyPage"));
const DisclaimerPage = lazy(() => import("../pages/DisclaimerPage"));
const ChildrenPolicyPage = lazy(() => import("../pages/ChildrenPolicyPage"));
const DonationPage = lazy(() => import("../pages/DonationPage"));
const VirtualTourPage = lazy(() => import("../pages/VirtualTourPage"));
const TestimonialsPage = lazy(() => import("../pages/TestimonialsPage"));
const EventsCalendarPage = lazy(() => import("../pages/EventsCalendarPage"));
const DeveloperPage = lazy(() => import("../pages/DeveloperPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

const LoginPage = lazy(() => import("../pages/auth/LoginPage"));
const RegisterPage = lazy(() => import("../pages/auth/RegisterPage"));
const ForgotPasswordPage = lazy(() => import("../pages/auth/ForgotPasswordPage"));
const ResetPasswordPage = lazy(() => import("../pages/auth/ResetPasswordPage"));
const VerifyEmailPage = lazy(() => import("../pages/auth/VerifyEmailPage"));
const EmailSentPage = lazy(() => import("../pages/auth/EmailSentPage"));
const AccountPendingPage = lazy(() => import("../pages/auth/AccountPendingPage"));
const UnauthorizedPage = lazy(() => import("../pages/auth/UnauthorizedPage"));

const StudentDashboard = lazy(() => import("../pages/student/StudentDashboard"));
const StudentResults = lazy(() => import("../pages/student/StudentResults"));
const StudentAttendance = lazy(() => import("../pages/student/StudentAttendance"));
const StudentRoutine = lazy(() => import("../pages/student/StudentRoutine"));

export const routes = [
  { path: "/", element: HomePage },
  { path: "/about", element: AboutPage },
  { path: "/about/principal", element: PrincipalPage },
  { path: "/academic", element: AcademicPage },
  { path: "/academic/:className", element: AcademicClassPage },
  { path: "/teachers", element: TeachersPage },
  { path: "/facilities", element: FacilitiesPage },
  { path: "/admission", element: AdmissionPage },
  { path: "/admission/apply", element: AdmissionFormPage },
  { path: "/results", element: ResultsPage },
  { path: "/routine", element: ClassRoutinePage },
  { path: "/notices", element: NoticesPage },
  { path: "/news", element: NewsPage },
  { path: "/news/:id", element: NewsDetailPage },
  { path: "/events", element: EventsPage },
  { path: "/gallery", element: GalleryPage },
  { path: "/achievements", element: AchievementsPage },
  { path: "/downloads", element: DownloadsPage },
  { path: "/faq", element: FAQPage },
  { path: "/contact", element: ContactPage },
  { path: "/privacy", element: PrivacyPage },
  { path: "/terms", element: TermsPage },
  { path: "/refund-policy", element: RefundPolicyPage },
  { path: "/cookie-policy", element: CookiePolicyPage },
  { path: "/disclaimer", element: DisclaimerPage },
  { path: "/children-policy", element: ChildrenPolicyPage },
  { path: "/donate", element: DonationPage },
  { path: "/virtual-tour", element: VirtualTourPage },
  { path: "/testimonials", element: TestimonialsPage },
  { path: "/events/calendar", element: EventsCalendarPage },
  { path: "/developer", element: DeveloperPage },

  { path: "/login", element: LoginPage, guest: true },
  { path: "/register", element: RegisterPage, guest: true },
  { path: "/forgot-password", element: ForgotPasswordPage, guest: true },
  { path: "/reset-password", element: ResetPasswordPage, guest: true },
  { path: "/verify-email", element: VerifyEmailPage },
  { path: "/email-sent", element: EmailSentPage },
  { path: "/account-pending", element: AccountPendingPage },
  { path: "/unauthorized", element: UnauthorizedPage },

  { path: "/student/dashboard", element: StudentDashboard, student: true },
  { path: "/student/results", element: StudentResults, student: true },
  { path: "/student/attendance", element: StudentAttendance, student: true },
  { path: "/student/routine", element: StudentRoutine, student: true },

  { path: "*", element: NotFoundPage },
];
