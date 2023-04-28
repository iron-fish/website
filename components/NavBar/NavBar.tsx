import { NavBar as BaseNavBar } from "@/lib/ui";
import { useNavLinks } from "../../shared/navLinks/useNavLinks";

export function NavBar() {
  const navLinks = useNavLinks();

  return <BaseNavBar content={navLinks} sticky />;
}
