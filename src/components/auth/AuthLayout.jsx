import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen bg-background flex">
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 relative overflow-hidden items-center justify-center p-12">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/5 rounded-full" />
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-white/5 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/[0.03] rounded-full" />
        </div>
        <div className="relative z-10 text-center max-w-md">
          <Link to="/" className="inline-block mb-8">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-white/15 flex items-center justify-center hover:bg-white/25 transition-colors">
              <span className="text-3xl font-bold text-white font-poppins">D</span>
            </div>
          </Link>
          <h1 className="text-3xl font-bold text-white font-poppins mb-4">
            Dhuapalong Govt. Primary School
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">
            Quality education since 1965. Nurturing young minds for a brighter tomorrow.
          </p>
          <div className="mt-10 flex items-center justify-center gap-8 text-white/50 text-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">450+</div>
              <div>Students</div>
            </div>
            <div className="w-px h-8 bg-white/20" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white">18</div>
              <div>Teachers</div>
            </div>
            <div className="w-px h-8 bg-white/20" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white">60+</div>
              <div>Years</div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-6 sm:p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-paragraph hover:text-heading transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <div className="lg:hidden flex items-center gap-3 mb-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary-500 flex items-center justify-center text-white font-bold font-poppins">
                D
              </div>
              <span className="text-sm font-bold text-heading font-poppins">DGPS</span>
            </Link>
          </div>
          {children}
        </motion.div>
      </div>
    </div>
  );
}
