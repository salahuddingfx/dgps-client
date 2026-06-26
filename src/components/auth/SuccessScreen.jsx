import { ArrowLeft, Home, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import LottiePlayer from "../ui/LottiePlayer";

const SUCCESS_ANIMATION = "https://lottie.host/71fdbb8e-f8cf-45b4-8b22-98da5f0c8a8f/success-check.lottie";

export default function SuccessScreen({ title, description, actions = [] }) {
  return (
    <div className="text-center py-8">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="w-24 h-24 mx-auto mb-6"
      >
        <LottiePlayer
          src={SUCCESS_ANIMATION}
          className="w-full h-full"
          loop={false}
          speed={1}
        />
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-2xl font-bold text-heading font-poppins mb-3"
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-paragraph text-sm leading-relaxed mb-8 max-w-sm mx-auto"
      >
        {description}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-3"
      >
        {actions.map((action, i) => (
          <Link key={i} to={action.to}>
            <button
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                action.variant === "primary"
                  ? "bg-primary-500 text-white hover:bg-primary-600"
                  : "border border-border text-heading hover:bg-muted"
              }`}
            >
              {action.icon && <action.icon className="w-4 h-4" />}
              {action.label}
            </button>
          </Link>
        ))}
      </motion.div>
    </div>
  );
}
