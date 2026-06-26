import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MailCheck, ArrowLeft, RefreshCw } from "lucide-react";
import AuthLayout from "../../components/auth/AuthLayout";
import AuthCard from "../../components/auth/AuthCard";
import SuccessScreen from "../../components/auth/SuccessScreen";

export default function VerifyEmailPage() {
  return (
    <>
      <Helmet>
        <title>Verify Email | Dhuapalong Govt. Primary School</title>
        <meta name="description" content="Verify your email address to activate your account." />
      </Helmet>
      <AuthLayout>
        <AuthCard>
          <SuccessScreen
            icon={MailCheck}
            title="Verify Your Email"
            description="We've sent a verification link to your email address. Please check your inbox and click the link to verify your account."
            actions={[
              { label: "Resend Email", to: "/verify-email", icon: RefreshCw, variant: "default" },
              { label: "Back to Login", to: "/login", icon: ArrowLeft, variant: "primary" },
            ]}
          />
        </AuthCard>
      </AuthLayout>
    </>
  );
}
