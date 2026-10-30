import { Global } from "@emotion/react";

export function LoadFonts() {
  return (
    <Global
      styles={`
        @font-face {
          font-family: 'FavoritIF';
          src: url("/fonts/favorit-regular-webfont.woff2") format("woff2");
          font-display: swap;
        }
        @font-face {
          font-family: 'FavoritExtendedIF';
          src: url("/fonts/favoritextended-regular-webfont.woff2") format("woff2");
          font-display: swap;
        }
      `}
    />
  );
}
