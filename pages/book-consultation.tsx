import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { HormonsFields } from "@/components/landing-page/HormonsFields";
import { COLORS } from "@/helpers/colors";
import { Flex, Text } from "@chakra-ui/react";
import { useMediaQuery } from "@material-ui/core";
import Image from "next/image";

const BookConsulationPage = () => {
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
        <HormonsFields hormonsPage={true} />
      </Flex>

      <Footer />
    </Flex>
  );
};

export default BookConsulationPage;
