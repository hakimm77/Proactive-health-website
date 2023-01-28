import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { COLORS } from "@/helpers/colors";
import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

const StaffPage = () => {
  return (
    <Flex flexDir="column" alignItems="center" bgColor={COLORS.pink}>
      <Navbar />

      <Flex
        mt={"100px"}
        flexDir="row"
        w="90%"
        justifyContent="space-around"
        alignItems="flex-start"
        paddingTop={20}
        paddingBottom={20}
      >
        <Flex
          flexDir="column"
          color={COLORS.gray}
          fontSize={19}
          w="40%"
          lineHeight={"1.5"}
        >
          <Text color="#130947" fontSize={30} fontWeight={600} mb={10}>
            Michel Tagliati, MD CEO
          </Text>

          <Text mb={10}>Välkommen, </Text>

          <Text mb={5}>
            En av mina döttrar drabbades av typ 1 diabetes vid 5 års ålder för 6
            år sedan och avled nästan av en diabetesketoacidos under en
            utlandsvistelse. Det föranledde att jag de sedan dess läst mycket
            och observerat över 500 000 blodsockervärden och olika inverkan som
            miljöfaktorer har på insulin och glukosmetabolism.{" "}
          </Text>

          <Text mb={5}>
            I detta insåg jag att det går att göra så oerhört mycket mer nytta
            för människors hälsa proaktivt än reaktivt. Jag har valt ut den
            process som jag ser gör störst nytta för befolkningen och arbetar nu
            inte bara för en patient i taget utan för ett regimskifte där vi får
            proaktiv hälsa istället för sjuk vård.
          </Text>

          <Text mb={5}>
            I andra länder heter det healthcare, i Sverige heter det sjukvård.
          </Text>

          <Text mb={5}>Därför startade jag Proaktiv Hälsa. </Text>

          <Text mb={5}>
            Under 2021 hjälpte vi 3 personer att gå ner 130 kilo på 12 månader.
            Två kvinnor fick sitt liv tillbaka, en man kunde återgå till
            arbetslivet full av energi trots att det inte var så många år till
            pensionen. Det var en otrolig känsla!
          </Text>

          <Text mb={5}>
            Under 2022 så startar vi en kommersiell tillgänglighet för detta
            upplägg för dig som är storvuxen och behöver få hjälp med att bli av
            med dina kilon och få en normal vikt utan operation.
          </Text>

          <Text mb={5}>Välkomna till oss!</Text>

          <Text mb={10}>Michel Tagliati, MD CEO</Text>

          <Text mb={5} as="li">
            Vi arbetar bara med överviktsbehandling
          </Text>
          <Text mb={5} as="li">
            Vi har mottagning i Stockholm.
          </Text>
          <Text mb={5} as="li">
            Vi är privata, obereoende inte riskkapitalfinansierade och politiskt
            obunden verksamhet som arbetar individbaserat.
          </Text>
          <Text mb={5} as="li">
            Vi har en pro bono verksamhet för att ge något tillbaka till de som
            av olika orsaker inte har egna ekonomiska resurser.
          </Text>
        </Flex>

        <Image
          src={require("../../assets/founder-image.png")}
          alt="Michel Tagliati"
          style={{ width: "35%", objectFit: "contain" }}
        />
      </Flex>

      <Footer />
    </Flex>
  );
};

export default StaffPage;
