import { Select, FormControl, FormLabel, Text } from "@chakra-ui/react";

type LangProps = {
  langs: string[];
};

const LangSelect = ({ langs }: LangProps) => {
  return (
    // <FormControl>
    //   <FormLabel mx="auto" mb={1}>
    //     <Text fontSize="sm">idioma</Text>
    //   </FormLabel>
    <Select variant="filled">
      {langs.map((lang, i) => (
        <option key={i} value={lang}>
          {lang}
        </option>
      ))}
    </Select>
    // </FormControl>
  );
};

export { LangSelect };
