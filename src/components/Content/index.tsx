import { Box, Heading, Text, Flex, Button } from "@chakra-ui/react";
import { Highlight } from "../ui/Highlight/index";

const Content = () => {
  return (
    <Box textAlign="center">
      <Heading as="h1" size="2xl" mb={5}>
        Una
        <Highlight text="nueva perspectiva" color="#000000" bg="#FFE15D" />
        tecnológica para tus idea
      </Heading>
      <Text fontSize="xl" mb={10}>
        En <strong>Minsky</strong> diseñamos y construimos soluciones digitales que generen valor
        para nuestros clientes y para la sociedad.
      </Text>
      <Flex justify="center">
        <Button colorScheme="white" variant="outline" mx={4}>
          Desarrolladores
        </Button>
        <Button colorScheme="teal" variant="solid" mx={4}>
          Conversemos
        </Button>
      </Flex>
    </Box>
  );
};

export { Content };
