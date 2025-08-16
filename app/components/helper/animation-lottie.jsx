"use client";

import dynamic from "next/dynamic";

// Import lottie only on client (avoids "document is not defined" error)
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const AnimationLottie = ({ animationPath, width }) => {
  return (
    <Lottie
      animationData={animationPath}
      loop={true}
      autoplay={true}
      style={{ width: width || "95%" }}
    />
  );
};

export default AnimationLottie;
