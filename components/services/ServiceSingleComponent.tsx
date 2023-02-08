import { COLORS } from "@/helpers/colors";
import { Flex, Text } from "@chakra-ui/react";
import { useMediaQuery } from "@material-ui/core";
import Image from "next/image";
import { useRouter } from "next/router";

const ServiceSingleComponent = ({ service }: { service: any }) => {
  const router = useRouter();
  const isMobile = useMediaQuery("(max-width:1400px)");

  return (
    <Flex flexDir="column" w={isMobile ? "95%" : "32%"} mb={isMobile ? 10 : 0}>
      <Image
        src={require("../../assets/header-image.jpg")}
        alt={"header-image"}
        style={{
          width: "100%",
          objectFit: "contain",
          borderRadius: 10,
          marginBottom: 10,
        }}
      />

      <Flex flexDir="column" pl={3} alignItems="flex-start">
        <Text color={"#a0a9b6"} fontSize={isMobile ? 12 : 14} fontWeight="500">
          {service.topText}
        </Text>

        <Text
          color={"#28303f"}
          fontSize={isMobile ? 20 : 25}
          fontWeight="600"
          mb={3}
          cursor="pointer"
          _hover={{ color: "#000" }}
          onClick={() => {
            router.push(service.link);
          }}
        >
          {service.title}
        </Text>

        <Text color={COLORS.gray} fontSize={isMobile ? 14 : 16} w="90%" mb={3}>
          {service.description}
        </Text>

        <Text
          color={COLORS.gray}
          fontSize={isMobile ? 14 : 16}
          fontWeight="600"
          mb={isMobile ? 5 : 10}
        >
          {`Pris: ${service.price}`}
        </Text>

        <Flex
          flexDir="row"
          alignItems="center"
          cursor="pointer"
          onClick={() => {
            router.push(service.link);
          }}
        >
          <Text
            color={"#000"}
            fontSize={isMobile ? 16 : 18}
            fontWeight="600"
            mb={3}
          >
            LÄS MER
          </Text>

          <Image
            alt="arrow"
            src={require("../../assets/arrow-down.png")}
            style={{
              width: 25,
              transform: "rotate(-90deg)",
              marginTop: -8,
              marginLeft: 5,
            }}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ServiceSingleComponent;
