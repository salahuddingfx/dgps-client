import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { UserPlus, Mail, Phone, User } from "lucide-react";
import { registerSchema } from "../../schemas/auth";
import { register as registerUser, clearError } from "../../store/slices/authSlice";
import AuthLayout from "../../components/auth/AuthLayout";
import AuthCard from "../../components/auth/AuthCard";
import PasswordInput from "../../components/auth/PasswordInput";
import PasswordStrength from "../../components/auth/PasswordStrength";
import LoadingButton from "../../components/auth/LoadingButton";
import Divider from "../../components/auth/Divider";
import SocialButton from "../../components/auth/SocialButton";

export default function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      acceptTerms: false,
      newsletter: false,
    },
  });

  const password = watch("password");

  const onSubmit = async (data) => {
    dispatch(clearError());
    const result = await dispatch(registerUser(data));
    if (registerUser.fulfilled.match(result)) {
      toast.success("Account created! Please check your email.");
      navigate("/email-sent");
    } else {
      toast.error(result.payload || "Registration failed");
    }
  };

  return (
    <>
      <Helmet>
        <title>Register | Dhuapalong Govt. Primary School</title>
        <meta name="description" content="Create your Dhuapalong Govt. Primary School account." />
      </Helmet>
      <AuthLayout>
        <AuthCard>
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-heading font-poppins mb-2">Create Account</h1>
            <p className="text-sm text-paragraph">Join our school community today</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
            <div>
              <label className="block text-sm font-medium text-heading mb-1.5">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-paragraph/50" />
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-border bg-white text-heading placeholder:text-paragraph/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500"
                  {...register("name")}
                />
              </div>
              {errors.name && <p className="mt-1 text-xs text-danger">{errors.name.message}</p>}
            </div>

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
              <label className="block text-sm font-medium text-heading mb-1.5">Phone Number (Optional)</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-paragraph/50" />
                <input
                  type="tel"
                  placeholder="01XXXXXXXXX"
                  className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-border bg-white text-heading placeholder:text-paragraph/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500"
                  {...register("phone")}
                />
              </div>
              {errors.phone && <p className="mt-1 text-xs text-danger">{errors.phone.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-heading mb-1.5">Password</label>
              <PasswordInput
                placeholder="Create a strong password"
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
                placeholder="Confirm your password"
                error={errors.confirmPassword?.message}
                {...register("confirmPassword")}
              />
            </div>

            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="acceptTerms"
                className="w-4 h-4 mt-0.5 rounded border-border text-primary-500 focus:ring-primary-500"
                {...register("acceptTerms")}
              />
              <label htmlFor="acceptTerms" className="text-sm text-paragraph cursor-pointer">
                I agree to the{" "}
                <Link to="/terms" className="text-primary-500 hover:text-primary-600">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link to="/privacy" className="text-primary-500 hover:text-primary-600">
                  Privacy Policy
                </Link>
              </label>
            </div>
            {errors.acceptTerms && <p className="text-xs text-danger">{errors.acceptTerms.message}</p>}

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="newsletter"
                className="w-4 h-4 rounded border-border text-primary-500 focus:ring-primary-500"
                {...register("newsletter")}
              />
              <label htmlFor="newsletter" className="text-sm text-paragraph cursor-pointer">
                Subscribe to school newsletter
              </label>
            </div>

            {error && (
              <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-sm text-red-700">
                {error}
              </div>
            )}

            <LoadingButton type="submit" loading={loading}>
              Create Account
            </LoadingButton>
          </form>

          <Divider />

          <SocialButton label="Continue with Google" disabled />

          <p className="text-center text-sm text-paragraph mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-primary-500 hover:text-primary-600 font-medium transition-colors">
              Sign in
            </Link>
          </p>
        </AuthCard>
      </AuthLayout>
    </>
  );
}
