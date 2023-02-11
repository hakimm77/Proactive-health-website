import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { COLORS } from "@/helpers/colors";
import { redirectLink } from "@/helpers/redirectLink";
import { Flex, Text } from "@chakra-ui/react";
import { useMediaQuery } from "@material-ui/core";
import Image from "next/image";

const OwnResearchPage = () => {
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
            TITAN-DM - Klinisk observationsstudie
          </Text>

          <Text mb={10}>
            Genom att kombinera Svensk HealthTech, BankID och ta vara på stora
            resursstarka patient- och pensionärsorganisationer så har Proaktiv
            Hälsa AB tillsammans med Region Gävleborg och Coala Life AB på 12
            veckor rekryterat 600 diabetiker som forskningspersoner i en 90
            dagar lång observationstudie. Resultaten sammanställs och publiceras
            under hösten 2022.
          </Text>

          <Text mb={10}>
            - Det är ett fantastiskt privilegium att få vara med och utveckla
            klinisk forskning i realtid som är möjlig trots COVID pandemi då
            våra forskningspersoner engagerar sig först via BankID, sedan via
            Coala Heart Monitor och allt från sitt eget hem, säger Michel
            Tagliati, MD, CEO Proaktiv Hälsa AB och projektledare i studien.
          </Text>

          <Text mb={10}>Pressreleaser</Text>

          <Text mb={5} as="li" color="#000" cursor="pointer">
            Coala Lifes Titan-DM studie med 600 deltagare är fullrekryterad
          </Text>

          <Text
            mb={5}
            as="li"
            color="#000"
            cursor="pointer"
            onClick={() => {
              redirectLink(
                "https://investors.coalalife.com/sv/media/pressmeddelanden/"
              );
            }}
          >
            Region Gävleborg inleder TITAN-DM studien på diabetespatienter i
            samarbete med Coala Life
          </Text>
        </Flex>

        <Image
          src={require("../../assets/own-research-image.png")}
          alt={"Titan-DM"}
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

export default OwnResearchPage;
