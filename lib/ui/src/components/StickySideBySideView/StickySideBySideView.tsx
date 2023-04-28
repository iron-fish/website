import { Children, cloneElement, ReactElement, useMemo, useRef } from "react";
import {
  Box,
  BoxProps,
  Flex,
  FlexProps,
  useBreakpointValue,
} from "@chakra-ui/react";
// import { useMotionValueEvent, useScroll } from 'framer-motion';

type WrapperProps = Omit<FlexProps, "children"> & {
  children: [ReactElement<StickyItemProps>, ReactElement<StickyItemProps>];
};

function StickySideBySideView({ children, ...rest }: WrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  // const { scrollYProgress } = useScroll({
  //   target: containerRef,
  //   offset: ['end end', 'start start'],
  // });

  // useMotionValueEvent(scrollYProgress, 'change', (latest) => {
  //   console.log('Page scroll: ', latest);
  // });

  return (
    <Flex
      {...rest}
      ref={containerRef}
      alignItems="flex-start"
      minH={{
        base: "auto",
        md: "100vh",
      }}
      direction={{
        base: "column",
        md: "row",
      }}
      mb={8}
    >
      {Children.map(children, (child, i) =>
        cloneElement(child, {
          _isStickyChild: i === 0,
        })
      )}
    </Flex>
  );
}

type StickyItemProps = Omit<BoxProps, "width"> & {
  _isStickyChild?: boolean;
};

function StickyItem({ children, _isStickyChild, ...rest }: StickyItemProps) {
  const top = useBreakpointValue({
    base: 0,
    md: "100px",
    xl: "200px",
  });

  const width = useMemo(() => {
    if (_isStickyChild) {
      return {
        base: "100%",
        md: "40%",
        lg: "50%",
      };
    }
    return {
      base: "100%",
      md: "60%",
      lg: "50%",
    };
  }, [_isStickyChild]);

  return (
    <Box
      {...rest}
      width={width}
      position={{
        base: "relative",
        md: "sticky",
      }}
      top={top}
      pl={
        _isStickyChild
          ? undefined
          : {
              base: 0,
              md: 8,
              lg: 24,
            }
      }
      mb={{
        base: 8,
        md: 8,
        lg: 12,
        xl: 20,
      }}
    >
      {children}
    </Box>
  );
}

StickySideBySideView.Item = StickyItem;

export { StickySideBySideView };
