import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { PaymentComponent } from "@/components/PaymentComponent";
import { COLORS } from "@/helpers/colors";
import { redirectLink } from "@/helpers/redirectLink";
import { Flex, Text } from "@chakra-ui/react";
import { useMediaQuery } from "@material-ui/core";
import Image from "next/image";
import { useRouter } from "next/router";

const BaseSamplePage = () => {
  const router = useRouter();
  const isMobile = useMediaQuery("(max-width:1400px)");

  const redirectMailTo = () => {
    if (typeof window !== "undefined") {
      window.open("mailto:info@proaktivhalsa.se");
    }
  };

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
            Basprover
          </Text>

          <Text mb={10}>
            Innan du kommer till vår mottagning så tar vi basprover i samarbete
            med Unilabs. De har en högre tillgänglighet, etablerade rutiner och
            det går snabbt och smidigt för våra patienter.
          </Text>

          <Text mb={10}>
            Du betalar via QR-kod på swish och mailar en skärmdump till{" "}
            <span
              style={{ color: "#000", cursor: "pointer" }}
              onClick={redirectMailTo}
            >
              info@proaktivhalsa.se
            </span>{" "}
            så bokar proverna i Unilabs system.
          </Text>

          <Text mb={10}>
            Du kan sedan välja var du vill ta dina prover i{" "}
            <span
              style={{ color: "#000", cursor: "pointer" }}
              onClick={() => {
                redirectLink("https://unilabs.se/h%C3%A4r-finns-vi");
              }}
            >
              Stockholm
            </span>{" "}
            eller{" "}
            <span
              style={{ color: "#000", cursor: "pointer" }}
              onClick={() => {
                redirectLink(
                  "https://carlanderska.se/verksamhet/unilabs-provtagning/"
                );
              }}
            >
              Göteborg
            </span>
          </Text>

          <Text mb={5} as="li">
            Fasteprover
          </Text>

          <Text mb={5} as="li">
            Svaren analyseras i anslutning till att du gör en{" "}
            <span
              style={{ color: "#000", cursor: "pointer" }}
              onClick={() => {
                router.push("/tjanster/hormonanalys");
              }}
            >
              Hormonanalys
            </span>{" "}
            hos oss
          </Text>
        </Flex>

        <PaymentComponent type="basprover" />
      </Flex>

      <Footer />
    </Flex>
  );
};

export default BaseSamplePage;
