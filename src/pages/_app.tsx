import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Provider as URQLProvider } from "urql";

import { customTheme } from "theming";
import { URQLClient } from "lib/client";
import { DefaultSeo } from "next-seo";

import Fonts from "theming/fonts";

const client = URQLClient();

const Minsky = ({ Component, pageProps }: AppProps) => {
  return (
    <URQLProvider value={client}>
      <ChakraProvider resetCSS theme={customTheme}>
        <Fonts />
        <DefaultSeo
          openGraph={{
            type: "website",
            locale: "es_PE",
            url: "https://minsky.cc/",
            site_name: "Minsky Lab",
            images: [
                {
                    url: "https://i.ibb.co/dcv40rX/minsky-square-1.png",
                    alt: "Minsky",
                    width: 512,
                    height: 512,
                },
            ],
          }}
          twitter={{
            handle: "@MinskyLab",
            site: "@MinskyLab",
            cardType: "summary_large_image",
          }}
        />
        <Component {...pageProps} />
      </ChakraProvider>
    </URQLProvider>
  );
};

export default Minsky;
