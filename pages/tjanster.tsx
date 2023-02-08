import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import ServiceSingleComponent from "@/components/services/ServiceSingleComponent";
import { COLORS } from "@/helpers/colors";
import { servicesData } from "@/helpers/staticInfo/servicesData";
import { Flex, Text } from "@chakra-ui/react";
import { useMediaQuery } from "@material-ui/core";

const ServicesPage = () => {
  const isMobile = useMediaQuery("(max-width:1400px)");

  return (
    <Flex flexDir="column" alignItems="center" bgColor={COLORS.pink}>
      <Navbar />

      <Flex
        mt={"100px"}
        flexDir={"column"}
        w={isMobile ? "100%" : "80%"}
        justifyContent="space-around"
        alignItems={isMobile ? "flex-start" : "center"}
        paddingTop={20}
        paddingBottom={20}
        color={COLORS.gray}
        fontSize={isMobile ? 17 : 19}
        pl={isMobile ? 5 : 0}
      >
        <Text
          color="#000"
          fontSize={isMobile ? 30 : 40}
          fontWeight={600}
          mb={10}
        >
          Så här arbetar vi
        </Text>

        <Text mb={10}>
          Vi kartlägger din basala hälsa med allmän provtagning inför en
          hormonanalys hos våra sjuksköterskor.Därefter får du en tid med vår
          läkare som går igenom resultaten och undersöker samt tar en omfattande
          sjukhistoria med dig. Du får i n t e några kostråd, eller råd om
          fysisk aktivitet. Vi vet redan att det inte fungerar.{" "}
        </Text>

        <Text mb={10} color="#000" alignSelf={"flex-start"}>
          Low-fat dietary pattern and weight change over 7 years: the Women's
          Health Initiative Dietary Modification Trial
        </Text>

        <Text mb={10}>
          Varje behandling anpassas på individbasis och om du inte går ner i
          vikt substantiellt redan inom 3 månader så har vi en
          pengarna-tillbaka-garanti, så säkra är vi på att vår behandling
          fungerar alla våra patienter har gått från BMI 35-40 ner till BMI
          20-25 inom 12 månaders behandling. Vi har inte någon gastric bypass
          kirurgi, vi opererar inte våra patienter.
        </Text>

        <Text mb={5} as="li" fontWeight="bold" alignSelf="flex-start">
          Det är inte ett kostproblem.
        </Text>
        <Text mb={5} as="li" fontWeight="bold" alignSelf="flex-start">
          Det är inte ett motionsproblem.
        </Text>
        <Text mb={20} as="li" fontWeight="bold" alignSelf="flex-start">
          Det är ett hormonproblem.
        </Text>

        <Flex
          flexDir={isMobile ? "column" : "row"}
          justifyContent="space-between"
          alignItems={isMobile ? "center" : ""}
          w={isMobile ? "100%" : "90%"}
        >
          {servicesData.map((service, idx) => (
            <ServiceSingleComponent key={idx} service={service} />
          ))}
        </Flex>
      </Flex>

      <Footer />
    </Flex>
  );
};

export default ServicesPage;
