import { Box, Heading, Flex, Spacer, Select } from "@chakra-ui/react";
import { Img } from "@chakra-ui/react"
import Logo from '../../../../public/images/logos/minsky.svg'

const Header = () => {
  return (
    <Flex align="center">
      <Box p="2">
        <Img src={Logo.src}/>
      </Box>
      <Spacer />
      <Box>
        <Select borderRadius="md" placeholder="ESP" size="sm" variant="filled">
          <option value="ENG">ENG</option>
        </Select>
      </Box>
    </Flex>
  );
};

export { Header };
