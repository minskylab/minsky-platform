import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Head, Html, Main, NextScript } from "next/document";
import React from "react";

import { customTheme } from "theming/index";

class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <ColorModeScript initialColorMode={customTheme.config.initialColorMode} />
          <Main />
          <NextScript />
          <script
            async
            src="https://analytics.internal.minsky.cc/tracker.js"
            data-ackee-server="https://analytics.internal.minsky.cc"
            data-ackee-domain-id="27dc13a2-fcf6-494a-99b6-dc40a0795946"
          ></script>
        </body>
      </Html>
    );
  }
}

export default Document;
