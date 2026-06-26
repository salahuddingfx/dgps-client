import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { SCHOOL_INFO } from "../../constants/navigation";
import LottiePlayer from "../ui/LottiePlayer";

const SPLASH_ANIMATION = "https://lottie.host/c0cf4d0f-05fb-4732-9a7f-18a8c8e6b0e0/QSFjrGp3fp.lottie";

export default function IntroLoader({ onComplete }) {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);

  const finish = useCallback(() => {
    setExiting(true);
    setTimeout(() => {
      setVisible(false);
      onComplete?.();
    }, 500);
  }, [onComplete]);

  useEffect(() => {
    const t = setTimeout(finish, 3000);
    return () => clearTimeout(t);
  }, [finish]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-white/[0.06]" />
          <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-white/[0.04]" />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center px-6">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
            className="mb-4"
          >
            <LottiePlayer
              src={SPLASH_ANIMATION}
              className="w-32 h-32"
              loop={false}
              speed={0.8}
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl sm:text-3xl font-bold text-white font-poppins mb-2 tracking-tight"
          >
            {SCHOOL_INFO.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-white/60 text-sm sm:text-base font-inter mb-8"
          >
            {SCHOOL_INFO.tagline}
          </motion.p>

          <div className="flex items-center gap-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{ scale: [1, 1.4, 1], opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                className="w-2 h-2 rounded-full bg-white"
              />
            ))}
          </div>
        </div>
      </div>

      {exiting && (
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          className="absolute inset-0 bg-background origin-bottom z-10"
        />
      )}
    </div>
  );
}
