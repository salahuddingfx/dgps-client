import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function LottiePlayer({
  src,
  className = "",
  loop = true,
  autoplay = true,
  speed = 1,
  style,
}) {
  return (
    <DotLottieReact
      src={src}
      loop={loop}
      autoplay={autoplay}
      speed={speed}
      className={className}
      style={style}
    />
  );
}
