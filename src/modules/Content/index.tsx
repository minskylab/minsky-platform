import { Heading, Text, Flex, Button, Link, Container } from "@chakra-ui/react";
import { Highlight } from "../../components/ui/Highlight/index";

const Content = () => {
  return (
    <Container textAlign="center" maxW="container.md">
      <Heading as="h1" fontSize={["2xl", "4xl", "5xl"]} mb={5}>
        Una
        <Highlight text="nueva perspectiva" color="black" bg="primary.200" />
        tecnológica para tus idea
      </Heading>
      <Text fontSize={["md", "lg", "xl"]} mb={10}>
        En <strong>Minsky</strong> diseñamos y construimos soluciones digitales que generen valor
        para nuestros clientes y para la sociedad.
      </Text>
      <Flex justify="center" wrap="wrap">
        <Link href="#desarrolladores">
          <Button
            colorScheme="white"
            variant="outline"
            mx={[1, 2, 4]}
            mb={[3, 0]}
            fontWeight="light"
          >
            Desarrolladores
          </Button>
        </Link>
        <Link href="#conversemos">
          <Button
            bg="primary.200"
            color="black"
            variant="solid"
            mx={[1, 2, 4]}
            mb={[3, 0]}
            fontWeight="light"
          >
            Conversemos
          </Button>
        </Link>
      </Flex>
    </Container>
  );
};

export { Content };
