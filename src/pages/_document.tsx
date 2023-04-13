import { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";
import chakraTheme from "@/theme";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <ColorModeScript initialColorMode={chakraTheme.config.initialColorMode} />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
