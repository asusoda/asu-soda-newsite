import { useState, useEffect, JSX } from "react";

type AnimatedNumberTypes = {
  number: number;
  steps: number;
  formatter: (x: number) => JSX.Element;
};

const AnimatedNumber = ({ number, steps, formatter }: AnimatedNumberTypes) => {
  const [animatedNumber, setAnimatedNumber] = useState(0);

  // Adjusted model function for faster animation
  const model = (nextNumber: number, step: number): number => {
    // Increase the base delay for faster animation
    const baseDelay = 10; // Lower base delay for faster animation
    const delayFactor = Math.abs(number - nextNumber) / step;
    return baseDelay * delayFactor;
  };

  useEffect(() => {
    const animateNumber = () => {
      if (animatedNumber < number) {
        const nextNumber = Math.min(animatedNumber + steps, number);
        const timeoutDelay = model(nextNumber, steps);
        setTimeout(() => setAnimatedNumber(nextNumber), timeoutDelay);
      }
    };

    animateNumber();
  }, [animatedNumber, number, steps]);

  return formatter(animatedNumber);
};

export default AnimatedNumber;
