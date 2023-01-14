import { COLORS } from "@/helpers/colors";
import { navItems } from "@/helpers/staticInfo/navbarData";
import { Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { ClickAwayListener, useMediaQuery } from "@material-ui/core";

export const Navbar = () => {
  const router = useRouter();
  const [seletedNavItem, setSelectedNavItem] = useState<number | undefined>();

  return (
    <Flex
      pos="fixed"
      flexDir="row"
      alignItems="center"
      justifyContent="space-between"
      bgColor={COLORS.pink}
      w="100%"
      pl={"5%"}
      pr={"5%"}
      h={"100px"}
      zIndex={100}
      boxShadow="dark-lg"
    >
      <Flex
        flexDir="row"
        alignItems="center"
        cursor="pointer"
        onClick={() => {
          router.push("/");
        }}
      >
        <Image
          alt="Proaktiv Halsa"
          src={require("../assets/logo.png")}
          width={120}
        />
        <Text fontSize={35} fontWeight={"600"} color="#000">
          Proaktiv Hälsa
        </Text>
      </Flex>

      <ClickAwayListener
        onClickAway={() => {
          setSelectedNavItem(undefined);
        }}
      >
        <Flex
          flexDir="row"
          alignItems="center"
          justifyContent="space-between"
          w="55%"
        >
          <Flex
            flexDir="row"
            alignItems="center"
            justifyContent="space-around"
            w="65%"
          >
            {navItems.map((item, idx) => (
              <Flex flexDir="column" key={idx}>
                <Flex
                  flexDir="row"
                  cursor="pointer"
                  onClick={() => {
                    setSelectedNavItem((p) => (p === idx ? undefined : idx));
                  }}
                >
                  <Text color="#000" fontWeight="500">
                    {item.name}
                  </Text>
                  <Image
                    alt={"arrow-down"}
                    src={require("../assets/arrow-down.png")}
                    width={20}
                  />
                </Flex>

                {seletedNavItem === idx && (
                  <Flex
                    pos="absolute"
                    flexDir="column"
                    minW="200px"
                    top={"100px"}
                    bgColor={COLORS.pink}
                    borderTopWidth={3}
                    borderTopColor="#000"
                    boxShadow="dark-lg"
                  >
                    {item.routes.map((subItem, idx) => (
                      <Text
                        color="#000"
                        cursor="pointer"
                        m={5}
                        onClick={() => {
                          router.push(subItem.route);
                        }}
                      >
                        {subItem.name}
                      </Text>
                    ))}
                  </Flex>
                )}
              </Flex>
            ))}
          </Flex>

          <Button
            h={50}
            bgColor={COLORS.pink}
            borderRadius={100}
            border="1.5px solid #000"
            color="#000"
            _hover={{ backgroundColor: "#000", color: "#fff" }}
          >
            BOKA KONSULTATION
          </Button>
        </Flex>
      </ClickAwayListener>
    </Flex>
  );
};
