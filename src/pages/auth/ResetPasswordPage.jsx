import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { Lock, ArrowLeft } from "lucide-react";
import { resetPasswordSchema } from "../../schemas/auth";
import { resetPassword, clearError } from "../../store/slices/authSlice";
import AuthLayout from "../../components/auth/AuthLayout";
import AuthCard from "../../components/auth/AuthCard";
import PasswordInput from "../../components/auth/PasswordInput";
import PasswordStrength from "../../components/auth/PasswordStrength";
import LoadingButton from "../../components/auth/LoadingButton";
import SuccessScreen from "../../components/auth/SuccessScreen";

export default function ResetPasswordPage() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: { password: "", confirmPassword: "" },
  });

  const password = watch("password");

  const onSubmit = async (data) => {
    dispatch(clearError());
    const result = await dispatch(resetPassword({ token, password: data.password }));
    if (resetPassword.fulfilled.match(result)) {
      setSuccess(true);
    } else {
      toast.error(result.payload || "Failed to reset password");
    }
  };

  if (success) {
    return (
      <>
        <Helmet>
          <title>Password Reset | Dhuapalong Govt. Primary School</title>
        </Helmet>
        <AuthLayout>
          <AuthCard>
            <SuccessScreen
              title="Password Reset!"
              description="Your password has been successfully reset. You can now login with your new password."
              actions={[
                { label: "Go to Login", to: "/login", variant: "primary" },
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
        <title>Reset Password | Dhuapalong Govt. Primary School</title>
        <meta name="description" content="Reset your password for Dhuapalong Govt. Primary School." />
      </Helmet>
      <AuthLayout>
        <AuthCard>
          <div className="text-center mb-8">
            <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary-50 flex items-center justify-center">
              <Lock className="w-7 h-7 text-primary-500" />
            </div>
            <h1 className="text-2xl font-bold text-heading font-poppins mb-2">Reset Password</h1>
            <p className="text-sm text-paragraph">Enter your new password below</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
            <div>
              <label className="block text-sm font-medium text-heading mb-1.5">New Password</label>
              <PasswordInput
                placeholder="Enter new password"
                error={errors.password?.message}
                {...register("password")}
              />
              <div className="mt-3">
                <PasswordStrength password={password} />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-heading mb-1.5">Confirm Password</label>
              <PasswordInput
                placeholder="Confirm new password"
                error={errors.confirmPassword?.message}
                {...register("confirmPassword")}
              />
            </div>

            {error && (
              <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-sm text-red-700">
                {error}
              </div>
            )}

            <LoadingButton type="submit" loading={loading}>
              Reset Password
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
