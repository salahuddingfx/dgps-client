import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Button from "../components/ui/Button";
import LottiePlayer from "../components/ui/LottiePlayer";
import { Home, ArrowLeft } from "lucide-react";

const NOT_FOUND_ANIMATION = "https://lottie.host/c698def0-0b84-4b9a-a284-2b3b4c8e8a8f/8a9a0b1c2d.lottie";

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Dhuapalong Govt. Primary School</title>
        <meta name="description" content="The page you are looking for does not exist." />
      </Helmet>

      <section className="min-h-[70vh] flex items-center justify-center bg-background">
        <div className="text-center px-4">
          <LottiePlayer
            src={NOT_FOUND_ANIMATION}
            className="w-48 h-48 md:w-64 md:h-64 mx-auto mb-4"
            loop={true}
          />
          <h1 className="text-3xl md:text-4xl font-bold text-heading font-poppins mb-4">
            Page Not Found
          </h1>
          <p className="text-paragraph text-lg mb-8 max-w-md mx-auto">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link to="/">
              <Button size="lg">
                <Home className="w-5 h-5" />
                Back to Home
              </Button>
            </Link>
            <Button variant="outline" size="lg" onClick={() => window.history.back()}>
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
