import { COLORS } from "@/helpers/colors";
import { navItems } from "@/helpers/staticInfo/navbarData";
import { Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { ClickAwayListener, useMediaQuery } from "@material-ui/core";
import { MyHamburgerMenu } from "./landing-page/MyHamburgerMenu";

export const Navbar = () => {
  const router = useRouter();
  const isMobile = useMediaQuery("(max-width:1400px)");
  const [seletedNavItem, setSelectedNavItem] = useState<number | undefined>();
  const [openNavItems, setOpenNavItems] = useState(false);

  return (
    <Flex
      pos="fixed"
      flexDir={isMobile ? "column" : "row"}
      alignItems={isMobile ? "" : "center"}
      justifyContent={isMobile ? "center" : "space-between"}
      bgColor={COLORS.pink}
      w="100%"
      pl={isMobile ? 0 : "5%"}
      pr={isMobile ? 0 : "5%"}
      minH={isMobile ? "80px" : ""}
      h={isMobile ? "auto" : "100px"}
      zIndex={100}
      boxShadow="dark-lg"
    >
      <Flex
        flexDir="row"
        alignItems="center"
        cursor="pointer"
        mt={openNavItems ? 5 : 0}
        mb={openNavItems ? 5 : 0}
      >
        <Image
          alt="Proaktiv Halsa"
          src={require("../assets/logo.png")}
          width={isMobile ? 70 : 100}
        />
        <Text
          fontSize={isMobile ? 25 : 35}
          fontWeight={"600"}
          color="#000"
          onClick={() => {
            router.push("/");
          }}
        >
          Proaktiv Hälsa
        </Text>

        {isMobile && (
          <Image
            alt={"humberger-menu"}
            src={require("../assets/hum-menu.png")}
            style={{
              width: 40,
              cursor: "pointer",
              position: "absolute",
              right: 15,
            }}
            onClick={() => {
              setOpenNavItems(!openNavItems);
            }}
          />
        )}
      </Flex>

      {isMobile && openNavItems && (
        <ClickAwayListener
          onClickAway={() => {
            setSelectedNavItem(undefined);
          }}
        >
          <Flex flexDir="column" alignItems="center">
            {navItems.map((item, idx) => (
              <Flex flexDir="column" key={idx} mb={5} alignItems="center">
                <Flex
                  flexDir="row"
                  cursor="pointer"
                  onClick={() => {
                    setSelectedNavItem((p) => (p === idx ? undefined : idx));
                  }}
                  mb={3}
                >
                  <Text
                    color="#000"
                    fontWeight="500"
                    fontSize={23}
                    textDecor={seletedNavItem === idx ? "underline" : "none"}
                  >
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
                    key={idx}
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
                        key={idx}
                        color="#000"
                        cursor="pointer"
                        p={5}
                        onClick={() => {
                          router.push(subItem.route);
                        }}
                        _hover={{ bgColor: "#c7c5c5" }}
                      >
                        {subItem.name}
                      </Text>
                    ))}
                  </Flex>
                )}
              </Flex>
            ))}
          </Flex>
        </ClickAwayListener>
      )}

      {!isMobile && (
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
                    <Text
                      color="#000"
                      fontWeight="500"
                      textDecor={seletedNavItem === idx ? "underline" : "none"}
                    >
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
                      key={idx}
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
                          key={idx}
                          color="#000"
                          cursor="pointer"
                          p={5}
                          onClick={() => {
                            router.push(subItem.route);
                          }}
                          _hover={{ bgColor: "#c7c5c5" }}
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
              onClick={() => {
                router.push("/book-consultation");
              }}
            >
              BOKA KONSULTATION
            </Button>
          </Flex>
        </ClickAwayListener>
      )}
    </Flex>
  );
};
