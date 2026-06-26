import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { User, GraduationCap } from "lucide-react";
import { studentLoginSchema } from "../../schemas/auth";
import { studentLogin, clearStudentError } from "../../store/slices/studentAuthSlice";
import AuthLayout from "../../components/auth/AuthLayout";
import AuthCard from "../../components/auth/AuthCard";
import PasswordInput from "../../components/auth/PasswordInput";
import LoadingButton from "../../components/auth/LoadingButton";

export default function PortalLoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.studentAuth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(studentLoginSchema),
    defaultValues: { studentId: "", password: "" },
  });

  const onSubmit = async (data) => {
    dispatch(clearStudentError());
    const result = await dispatch(studentLogin(data));
    if (studentLogin.fulfilled.match(result)) {
      toast.success("Welcome back, " + result.payload.student.name + "!");
      navigate("/student/dashboard");
    } else {
      toast.error(result.payload || "Login failed");
    }
  };

  return (
    <>
      <Helmet>
        <title>Student Login | Dhuapalong Govt. Primary School</title>
        <meta name="description" content="Login to the student portal of Dhuapalong Govt. Primary School." />
      </Helmet>
      <AuthLayout>
        <AuthCard>
          <div className="text-center mb-8">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-primary-50 flex items-center justify-center mb-4">
              <GraduationCap className="w-7 h-7 text-primary-500" />
            </div>
            <h1 className="text-2xl font-bold text-heading font-poppins mb-2">Student Portal</h1>
            <p className="text-sm text-paragraph">Sign in to access your dashboard</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
            <div>
              <label className="block text-sm font-medium text-heading mb-1.5">Student ID</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-paragraph/50" />
                <input
                  type="text"
                  placeholder="e.g. DGPS-2026-001"
                  className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-border bg-white text-heading placeholder:text-paragraph/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500"
                  {...register("studentId")}
                />
              </div>
              {errors.studentId && <p className="mt-1 text-xs text-danger">{errors.studentId.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-heading mb-1.5">Password</label>
              <PasswordInput
                placeholder="Enter your password"
                error={errors.password?.message}
                {...register("password")}
              />
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

          <p className="text-center text-xs text-paragraph mt-6">
            Demo credentials: <span className="font-medium text-heading">DGPS-2026-001</span> / <span className="font-medium text-heading">student123</span>
          </p>

          <p className="text-center text-sm text-paragraph mt-4">
            <Link to="/" className="text-primary-500 hover:text-primary-600 font-medium transition-colors">
              &larr; Back to Home
            </Link>
          </p>
        </AuthCard>
      </AuthLayout>
    </>
  );
}
