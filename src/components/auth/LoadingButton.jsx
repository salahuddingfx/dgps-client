import { cn } from "../../utils/cn";
import LottiePlayer from "../ui/LottiePlayer";

const SPINNER_ANIMATION = "https://lottie.host/0988e0f5-3a9a-4baa-8f1a-c99f5e5e9e9e/spinner.lottie";

export default function LoadingButton({ loading, children, className, ...props }) {
  return (
    <button
      className={cn(
        "w-full flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700",
        className
      )}
      disabled={loading}
      {...props}
    >
      {loading && (
        <LottiePlayer
          src={SPINNER_ANIMATION}
          className="w-5 h-5"
          loop={true}
          speed={2}
        />
      )}
      {children}
    </button>
  );
}
