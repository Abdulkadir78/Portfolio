import Lottie from "react-lottie";

function DisplayLottie({ animationData, loop }) {
  const defaultOptions = {
    loop,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} isClickToPauseDisabled />;
}

export default DisplayLottie;
