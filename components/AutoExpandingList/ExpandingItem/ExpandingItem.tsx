import { Box, Flex, Text } from "@chakra-ui/react";
import React, { ReactNode, useMemo, useRef } from "react";
import useResizeObserver from "@react-hook/resize-observer";

type Theme = "light" | "dark";

type ItemProps = {
  heading: ReactNode;
  body: ReactNode;
  // Props below are provided by AutoExpandingList and should not be passed in.
  _index?: number;
  _active?: boolean;
  _height?: number;
  _registerHeadingHeight?: (index: number, height: number) => void;
  _registerBodyHeight?: (index: number, height: number) => void;
  _handleItemClick?: (index: number) => void;
  _toggleDuration?: number;
  _theme?: Theme;
};

export function ExpandingItem({
  heading,
  body,
  _index,
  _active,
  _height,
  _registerHeadingHeight,
  _registerBodyHeight,
  _handleItemClick,
  _toggleDuration,
  _theme = "light",
}: ItemProps) {
  const headingWrapperRef = useRef<HTMLDivElement>(null);
  const bodyWrapperRef = useRef<HTMLDivElement>(null);

  useResizeObserver(headingWrapperRef, (entry) => {
    if (!_registerHeadingHeight || typeof _index === "undefined") return;

    _registerHeadingHeight(_index, entry.contentRect.height);
  });

  useResizeObserver(bodyWrapperRef, (entry) => {
    if (!_registerBodyHeight || typeof _index === "undefined") return;

    _registerBodyHeight(_index, entry.contentRect.height);
  });

  return (
    <Box
      role="button"
      onClick={() => {
        if (!_handleItemClick || typeof _index === "undefined") return;
        _handleItemClick(_index);
      }}
    >
      <Box ref={headingWrapperRef}>
        <Flex mt={8} gap={8}>
          {typeof _index !== "undefined" && typeof _active !== "undefined" && (
            <ChipCounter num={_index + 1} active={_active} theme={_theme} />
          )}
          <Box>{heading}</Box>
        </Flex>
      </Box>
      <Box
        height={_active ? `${_height}px` : 0}
        overflow="hidden"
        transition={`height ${_toggleDuration}ms ease-in-out`}
      >
        <Box ref={bodyWrapperRef}>
          <Box pt={8} />
          <Flex gap={8}>
            <ChipCounter spacer theme={_theme} />
            <Box>{body}</Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}

function ChipCounter({
  active,
  spacer,
  num = 0,
  color = "gray.200",
  theme = "light",
}: {
  active?: boolean;
  spacer?: boolean;
  num?: number;
  color?: string;
  theme: Theme;
}) {
  const { bg, color: textColor } = useMemo(() => {
    if (active) {
      return {
        bg: color,
        color: "black",
      };
    }

    return {
      bg: theme === "light" ? "black" : "white",
      color: theme === "light" ? "white" : "black",
    };
  }, [active, color, theme]);

  return (
    <Flex
      bg={bg}
      borderRadius="full"
      h="30px"
      minW="45px"
      w="45px"
      justifyContent="center"
      alignItems="center"
      transition="background-color 0.3s ease-in-out"
      opacity={spacer ? 0 : 1}
    >
      {!spacer && (
        <Text textStyle="sm" color={textColor} transform="translateY(1px)">
          {num < 10 ? `0${num}` : num}.
        </Text>
      )}
    </Flex>
  );
}
