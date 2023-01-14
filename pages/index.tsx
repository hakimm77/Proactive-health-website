import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { COLORS } from "@/helpers/colors";
import { clientsReviews } from "@/helpers/staticInfo/clientsReviewsData";
import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

export default function LandingPage() {
  const router = useRouter();

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
          top={150}
          left={150}
        >
          <Text
            color="#fff"
            bgColor="#000"
            w="270px"
            fontWeight={500}
            fontSize={20}
            p={2}
            mb={5}
          >
            ÖVERVIKTSMOTTAGNING
          </Text>

          <Text
            color="#000"
            fontWeight="extrabold"
            fontSize={65}
            textDecor="underline"
            mb={5}
          >
            Proaktiv Hälsa
          </Text>

          <Text fontSize={20}>
            BLI AV MED DIN ÖVERVIKT UTAN OPERATION...{"  "}
            <span
              style={{ fontWeight: "bold", cursor: "pointer" }}
              onClick={() => {
                router.push("/");
              }}
            >
              LÄS MER
            </span>
          </Text>
        </Flex>
      </Flex>

      <Flex flexDir="column" alignItems="center">
        <Text fontWeight={600} fontSize={20} color="#000" mb={5}>
          TIDIGARE BEHANDLINGAR
        </Text>
        <Text fontWeight={800} fontSize={40} color="#000" mb={5}>
          Vad säger våra patienter?
        </Text>
        <Text
          fontSize={20}
          color={COLORS.gray}
          w="55%"
          textAlign="center"
          mb={20}
        >
          När du överväger att anförtro dig till oss så får du komma i kontakt
          med våra tidigare patienter som de facto gått igenom den behandling vi
          erbjuder.
        </Text>

        <Flex
          flexDir="row"
          w="90%"
          alignItems="center"
          justifyContent="space-between"
          mb={20}
        >
          {clientsReviews.map((item, idx) => (
            <Flex key={idx} flexDir="column" alignItems="center">
              <Flex
                w={"400px"}
                h={200}
                alignItems="center"
                justifyContent="center"
                bgColor="#000"
                color="#fff"
                fontSize={20}
                p={10}
                borderRadius={10}
                textAlign="center"
                mb={5}
              >
                {item.review}
              </Flex>
              <Image
                alt="Proaktiv Halsa"
                src={require("../assets/logo.png")}
                width={100}
                style={{ marginBottom: 20 }}
              />
              <Text color="#000" fontSize={23} fontWeight={600}>
                {item.name}
              </Text>
              <Text color={COLORS.gray} fontSize={20}>
                {item.result}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Flex>

      {/* <Flex
        pos="fixed"
        bottom={50}
        right={50}
        bgColor="#000"
        opacity={0.4}
        w={"80px"}
        h={"80px"}
        borderRadius={"100%"}
        justifyContent="center"
        alignItems="center"
        cursor="pointer"
        onClick={() => {
          if (typeof window !== "undefined") {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }
        }}
        _hover={{ opacity: 0.7 }}
      >
        <Image
          alt={"go-up"}
          src={require("../assets/arrow-down-white-icon.png")}
          style={{
            transform: "rotate(180deg)",
            width: 40,
            height: 40,
          }}
        />
      </Flex> */}

      <Footer />
    </Flex>
  );
}
