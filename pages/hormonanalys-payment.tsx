import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { PaymentComponent } from "@/components/PaymentComponent";
import { COLORS } from "@/helpers/colors";
import { Flex, Text } from "@chakra-ui/react";
import { useMediaQuery } from "@material-ui/core";
import Image from "next/image";

const HormonanalysPayment = () => {
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
            Du kommer till oss fastande och vi tar blodprover med fasta
            intervaller under hela förmiddagen.
          </Text>

          <Text mb={10}>
            Proverna analyseras via Unilabs och svaren tar ca en vecka att få
            åter in i våra journalsystem.
          </Text>

          <Text mb={10}>I priset ingår provtagning och läkarkonsultation.</Text>

          <Text mb={5} as="li">
            Insulinkurvor.
          </Text>

          <Text mb={5} as="li">
            Underlag för överviktsbehandling.
          </Text>

          <Text mb={5} as="li">
            Vår läkare går igenom svaren med dig.
          </Text>
        </Flex>

        <PaymentComponent type="hormonanalys" />
      </Flex>

      <Footer />
    </Flex>
  );
};

export default HormonanalysPayment;
