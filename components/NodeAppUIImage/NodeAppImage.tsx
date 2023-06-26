import { useBreakpointValue, Flex, FlexProps } from "@/lib/ui";
import Image from "next/image";

export function NodeAppUIImage(props: FlexProps) {
  const imageProps = useBreakpointValue(
    {
      base: {
        src: "/images/shared/node-app-ui/node-app-ui-base.svg",
        width: 382,
        height: 216,
      },
      sm: {
        src: "/images/shared/node-app-ui/node-app-ui-md.svg",
        width: 832,
        height: 471,
      },
      lg: {
        src: "/images/shared/node-app-ui/node-app-ui-lg.svg",
        width: 1016,
        height: 471,
      },
      xl: {
        src: "/images/shared/node-app-ui/node-app-ui-xl.svg",
        width: 1151,
        height: 471,
      },
      "2xl": {
        src: "/images/shared/node-app-ui/node-app-ui-2xl.svg",
        width: 1364,
        height: 478,
      },
    },
    {
      ssr: false,
    }
  );
  return imageProps ? (
    <Flex justifyContent="center" {...props}>
      <Image {...imageProps} alt="" />
    </Flex>
  ) : null;
}
