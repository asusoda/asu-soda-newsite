import { useState, useEffect } from "react";

const AnimatedNumber = ({ number, steps, formatter }) => {
  const [animatedNumber, setAnimatedNumber] = useState(0);

  // Placeholder model function. Replace with actual logic.
  const model = (nextNumber, step) => {
    // Example logic: delay increases as the number gets closer to the target
    const baseDelay = 50; // Base delay in milliseconds
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
