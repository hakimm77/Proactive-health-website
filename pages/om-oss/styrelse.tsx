import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { COLORS } from "@/helpers/colors";
import { Flex, Text } from "@chakra-ui/react";
import { useMediaQuery } from "@material-ui/core";
import Image from "next/image";

const BoardPage = () => {
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
            Styrelsen{" "}
          </Text>

          <Text mb={10}>Vår vision är att arbeta tillsammans under temat:</Text>

          <Text fontWeight={600}>Varför?</Text>
          <Text mb={10}>
            Vi gör detta för att vi är övertygade om att den här processen är
            den minsta gemensamma nämnaren som ger en friskare befolkning,
            mindre belastning på sjukvården och erbjuder våra patienter ett
            friskare och lyckligare liv.
          </Text>

          <Text mb={10}>
            Att kunna hjälpa människor som lider av sin övervikt fysiskt,
            psykiskt och blir negativt särbehandlade i samhället är ett
            privilegium. Vi följer dig på hela resan före, under och efter
            behandlingen.
          </Text>

          <Text mb={10}>
            Vi har{" "}
            <span style={{ color: "#000", cursor: "pointer" }}>
              pro bono verksamhet
            </span>{" "}
            som finansieras av våra patienter, när du väljer att hjälpa dig
            själv så hjälper du även någon som inte har finansiella resurser,
            för var 10:de patient så hjälper vi en patient som kanske är
            ensamstående, arbetslös och inte har en gällande försäkring från
            försäkringskassan, beroende av socialbidrag att få hjälp att bli
            frisk.
          </Text>

          <Text mb={10}>
            Vi tror på det goda hos människan och vi vill verka för ett friskare
            samhälle. Vi gör större nytta genom att driva egen verksamhet och
            visa sjukvården vägen, gå före istället för att slåss inne i
            systemet som styrs av politiker och byråkrater under ekonomiskt
            oklara premisser.{" "}
          </Text>

          <Text fontWeight={600}>Hur?</Text>
          <Text mb={10}>
            Genom att vår verksamhet enbart arbetar med övervikt och det som är
            relaterat till detta och vi inte arbetar inom ramen för offentlig
            finansierad våd kan vi verka disruptivt och vara progressiva i vår
            verksamhet.
          </Text>

          <Text mb={10}>
            Vi individanpassar medicinsk behandling utifrån{" "}
            <span style={{ color: "#000", cursor: "pointer" }}>
              hormonanalyser
            </span>
            .
          </Text>

          <Text fontWeight={600}>Vad?</Text>
          <Text mb={10}>
            Vi erbjuder överviktsbehandlingar privat som den offentliga
            sjukvården inte kan erbjuda. Vår verksamhet bygger på vetenskap och
            beprövad erfarenhet. Vi garanterar att du går ner i vikt utan
            operation, utan diet och utan motion.
          </Text>

          <Text mb={10}>
            Michel Tagliati är läkare, utbildad vid Karolinska Institutet och
            har 20 år klinisk erfarenhet.
          </Text>

          <Text mb={10}>
            Björn Söderberg har en lång internationell erfarenhet av
            affärsutveckling och innovation inom flera medicinska områden.
          </Text>

          <Text mb={5} as="li">
            <span style={{ color: "#000", cursor: "pointer" }}>
              Michel Tagliati
            </span>
            , MD, CEO Grundare, Styrelseordförande{" "}
          </Text>
          <Text mb={5} as="li">
            <span style={{ color: "#000", cursor: "pointer" }}>
              Björn Söderberg
            </span>
            , COO Delägare, Styrelseledarmot
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

export default BoardPage;
