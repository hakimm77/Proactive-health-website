import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { HormonsFields } from "@/components/landing-page/HormonsFields";
import { COLORS } from "@/helpers/colors";
import { Flex, Text } from "@chakra-ui/react";
import { useMediaQuery } from "@material-ui/core";
import Image from "next/image";

const RenewalPage = () => {
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
            Receptförnyelser
          </Text>

          <Text mb={10}>
            Tjänsten är endast för våra egna patienter. Vi förnyar inte recept
            för andra personer.
          </Text>

          <Text mb={10}>
            Betalning via swish QR-kod i swish vårt journalsystem skickar ett
            SMS till dig när receptet är förnyat.
          </Text>

          <HormonsFields fieldsOnly />
        </Flex>

        <Image
          src={require("../../assets/renewal-swish.jpg")}
          alt={"swish-renewal"}
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

export default RenewalPage;
