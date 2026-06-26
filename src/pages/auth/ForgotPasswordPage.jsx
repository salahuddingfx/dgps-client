import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { Mail, ArrowLeft } from "lucide-react";
import { forgotPasswordSchema } from "../../schemas/auth";
import { forgotPassword, clearError } from "../../store/slices/authSlice";
import AuthLayout from "../../components/auth/AuthLayout";
import AuthCard from "../../components/auth/AuthCard";
import LoadingButton from "../../components/auth/LoadingButton";
import SuccessScreen from "../../components/auth/SuccessScreen";

export default function ForgotPasswordPage() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);
  const [sent, setSent] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = async (data) => {
    dispatch(clearError());
    const result = await dispatch(forgotPassword(data.email));
    if (forgotPassword.fulfilled.match(result)) {
      setSent(true);
    } else {
      toast.error(result.payload || "Failed to send reset link");
    }
  };

  if (sent) {
    return (
      <>
        <Helmet>
          <title>Email Sent | Dhuapalong Govt. Primary School</title>
        </Helmet>
        <AuthLayout>
          <AuthCard>
            <SuccessScreen
              title="Check Your Email"
              description="We've sent a password reset link to your email address. Please check your inbox and follow the instructions."
              actions={[
                { label: "Back to Login", to: "/login", icon: ArrowLeft, variant: "primary" },
              ]}
            />
          </AuthCard>
        </AuthLayout>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Forgot Password | Dhuapalong Govt. Primary School</title>
        <meta name="description" content="Reset your Dhuapalong Govt. Primary School account password." />
      </Helmet>
      <AuthLayout>
        <AuthCard>
          <div className="text-center mb-8">
            <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary-50 flex items-center justify-center">
              <Mail className="w-7 h-7 text-primary-500" />
            </div>
            <h1 className="text-2xl font-bold text-heading font-poppins mb-2">Forgot Password?</h1>
            <p className="text-sm text-paragraph">
              No worries! Enter your email address and we'll send you a link to reset your password.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
            <div>
              <label className="block text-sm font-medium text-heading mb-1.5">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-paragraph/50" />
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-border bg-white text-heading placeholder:text-paragraph/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500"
                  {...register("email")}
                />
              </div>
              {errors.email && <p className="mt-1 text-xs text-danger">{errors.email.message}</p>}
            </div>

            {error && (
              <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-sm text-red-700">
                {error}
              </div>
            )}

            <LoadingButton type="submit" loading={loading}>
              Send Reset Link
            </LoadingButton>
          </form>

          <div className="mt-6 text-center">
            <Link to="/login" className="inline-flex items-center gap-1.5 text-sm text-paragraph hover:text-heading transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Login
            </Link>
          </div>
        </AuthCard>
      </AuthLayout>
    </>
  );
}
