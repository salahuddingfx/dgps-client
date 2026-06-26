import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Mail, ArrowLeft, RefreshCw } from "lucide-react";
import AuthLayout from "../../components/auth/AuthLayout";
import AuthCard from "../../components/auth/AuthCard";
import SuccessScreen from "../../components/auth/SuccessScreen";

export default function EmailSentPage() {
  return (
    <>
      <Helmet>
        <title>Email Sent | Dhuapalong Govt. Primary School</title>
        <meta name="description" content="A verification email has been sent to your email address." />
      </Helmet>
      <AuthLayout>
        <AuthCard>
          <SuccessScreen
            icon={Mail}
            title="Email Sent!"
            description="We've sent a verification link to your email address. Please check your inbox and follow the instructions to activate your account."
            actions={[
              { label: "Open Email App", to: "#", icon: Mail, variant: "default" },
              { label: "Resend Email", to: "/email-sent", icon: RefreshCw, variant: "default" },
              { label: "Back to Login", to: "/login", icon: ArrowLeft, variant: "primary" },
            ]}
          />
        </AuthCard>
      </AuthLayout>
    </>
  );
}
