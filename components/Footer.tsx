import { COLORS } from "@/helpers/colors";
import { Flex, Text } from "@chakra-ui/react";
import {
  businessData,
  newsData,
  socialMediaData,
} from "../helpers/staticInfo/footerData";
import Image from "next/image";
import { useMediaQuery } from "@material-ui/core";
import { LanguageSwitch } from "./LanguageSwitch";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const isMobile = useMediaQuery("(max-width:1400px)");

  return (
    <Flex
      flexDir="column"
      w="100%"
      bgColor={COLORS.blue}
      alignItems="center"
      p={isMobile ? 5 : 20}
    >
      <Flex
        w="90%"
        flexDir={isMobile ? "column" : "row"}
        justifyContent="space-between"
        mb={20}
      >
        <Flex flexDir="column" mb={isMobile ? 10 : 0}>
          <Text
            color="#fff"
            fontSize={20}
            fontWeight={600}
            mb={isMobile ? 5 : 10}
          >
            HITTA TILL OSS
          </Text>
          {!isMobile && (
            <Text fontSize={18} color="#fff" mb={5}>
              Hitta till våra mottagning
            </Text>
          )}

          {socialMediaData.map((item, idx) => (
            <Flex
              key={idx}
              flexDir="row"
              alignItems="center"
              mb={3}
              cursor="pointer"
            >
              <Flex bgColor="#6d7a8c" borderRadius="100%">
                <Image
                  alt={"social-media"}
                  src={require(`../assets/social-media/${item.icon}`)}
                  style={{
                    width: 45,
                    height: 45,
                    padding: 10,
                    objectFit: "contain",
                  }}
                />
              </Flex>

              <Text
                fontSize={18}
                color="#fff"
                ml={5}
                _hover={{ color: COLORS.gray }}
              >
                {item.name}
              </Text>
            </Flex>
          ))}
        </Flex>

        <Flex flexDir="column" mb={isMobile ? 10 : 0}>
          <Text
            color="#fff"
            fontSize={20}
            fontWeight={600}
            mb={isMobile ? 5 : 10}
          >
            FÖRETAG
          </Text>

          {businessData.map((item, idx) => (
            <Flex
              key={idx}
              flexDir="row"
              alignItems="center"
              mb={5}
              cursor="pointer"
            >
              <Image
                alt={"side-arrow"}
                src={require(`../assets/arrow-down-white-icon.png`)}
                style={{
                  width: 15,
                  height: 15,
                  transform: "rotate(-90deg)",
                }}
              />

              <Text
                fontSize={18}
                color="#fff"
                ml={5}
                _hover={{ color: COLORS.gray }}
              >
                {item.name}
              </Text>
            </Flex>
          ))}
        </Flex>

        <Flex flexDir="column" mb={isMobile ? 10 : 0}>
          <Text
            color="#fff"
            fontSize={20}
            fontWeight={600}
            mb={isMobile ? 5 : 10}
          >
            SENASTE NYTT
          </Text>

          {newsData.map((item, idx) => (
            <Flex
              key={idx}
              flexDir="row"
              alignItems="center"
              mb={5}
              cursor="pointer"
            >
              <Image
                alt={item.icon.replace(".jpg", "")}
                src={require(`../assets/${item.icon}`)}
                style={{
                  width: 80,
                  height: 80,
                  objectFit: "contain",
                }}
              />

              <Text
                fontSize={18}
                color="#fff"
                ml={5}
                _hover={{ color: COLORS.gray }}
              >
                {item.name}
              </Text>
            </Flex>
          ))}
        </Flex>

        <Flex flexDir="column" mb={isMobile ? 10 : 0}>
          <Text
            color="#fff"
            fontSize={20}
            fontWeight={600}
            mb={isMobile ? 5 : 10}
          >
            ÖPPETTIDER
          </Text>

          <Flex flexDir="row" alignItems="center">
            <Text fontSize={18} color="#fff" mr={10}>
              Mån - Fre
            </Text>
            <Text fontSize={18} color="#fff">
              08:00 - 16:00
            </Text>
          </Flex>
        </Flex>
      </Flex>

      <Text
        mb={isMobile ? 0 : -10}
        color="#fff"
        fontSize={14}
        textAlign="center"
      >
        © {currentYear} Proaktiv Hälsa Sverige AB - Alla rättigheter reserverade
      </Text>
    </Flex>
  );
};
