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
            data-ackee-domain-id="281f3b8d-0937-44d8-9ea8-eec23091d87c"
          ></script>
        </body>
      </Html>
    );
  }
}

export default Document;
