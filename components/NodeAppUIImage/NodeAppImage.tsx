import { useBreakpointValue, Flex, FlexProps } from "@/lib/ui";
import Image from "next/image";

export function NodeAppUIImage(props: FlexProps) {
  const imageProps = useBreakpointValue(
    {
      base: {
        src: "/images/shared/node-app-ui-new/sm.svg",
        width: 382,
        height: 216,
      },
      md: {
        src: "/images/shared/node-app-ui-new/lg.svg",
        width: 1365,
        height: 477,
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
