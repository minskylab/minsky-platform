import { Flex, Spacer, useColorMode } from "@chakra-ui/react";
import Link from "next/link";
import { Logo } from "../ui/Logo/index";
import { LangSelect } from "../ui/LangSelect/index";
import { ThemeSwitcher } from "components/ui/themeSwitch";
import { useRouter } from "next/router";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { locale, locales, push } = useRouter();

  return (
    <Flex align="center">
      <Link href="/">
        <a>
          <Logo logo={colorMode === "light" ? "minsky_b.svg" : "minsky_w.svg"} />
        </a>
      </Link>
      <Spacer />
      <Flex align="center" gridGap={4}>
        <LangSelect locales={locales?? []} locale={locale?? ""} />
        <ThemeSwitcher />
      </Flex>
    </Flex>
  );
};

export { Header };
