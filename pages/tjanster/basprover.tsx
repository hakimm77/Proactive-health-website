import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { COLORS } from "@/helpers/colors";
import { Flex, Text } from "@chakra-ui/react";
import { useMediaQuery } from "@material-ui/core";
import Image from "next/image";

const BaseSamplePage = () => {
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
            Basprover
          </Text>

          <Text mb={10}>
            Innan du kommer till vår mottagning så tar vi basprover i samarbete
            med Unilabs. De har en högre tillgänglighet, etablerade rutiner och
            det går snabbt och smidigt för våra patienter.
          </Text>

          <Text mb={10}>
            Du betalar via QR-kod på swish och mailar en skärmdump till{" "}
            <span style={{ color: "#000", cursor: "pointer" }}>
              info@proaktivhalsa.se
            </span>{" "}
            så bokar proverna i Unilabs system.
          </Text>

          <Text mb={10}>
            Du kan sedan välja var du vill ta dina prover i{" "}
            <span style={{ color: "#000", cursor: "pointer" }}>Stockholm</span>{" "}
            eller{" "}
            <span style={{ color: "#000", cursor: "pointer" }}>Göteborg</span>
          </Text>

          <Text mb={5} as="li">
            Fasteprover
          </Text>

          <Text mb={5} as="li">
            Svaren analyseras i anslutning till att du gör en{" "}
            <span style={{ color: "#000", cursor: "pointer" }}>
              Hormonanalys
            </span>{" "}
            hos oss
          </Text>
        </Flex>

        <Image
          src={require("../../assets/doctor-image.jpg")}
          alt={"doctor-image"}
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

export default BaseSamplePage;
