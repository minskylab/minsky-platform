import { Box, Heading, Text, Flex, Button, Link } from "@chakra-ui/react";
import { Highlight } from "../ui/Highlight/index";

const Content = () => {
  return (
    <Box textAlign="center">
      <Heading as="h1" fontSize={["26px", "36px", "48px"]} mb={5}>
        Una
        <Highlight text="nueva perspectiva" color="black" bg="primary.200" />
        tecnológica para tus idea
      </Heading>
      <Text fontSize={["18px", "20px"]} mb={10}>
        En <strong>Minsky</strong> diseñamos y construimos soluciones digitales que generen valor
        para nuestros clientes y para la sociedad.
      </Text>
      <Flex justify="center" wrap="wrap">
        <Link href="#desarrolladores">
          <Button colorScheme="white" variant="outline" mx={4} mb={[3, 0]} fontWeight="light">
            Desarrolladores
          </Button>
        </Link>
        <Link href="#conversemos">
          <Button
            bg="primary.200"
            color="black"
            variant="solid"
            mx={4}
            mb={[3, 0]}
            fontWeight="light"
          >
            Conversemos
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};

export { Content };
