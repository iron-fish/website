import { Box, BoxProps } from "@chakra-ui/react";
import React, {
  ReactElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { ProgressIndicator } from "./ProgressIndicator/ProgressIndicator";
import { ExpandingItem } from "./ExpandingItem/ExpandingItem";

const CYCLE_DURATION = 5000;
const TOGGLE_DURATION = 300;

export function useAutoExpandingList() {
  const [itemCount, setItemCount] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoExpanding, setIsAutoExpanding] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAutoExpanding) {
        clearInterval(interval);
        return;
      }

      setActiveIndex((prev) => {
        if (prev === itemCount - 1) return 0;
        return prev + 1;
      });
    }, CYCLE_DURATION);

    return () => {
      clearInterval(interval);
    };
  }, [isAutoExpanding, itemCount]);

  const handleItemClick = useCallback(
    (itemIndex: number) => {
      if (isAutoExpanding) {
        setIsAutoExpanding(false);
      }

      setActiveIndex(itemIndex);
    },
    [isAutoExpanding]
  );

  return useMemo(
    () => ({
      activeIndex,
      isAutoExpanding,
      handleItemClick,
      setItemCount,
    }),
    [activeIndex, handleItemClick, isAutoExpanding]
  );
}

type Props = Omit<BoxProps, "children" | "height"> & {
  children: Array<ReactElement>;
  activeIndex: number;
  isAutoExpanding: boolean;
  handleItemClick: (index: number) => void;
  setItemCount: (count: number) => void;
  theme?: "light" | "dark";
};

function AutoExpandingList({
  children,
  activeIndex,
  isAutoExpanding,
  handleItemClick,
  setItemCount,
  theme = "light",
  ...boxProps
}: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [itemsHeadingHeightMap, setItemsHeadingHeightMap] = useState<
    Record<number, number>
  >({});
  const [itemsBodyHeightMap, setItemsBodyHeightMap] = useState<
    Record<number, number>
  >({});

  const registerHeadingHeight = useCallback((index: number, height: number) => {
    setItemsHeadingHeightMap((prevState) => ({
      ...prevState,
      [index]: height,
    }));
  }, []);
  const registerBodyHeight = useCallback((index: number, height: number) => {
    setItemsBodyHeightMap((prevState) => ({
      ...prevState,
      [index]: height,
    }));
  }, []);

  const childrenCount = useMemo(() => children.length, [children]);
  useEffect(() => {
    setItemCount(childrenCount);
  }, [childrenCount, setItemCount]);

  const cumulativeHeadingHeight = useMemo(() => {
    const heightArray = Object.values(itemsHeadingHeightMap);
    if (heightArray.length === 0) return 0;
    return heightArray.reduce((acc, curr) => acc + curr);
  }, [itemsHeadingHeightMap]);
  const maxBodyHeight = useMemo(() => {
    const heightArray = Object.values(itemsBodyHeightMap);
    if (heightArray.length === 0) return 0;
    return Math.max(...heightArray);
  }, [itemsBodyHeightMap]);

  return (
    <Box
      ref={wrapperRef}
      height={cumulativeHeadingHeight + maxBodyHeight + children.length + "px"}
      {...boxProps}
    >
      {React.Children.map(children, (item, i) => {
        return (
          <Box>
            {React.cloneElement(item, {
              _index: i,
              _active: i === activeIndex,
              _height: itemsBodyHeightMap[i],
              _registerHeadingHeight: registerHeadingHeight,
              _registerBodyHeight: registerBodyHeight,
              _handleItemClick: handleItemClick,
              _toggleDuration: TOGGLE_DURATION,
              _theme: theme,
            })}
            <ProgressIndicator
              isAutoExpanding={isAutoExpanding}
              active={i === activeIndex}
              cycleDuration={CYCLE_DURATION}
              toggleDuration={TOGGLE_DURATION}
              filter={theme === "dark" ? "invert(1)" : "none"}
            />
          </Box>
        );
      })}
    </Box>
  );
}

AutoExpandingList.Item = ExpandingItem;

export { AutoExpandingList };
