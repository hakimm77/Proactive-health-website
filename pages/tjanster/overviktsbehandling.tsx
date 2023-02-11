import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { COLORS } from "@/helpers/colors";
import { redirectLink } from "@/helpers/redirectLink";
import { Flex, Text } from "@chakra-ui/react";
import { useMediaQuery } from "@material-ui/core";
import Image from "next/image";
import { useRouter } from "next/router";

const ObesityPage = () => {
  const router = useRouter();
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
            Överviktsbehandling
          </Text>

          <Text mb={10}>
            När du gjort din hormonanalys så går vi igenom den tillsammans med
            dig och förklarar vad den visar och hur man kan kan göra för att nå
            din målvikt inom 12 månader.
          </Text>

          <Text mb={10}>
            Anders, på bilden till höger, behövde bli av med 20 kg och klarade
            det utan diet eller hysteriskmotion på 12 månader med marginal.
          </Text>

          <Text mb={10}>
            Boka tid för{" "}
            <span
              style={{ color: "#000", cursor: "pointer" }}
              onClick={() => {
                redirectLink(
                  "https://patient.nu/portal/public/calendar/fba13539-398b-11ed-99ba-fa163e329242"
                );
              }}
            >
              läkarkonsultation
            </span>
            , efter du genomfört{" "}
            <span
              style={{ color: "#000", cursor: "pointer" }}
              onClick={() => {
                router.push("/tjanster/hormonanalys");
              }}
            >
              hormonanalysen
            </span>
          </Text>

          <Text mb={5} as="li">
            Behandling pågår i 12 månader.{" "}
          </Text>

          <Text mb={5} as="li">
            Du kommer in och gör viktkontroller 1 gång i månaden.
          </Text>

          <Text mb={5} as="li">
            Du och din personliga läkare har regelbunden kontakt via SMS och
            mail under din behandling.
          </Text>

          <Text mb={5} as="li">
            Om du inte går ner i vikt trots tre månaders behandling så får du
            kostnaden för årsbehandlingen tillbaka, så säkra är vi på att det
            fungerar!
          </Text>
        </Flex>

        <Image
          src={require("../../assets/obese-image.png")}
          alt={"obese-transformation"}
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

export default ObesityPage;
