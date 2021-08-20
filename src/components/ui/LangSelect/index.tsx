import { Select, FormControl, FormLabel, Text } from "@chakra-ui/react";

type LangProps = {
  langs: string[];
};

const LangSelect = ({langs} : LangProps) => {
  return (
    <FormControl id="lang">
      <FormLabel mx="auto" mb={1}>
        <Text fontSize="xs" align="center">
          idioma
        </Text>
      </FormLabel>
      <Select borderRadius="md" size="sm" variant="filled">
        {langs.map((lang, i) => (
            <option key={i} value={lang}>
              {lang}
            </option>
          )
        )}
      </Select>
    </FormControl>
  );
};

export { LangSelect };
