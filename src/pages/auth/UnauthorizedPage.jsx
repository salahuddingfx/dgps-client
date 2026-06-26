import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ShieldOff, Home, LogIn } from "lucide-react";
import { motion } from "framer-motion";

export default function UnauthorizedPage() {
  return (
    <>
      <Helmet>
        <title>Access Denied | Dhuapalong Govt. Primary School</title>
        <meta name="description" content="You do not have permission to access this page." />
      </Helmet>
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <div className="text-center max-w-md">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="w-24 h-24 mx-auto mb-8 rounded-full bg-red-50 flex items-center justify-center"
          >
            <ShieldOff className="w-12 h-12 text-danger" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-6xl font-bold text-primary-100 font-poppins mb-4">403</h1>
            <h2 className="text-2xl font-bold text-heading font-poppins mb-4">Access Denied</h2>
            <p className="text-paragraph text-sm leading-relaxed mb-8">
              You do not have permission to access this page. If you believe this is an error, please contact the school administrator.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link to="/">
                <button className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-medium bg-primary-500 text-white hover:bg-primary-600 transition-colors">
                  <Home className="w-4 h-4" />
                  Return Home
                </button>
              </Link>
              <Link to="/login">
                <button className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-medium border border-border text-heading hover:bg-muted transition-colors">
                  <LogIn className="w-4 h-4" />
                  Sign In
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
