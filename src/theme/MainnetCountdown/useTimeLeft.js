import React, { useState } from "react";

// April 20th, 2023 @ 9am Pacific Time
const LAUNCH_DATE = new Date("2023-04-20T16:00:00.000Z");

function getTimeLeft() {
  const now = new Date();
  const diff = LAUNCH_DATE.getTime() - now.getTime();

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / 1000 / 60) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export function useTimeLeft() {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft());

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return timeLeft;
}
