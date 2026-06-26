import { Suspense, useState, useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { Toaster } from "sonner";
import store from "./store";
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";
import Layout from "./components/layout/Layout";
import IntroLoader from "./components/layout/IntroLoader";
import LottiePlayer from "./components/ui/LottiePlayer";
import { GuestRoute } from "./components/auth/ProtectedRoute";
import ProtectedStudentRoute from "./components/auth/ProtectedStudentRoute";
import { routes } from "./routes";

const PAGE_LOADER = "https://lottie.host/0988e0f5-3a9a-4baa-8f1a-c99f5e5e9e9e/spinner.lottie";

const AUTH_ROUTES = ["/login", "/register", "/forgot-password", "/reset-password"];
const STUDENT_ROUTES = ["/student/login"];
const STUDENT_PROTECTED_ROUTES = ["/student/dashboard", "/student/results", "/student/attendance", "/student/routine"];

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = useCallback(() => {
    setShowIntro(false);
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider>
        <LanguageProvider>
          <HelmetProvider>
            <BrowserRouter>
              {showIntro && <IntroLoader onComplete={handleIntroComplete} />}
              <div style={{ visibility: showIntro ? "hidden" : "visible" }}>
                <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><LottiePlayer src={PAGE_LOADER} className="w-12 h-12" /></div>}>
                  <Routes>
                    {routes.map(({ path, element: Element, guest, student }) => {
                      const isAuthRoute = AUTH_ROUTES.includes(path);
                      const isStudentLogin = STUDENT_ROUTES.includes(path);
                      const isStudentProtected = STUDENT_PROTECTED_ROUTES.includes(path);

                      let content;

                      if (guest) {
                        content = <GuestRoute><Element /></GuestRoute>;
                      } else if (isStudentLogin) {
                        content = <GuestRoute><Element /></GuestRoute>;
                      } else if (isStudentProtected) {
                        content = <ProtectedStudentRoute><Element /></ProtectedStudentRoute>;
                      } else {
                        content = <Element />;
                      }

                      const isPortalRoute = isStudentLogin || isStudentProtected;

                      return (
                        <Route
                          key={path}
                          path={path}
                          element={
                            isPortalRoute ? content : isAuthRoute ? content : <Layout>{content}</Layout>
                          }
                        />
                      );
                    })}
                  </Routes>
                </Suspense>
              </div>
            </BrowserRouter>
            <Toaster position="top-right" richColors closeButton />
          </HelmetProvider>
        </LanguageProvider>
      </ThemeProvider>
    </Provider>
  );
}
