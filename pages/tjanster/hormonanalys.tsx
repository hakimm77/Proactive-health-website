import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { COLORS } from "@/helpers/colors";
import { redirectLink } from "@/helpers/redirectLink";
import { Flex, Text } from "@chakra-ui/react";
import { useMediaQuery } from "@material-ui/core";
import Image from "next/image";
import { useRouter } from "next/router";

const HormonAnalysisPage = () => {
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
            Hormonanalys
          </Text>

          <Text mb={10}>
            Innan du gör en hormonanalys hos oss går du till Unilabs i Stockholm
            eller Göteborg och tar{" "}
            <span
              style={{ color: "#000", cursor: "pointer" }}
              onClick={() => {
                router.push("/tjanster/basprover");
              }}
            >
              Basprover
            </span>
            .
          </Text>

          <Text mb={10}>
            Innan du gör en hormonanalys hos oss går du till Unilabs i Stockholm
            eller Göteborg och tar Basprover.
          </Text>

          <Text mb={10}>
            Du kommer fastande till oss så analyserar vi hur dina insulinkurvor
            ser ut för att avgöra om vi du lämpar dig för medicinsk behandling
            av din övervikt.
          </Text>

          <Text mb={10}>
            Det ingår en läkarkonsultation för varje patient som tagit basprover
            och hormonanalys på 60 min där du och din läkare går igenom
            provsvaren och diskuterar behandlingsalternativ tillsammans.
          </Text>

          <Text mb={10}>
            <span
              style={{ color: "#000", cursor: "pointer" }}
              onClick={() => {
                redirectLink(
                  "https://patient.nu/portal/public/calendar/84f5316c-3986-11ed-99ba-fa163e329242"
                );
              }}
            >
              Boka i vår tidbok
            </span>{" "}
            (kopplat till vårt journalsystem på kliniken)
          </Text>

          <Text mb={5} as="li">
            Du kommer fastande vid 08:00.
          </Text>

          <Text mb={5} as="li">
            Du är kvar hos oss till efter 12:00.
          </Text>

          <Text mb={5} as="li">
            Analysen tar ca 5 dagar och en läkare går igenom svaren med dig på
            ett återbesök hos oss.
          </Text>

          <Text mb={5} as="li">
            Du betalar via Swish och{" "}
            <span
              style={{ color: "#000", cursor: "pointer" }}
              onClick={() => {
                router.push("/hormonanalys-payment");
              }}
            >
              QR-kod
            </span>{" "}
            här och fyll i dina uppgifter i det här{" "}
            <span
              style={{ color: "#000", cursor: "pointer" }}
              onClick={() => {
                router.push("/book-consultation");
              }}
            >
              formuläret
            </span>
            .
          </Text>
        </Flex>

        <Image
          src={require("../../assets/header-image.jpg")}
          alt={"header-image"}
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

export default HormonAnalysisPage;
