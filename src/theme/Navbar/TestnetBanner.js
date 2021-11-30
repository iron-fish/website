import React, { useEffect, useState } from "react";
import {
  differenceInHours,
  differenceInMinutes,
  formatDistanceStrict,
} from "date-fns";

// Increase by one minute so the clock stays at 1 minute left until
// 1 sec after, rather than ticking to 0 at 59 secs before
const LAUNCH_DATE = new Date("2021-12-01T16:01:00.000Z");

const updateTimeRemaining = () => {
  const now = new Date();

  if (now > LAUNCH_DATE) {
    return {
      daysText: "0 days",
      hoursText: "0 hours",
      minutesText: "0 minutes",
    };
  }

  const daysText = formatDistanceStrict(LAUNCH_DATE, now, {
    unit: "day",
    roundingMethod: "floor",
  });

  const hours = differenceInHours(LAUNCH_DATE, now) % 24;
  const hoursText = `${hours} hour${hours !== 1 ? "s" : ""}`;

  const minutes = differenceInMinutes(LAUNCH_DATE, now) % 60;
  const minutesText = `${minutes} minute${minutes !== 1 ? "s" : ""}`;

  return { daysText, hoursText, minutesText };
};

const TestnetBanner = () => {
  const [time, setTime] = useState(updateTimeRemaining());

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTime(updateTimeRemaining);
    }, 10000);

    return () => {
      clearTimeout(timeout);
    };
  });

  return (
    <div
      style={{
        background: "#e1ddff",
        height: 64,
        fontSize: 18,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "0 0.7rem",
      }}
    >
      <span>
        The Iron Fish Incentivized Testnet starts in {time.daysText},{" "}
        {time.hoursText}, and {time.minutesText}.&nbsp;
      </span>
    </div>
  );
};

export default TestnetBanner;
