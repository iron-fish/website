import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

type Props = {
  active: boolean;
  isAutoExpanding: boolean;
  cycleDuration: number;
  toggleDuration: number;
};

export function ProgressIndicator({
  active,
  isAutoExpanding,
  cycleDuration,
  toggleDuration,
}: Props) {
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsReady(true);
    }, 1);
  }, []);
  return (
    <Box bg="rgba(0, 0, 0, 0.2)" my={8}>
      <Box
        h="1.5px"
        w={isReady && active ? "100%" : "0%"}
        bg="black"
        transition={
          active
            ? `width ${isAutoExpanding ? cycleDuration : toggleDuration}ms`
            : "none"
        }
        transitionTimingFunction="linear"
      />
    </Box>
  );
}
