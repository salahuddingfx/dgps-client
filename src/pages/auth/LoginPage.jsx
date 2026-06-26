import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { LogIn } from "lucide-react";
import { loginSchema } from "../../schemas/auth";
import { login, clearError } from "../../store/slices/authSlice";
import AuthLayout from "../../components/auth/AuthLayout";
import AuthCard from "../../components/auth/AuthCard";
import PasswordInput from "../../components/auth/PasswordInput";
import LoadingButton from "../../components/auth/LoadingButton";
import Divider from "../../components/auth/Divider";
import SocialButton from "../../components/auth/SocialButton";
import { Mail } from "lucide-react";

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "", rememberMe: false },
  });

  const onSubmit = async (data) => {
    dispatch(clearError());
    const result = await dispatch(login(data));
    if (login.fulfilled.match(result)) {
      toast.success("Welcome back!");
      navigate("/");
    } else {
      toast.error(result.payload || "Login failed");
    }
  };

  return (
    <>
      <Helmet>
        <title>Login | Dhuapalong Govt. Primary School</title>
        <meta name="description" content="Login to your Dhuapalong Govt. Primary School account." />
      </Helmet>
      <AuthLayout>
        <AuthCard>
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-heading font-poppins mb-2">Welcome Back</h1>
            <p className="text-sm text-paragraph">Sign in to your account to continue</p>
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

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-sm font-medium text-heading">Password</label>
                <Link to="/forgot-password" className="text-xs text-primary-500 hover:text-primary-600 transition-colors">
                  Forgot Password?
                </Link>
              </div>
              <PasswordInput
                placeholder="Enter your password"
                error={errors.password?.message}
                {...register("password")}
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="rememberMe"
                className="w-4 h-4 rounded border-border text-primary-500 focus:ring-primary-500"
                {...register("rememberMe")}
              />
              <label htmlFor="rememberMe" className="text-sm text-paragraph cursor-pointer">
                Remember me
              </label>
            </div>

            {error && (
              <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-sm text-red-700">
                {error}
              </div>
            )}

            <LoadingButton type="submit" loading={loading}>
              Sign In
            </LoadingButton>
          </form>

          <Divider />

          <SocialButton label="Continue with Google" disabled />

          <p className="text-center text-sm text-paragraph mt-6">
            Don't have an account?{" "}
            <Link to="/register" className="text-primary-500 hover:text-primary-600 font-medium transition-colors">
              Create one
            </Link>
          </p>
        </AuthCard>
      </AuthLayout>
    </>
  );
}
