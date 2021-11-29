import { Heading, Text, Flex, Button, Link, Container, useBreakpointValue } from "@chakra-ui/react";
import { Highlight } from "../../components/ui/Highlight/index";

const Content = () => {
  const buttonSize = useBreakpointValue(["sm", "md"]);
  const mailTo = "mailto:hello@minsky.cc?subject=Quiero realizar un proyecto de Diseño/Desarrollo";
  return (
    <Container textAlign="center" maxW="container.sm">
      <Heading as="h1" fontSize={["2xl", "4xl", "5xl"]} mb={5}>
        Una
        <Highlight>nueva perspectiva</Highlight>
        tecnológica para tus ideas
      </Heading>
      <Text fontSize={["md", "lg", "xl"]} mb={10}>
        En <strong>Minsky</strong> diseñamos y construimos soluciones digitales que generen valor
        para nuestros clientes y para la sociedad.
      </Text>
      <Flex justify="center" wrap="wrap">
        <Link
          href="#desarrolladores"
          sx={{
            _hover: {
              textDecoration: "none",
            },
          }}
        >
          <Button
            // colorScheme="white"
            // variant="outline"
            mx={[1, 2, 4]}
            mb={[3, 0]}
            // fontWeight="light"
            size={buttonSize}
          >
            Desarrolladores
          </Button>
        </Link>
        <Link
          href={mailTo}
          sx={{
            _hover: {
              textDecoration: "none",
            },
          }}
        >
          <Button
            colorScheme="yellow"
            // bg="primary.200"
            // color="black"
            variant="solid"
            mx={[1, 2, 4]}
            mb={[3, 0]}
            size={buttonSize}
            // fontWeight="500"
            // fontWeight="light"
          >
            Conversemos
          </Button>
        </Link>
      </Flex>
    </Container>
  );
};

export { Content };
