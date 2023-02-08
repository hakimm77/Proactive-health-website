import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { HormonsFields } from "@/components/landing-page/HormonsFields";
import { COLORS } from "@/helpers/colors";
import { clientsReviews } from "@/helpers/staticInfo/clientsReviewsData";
import { Flex, Text } from "@chakra-ui/react";
import { useMediaQuery } from "@material-ui/core";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

export default function LandingPage() {
  const router = useRouter();
  const isMobile = useMediaQuery("(max-width:1400px)");

  return (
    <Flex
      w="100%"
      h={"100%"}
      flexDir="column"
      backgroundColor={COLORS.pink}
      alignItems="center"
      scrollBehavior="smooth"
    >
      <Navbar />

      <Flex pos="relative" w="100%" h="100vh" mb={10}>
        <Flex
          w="100%"
          flexDir="column"
          h="100vh"
          opacity={0.5}
          backgroundColor={COLORS.pink}
          top={"-80px"}
        >
          <Image
            alt={"header-image"}
            src={require("../assets/header-image.jpg")}
            style={{
              width: "100%",
              height: "100vh",
              objectFit: "cover",
              userSelect: "none",
              pointerEvents: "none",
            }}
          />
        </Flex>
        <Flex
          mt={100}
          position="absolute"
          flexDir="column"
          top={isMobile ? "100px" : 150}
          left={isMobile ? 0 : 150}
          alignItems="center"
        >
          <Text
            color="#fff"
            bgColor="#000"
            w={"fit-content"}
            fontWeight={500}
            fontSize={isMobile ? 18 : 20}
            p={2}
            mb={isMobile ? 20 : 5}
          >
            ÖVERVIKTSMOTTAGNING
          </Text>

          <Flex flexDir="column">
            <Text
              color="#000"
              fontWeight="extrabold"
              fontSize={isMobile ? 35 : 65}
              textDecor={isMobile ? "none" : "underline"}
              mb={5}
              textAlign="center"
            >
              Proaktiv Hälsa
            </Text>

            <Text fontSize={isMobile ? 18 : 20} textAlign="center" ml={5}>
              BLI AV MED DIN ÖVERVIKT UTAN OPERATION...{"  "}
              <span
                style={{ fontWeight: "bold", cursor: "pointer" }}
                onClick={() => {
                  router.push("/tjanster");
                }}
              >
                LÄS MER
              </span>
            </Text>
          </Flex>
        </Flex>
      </Flex>

      <Flex flexDir="column" alignItems="center" mb={isMobile ? 0 : 20}>
        <Text fontWeight={600} fontSize={20} color="#000" mb={5}>
          TIDIGARE BEHANDLINGAR
        </Text>
        <Text
          fontWeight={800}
          fontSize={isMobile ? 35 : 40}
          color="#000"
          mb={5}
          textAlign="center"
        >
          Vad säger våra patienter?
        </Text>
        <Text
          fontSize={20}
          color={COLORS.gray}
          w={isMobile ? "95%" : "55%"}
          textAlign="center"
          mb={20}
        >
          När du överväger att anförtro dig till oss så får du komma i kontakt
          med våra tidigare patienter som de facto gått igenom den behandling vi
          erbjuder.
        </Text>

        <Flex
          flexDir={isMobile ? "column" : "row"}
          w={isMobile ? "100%" : "90%"}
          alignItems="center"
          justifyContent="space-between"
          mb={20}
        >
          {clientsReviews.map((item, idx) => (
            <Flex key={idx} flexDir={"column"} alignItems="center">
              <Flex
                w={isMobile ? "90%" : "400px"}
                h={isMobile ? "auto" : 200}
                alignItems="center"
                justifyContent="center"
                bgColor="#000"
                color="#fff"
                fontSize={20}
                p={10}
                borderRadius={10}
                textAlign="center"
                mb={isMobile ? 0 : 5}
              >
                {item.review}
              </Flex>

              <Flex
                flexDir={"column"}
                alignItems="center"
                mb={isMobile ? 20 : 0}
              >
                <Image
                  alt="Proaktiv Halsa"
                  src={require("../assets/logo.png")}
                  width={isMobile ? 80 : 100}
                  style={{ marginBottom: 20 }}
                />
                <Text color="#000" fontSize={23} fontWeight={600}>
                  {item.name}
                </Text>
                <Text color={COLORS.gray} fontSize={isMobile ? 18 : 20}>
                  {item.result}
                </Text>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Flex>

      <HormonsFields />

      <Footer />
    </Flex>
  );
}
