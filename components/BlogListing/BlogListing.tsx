import Link from "next/link";
import { Box, Text, ShadowBox, AspectRatio, Button } from "@/lib/ui";
import Image from "next/image";

type Props = {
  href: string;
  img: string;
  date: string;
  title: string;
};

export function BlogListing({ href, img, date, title }: Props) {
  const isInternal = href.startsWith("/");
  return (
    <ShadowBox shadowColor="white" borderWidth="2px" borderRadius="4px">
      <AspectRatio ratio={465 / 309} borderBottom="1.5px solid black">
        <Image alt="" src={img} fill />
      </AspectRatio>
      <Box p={8} pb={16}>
        <Text textStyle="sm" mb={4}>
          {date}
        </Text>
        <Text as="h3" textStyle="h4" marginBottom={4} minHeight="2.5em">
          {title}
        </Text>
        <Button
          as={isInternal ? Link : "a"}
          href={href}
          size="sm"
          bg="white"
          _hover={{
            bg: "gray.200",
          }}
          {...(!isInternal && {
            target: "_blank",
            rel: "noreferrer",
          })}
        >
          Read Now
        </Button>
      </Box>
    </ShadowBox>
  );
}
