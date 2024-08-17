import React from "react";
import { TypeAnimation } from "react-type-animation";

function Animation() {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed once, initially
        "Development of Dex & Defi",
        2300,
        "Development of Smart Contract",
        2300,
        "Development of Telegram Mini Game ",
        2300,
        "Development of Various Bots",
        2300,
      ]}
      speed={30}
      repeat={Infinity}
    />
  );
}

export default Animation;
