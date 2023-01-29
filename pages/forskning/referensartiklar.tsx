import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { COLORS } from "@/helpers/colors";
import { Flex, Text } from "@chakra-ui/react";
import { useMediaQuery } from "@material-ui/core";
import Image from "next/image";

const ReferenceArticalesPage = () => {
  const isMobile = useMediaQuery("(max-width:1400px)");

  return (
    <Flex flexDir="column" alignItems="center" bgColor={COLORS.pink}>
      <Navbar />

      <Flex
        mt={"100px"}
        flexDir={isMobile ? "column" : "row"}
        w={isMobile ? "100%" : "90%"}
        justifyContent="space-around"
        alignItems="flex-start"
        paddingTop={20}
        paddingBottom={20}
      >
        <Flex
          flexDir="column"
          color={COLORS.gray}
          fontSize={isMobile ? 17 : 19}
          w={isMobile ? "95%" : "40%"}
          lineHeight={"1.5"}
          pl={isMobile ? 5 : 0}
          mb={isMobile ? 10 : 0}
        >
          <Text
            color="#130947"
            fontSize={isMobile ? 25 : 30}
            fontWeight={600}
            mb={10}
          >
            Referensartiklar
          </Text>
          <Text mb={10}>
            Här kommer vi att publicera referensartiklar inom kort.
          </Text>

          <Text mb={5} as="li">
            Artikel 1
          </Text>

          <Text mb={5} as="li">
            Artikel 2
          </Text>

          <Text mb={5} as="li">
            Artikel 3
          </Text>

          <Text mb={5} as="li">
            Artikel 4
          </Text>

          <Text mb={5} as="li">
            Artikel 5
          </Text>
        </Flex>

        <Image
          src={require("../../assets/drawing-image.png")}
          alt={"drawing-image"}
          style={{
            width: isMobile ? "95%" : "35%",
            objectFit: "contain",
            alignSelf: isMobile ? "center" : "",
            borderRadius: 10,
          }}
        />
      </Flex>

      <Footer />
    </Flex>
  );
};

export default ReferenceArticalesPage;
