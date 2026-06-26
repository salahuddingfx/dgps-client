import LottiePlayer from "../ui/LottiePlayer";

const EDUCATION_ANIMATION = "https://lottie.host/a0d35c4b-5694-4a1a-8e62-9c2b5e4e0b6e/education-anim.lottie";

export default function AuthIllustration() {
  return (
    <div className="relative w-64 h-64 mx-auto">
      <LottiePlayer
        src={EDUCATION_ANIMATION}
        className="w-full h-full"
        loop={true}
        speed={1}
      />
    </div>
  );
}
