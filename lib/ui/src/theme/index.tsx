import {
  ChakraProvider,
  ChakraProviderProps,
  extendTheme,
} from "@chakra-ui/react";
import { buttonTheme } from "./components/button";
import { headingTheme } from "./components/heading";
import { colors } from "./components/colors";
import { fontSizes } from "./components/fontSizes";
import { textStyles } from "./components/textStyles";
import { sizes } from "./components/sizes";
import { breakpoints } from "./components/breakpoints";

export { LoadFonts } from "./components/fonts";

export type { ColorKeys } from "./components/colors";

const theme = extendTheme({
  colors,
  fontSizes,
  textStyles,
  sizes,
  breakpoints,
  fonts: {
    heading: "FavoritExtendedIf, sans-serif",
    body: "FavoritIF, sans-serif",
  },
  components: {
    Button: buttonTheme,
    Heading: headingTheme,
  },
});

export const IronfishUIProvider = ({
  children,
}: Omit<ChakraProviderProps, "theme">) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};
