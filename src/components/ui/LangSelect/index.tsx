import { Select, FormControl, FormLabel, Text, Flex, Box } from "@chakra-ui/react";
import Link from "next/link";

type LangProps = {
  locales: string[];
  locale: string;
};

const LangSelect = ({locales, locale}: LangProps) => {

  return (
    // <FormControl>
    //   <FormLabel mx="auto" mb={1}>
    //     <Text fontSize="sm">idioma</Text>
    //   </FormLabel>
    // <Select variant="filled">
    //   {langs.map((lang, i) => (
    //     <option key={i} value={lang["key"]}>
    //       {/* <Link href="/" locale={lang["key"]}> */}
    //         {lang["lang"]}
    //       {/* </Link> */}
    //     </option>
    //   ))}
    // </Select>
    // </FormControl>

    <Flex>
      {locales.map((loc, i) => (
        <Box key={i} mx={3}>
          <Link href="/" locale={loc}>
            <a>
              <Text fontSize="md" textDecor={(locale === loc) ? "undeline ": "none"}>
                {loc}
              </Text>
            </a>
          </Link>
        </Box>
      ))}
    </Flex>
  );
};

export { LangSelect };
