import { Flex, chakra } from "@/lib/ui";
import { Footer } from "../../components/Footer/Footer";
import { NavBar } from "../../components/NavBar/NavBar";
import { useRouter } from "next/router";

export function MainLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  return (
    <Flex direction="column" alignItems="stretch" minHeight="100svh">
      <NavBar />
      <chakra.main
        flexGrow={1}
        display="flex"
        flexDirection="column"
        alignItems="stretch"
        letterSpacing="0.01em"
      >
        {children}
      </chakra.main>
      <Footer />
    </Flex>
  );
}
