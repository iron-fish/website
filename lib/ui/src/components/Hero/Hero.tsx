import { ReactNode } from "react";
import {
  Box,
  BoxProps,
  Container,
  ContainerProps,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";

export type LocalImage = {
  src: string;
  height: number;
  width: number;
};

type Props = Omit<BoxProps, "children"> & {
  heading: string | ReactNode;
  subheading: string;
  description: string;
  images?: ReactNode;
  children?: ReactNode;
  textContainerProps?: ContainerProps;
};

export function Hero({
  heading,
  subheading,
  description,
  images,
  children,
  textContainerProps,
  ...rest
}: Props) {
  return (
    <Box
      borderBottom="1.5px solid black"
      {...rest}
      px={{
        base: 6,
        md: 12,
      }}
      position="relative"
      overflow="hidden"
    >
      {images}
      <Container
        w="100%"
        maxW="container.sm"
        textAlign="center"
        py={{
          base: "96px",
          md: "116px",
        }}
        position="relative"
        zIndex={1}
        {...textContainerProps}
      >
        {typeof heading === "string" ? (
          <Text as="h1" textStyle="lg" mb={10}>
            {heading}
          </Text>
        ) : (
          heading
        )}
        <Text textStyle="h2" mb={10}>
          {subheading}
        </Text>
        <Text textStyle="lg">{description}</Text>
      </Container>
      {children}
    </Box>
  );
}

type HeroImageUtilProps = {
  image: LocalImage;
  top?: BoxProps["top"];
  left?: BoxProps["left"];
  bottom?: BoxProps["bottom"];
  right?: BoxProps["right"];
};

export function HeroImageUtil({ image, ...rest }: HeroImageUtilProps) {
  return (
    <Box
      position="absolute"
      display={{
        base: "none",
        md: "block",
      }}
      {...rest}
    >
      <Image {...image} alt="" />
    </Box>
  );
}
