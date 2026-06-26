import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Clock, Home, Phone } from "lucide-react";
import AuthLayout from "../../components/auth/AuthLayout";
import AuthCard from "../../components/auth/AuthCard";
import { motion } from "framer-motion";

export default function AccountPendingPage() {
  return (
    <>
      <Helmet>
        <title>Account Pending | Dhuapalong Govt. Primary School</title>
        <meta name="description" content="Your account is pending administrator approval." />
      </Helmet>
      <AuthLayout>
        <AuthCard>
          <div className="text-center py-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent-50 flex items-center justify-center"
            >
              <Clock className="w-10 h-10 text-accent-600" />
            </motion.div>
            <h1 className="text-2xl font-bold text-heading font-poppins mb-3">Account Pending</h1>
            <p className="text-paragraph text-sm leading-relaxed mb-8 max-w-sm mx-auto">
              Your account has been created successfully and is awaiting administrator approval. 
              You will receive an email once your account is approved. This usually takes 1-2 business days.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link to="/">
                <button className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-medium bg-primary-500 text-white hover:bg-primary-600 transition-colors">
                  <Home className="w-4 h-4" />
                  Back Home
                </button>
              </Link>
              <Link to="/contact">
                <button className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-medium border border-border text-heading hover:bg-muted transition-colors">
                  <Phone className="w-4 h-4" />
                  Contact School
                </button>
              </Link>
            </div>
          </div>
        </AuthCard>
      </AuthLayout>
    </>
  );
}
