import { FC, useEffect, useState } from "react";

interface CountdownProps {
  date: Date;
}

const Countdown: FC<CountdownProps> = ({ date }) => {
  // Function to calculate the time left until the provided date
  const calculateTimeLeft = () => {
    // Calculate the difference in milliseconds between the provided date and the current date
    const difference = +date - +new Date();
    let timeLeft = {};

    // If the difference is greater than 0 (i.e., the provided date is in the future)
    if (difference > 0) {
      timeLeft = {
        D: Math.floor(difference / (1000 * 60 * 60 * 24)),
        H: Math.floor((difference / (1000 * 60 * 60)) % 24),
        M: Math.floor((difference / 1000 / 60) % 60),
        S: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // Update the timeLeft state every second
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="text-cf-gold-500">
      {isMounted &&
        Object.entries(timeLeft).map(([unit, value]) => (
          <span key={unit}>
            {value as number}
            {unit}{" "}
          </span>
        ))}
    </div>
  );
};

export default Countdown;
