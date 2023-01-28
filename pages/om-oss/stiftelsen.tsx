import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { COLORS } from "@/helpers/colors";
import { Flex, Text } from "@chakra-ui/react";
import { useMediaQuery } from "@material-ui/core";
import Image from "next/image";

const FoundationPage = () => {
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
            Stiftelsen
          </Text>

          <Text mb={10}>
            Eftersom vi har en privat finansierad verksamhet som är
            vinstdrivande sätter vi av en del av avkastningen i stiftelsen
            Proaktiv Hälsa i syfte att bistå med behandlingar till personer som
            inte har ekonomi för detta.
          </Text>

          <Text mb={10}>
            Var 10:de patient som vi behandlar tar vi in från en väntelista där
            personer utan inkomst och utan anställning får hjälp kostnadsfritt,
            vi känner ett socialt ansvar.
          </Text>

          <Text mb={10}>
            Vi är politiskt oberoende, men den offentliga vården och
            myndigheterna i Sverige fungerar mycket dåligt och vi vill därför ta
            ansvar i vad vi gör istället för att klaga så går vi före och visar
            vägen. Våra anställda har ett krav på sig att göra pro bono arbete
            regelbundet och redovisa sina insatser och dokumentera dessa i
            verksamheten.
          </Text>

          <Text mb={10}>
            Har man förmågan så har man också ansvaret. Vi håller på att sätta
            upp Stiftelsen formellt under 2022-2023 juridiskt och formellt men
            arbetar redan enligt dessa principer.
          </Text>

          <Text mb={10}>
            På sikt kommer vi att kunna erbjuda våra patienter och personal att
            söka stipendier och finansiera forskning och stötta och bidra i
            samhället i större utsträckning när verksamheten växer.
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

export default FoundationPage;
