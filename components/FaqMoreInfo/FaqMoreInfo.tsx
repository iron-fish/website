import { ReactNode } from "react";
import { Text, Box, chakra } from "@/lib/ui";
import { CONSTANTS } from "@/shared/constants";

export function FaqMoreInfo() {
  return (
    <Box
      my={{
        base: "50px",
        md: "100px",
        lg: "150px",
      }}
    >
      <Text textStyle="h5" textAlign="center">
        Don&apos;t see the answer to a question you have? Reach out to us on{" "}
        <TextLink href={CONSTANTS.SOCIAL_LINKS.twitter}>Twitter</TextLink> or{" "}
        <TextLink href={CONSTANTS.SOCIAL_LINKS.discord}>Discord</TextLink>!
      </Text>
    </Box>
  );
}

function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <chakra.a
      href={href}
      target="_blank"
      rel="noreferrer"
      textDecoration="underline"
      textDecorationThickness="2px"
    >
      {children}
    </chakra.a>
  );
}
