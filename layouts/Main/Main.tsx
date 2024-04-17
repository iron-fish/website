import { Flex, chakra } from "@/lib/ui";
import { Footer } from "../../components/Footer/Footer";
import { NavBar } from "../../components/NavBar/NavBar";

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <Flex direction="column" alignItems="stretch" minHeight="100svh">
      <NavBar />
      <chakra.main
        flexGrow={1}
        display="flex"
        flexDirection="column"
        alignItems="stretch"
      >
        {children}
      </chakra.main>
      <Footer />
    </Flex>
  );
}
