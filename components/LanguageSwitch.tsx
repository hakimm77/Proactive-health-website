import { COLORS } from "@/helpers/colors";
import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { getCookie, setCookie } from "cookies-next";
import { useRouter } from "next/router";
import { useState } from "react";

export const LanguageSwitch = () => {
  const router = useRouter();
  const [currentLanguage, setCurrentLanguage] = useState<any>(
    getCookie("current-lang")
  );

  const switchLanguage = async (lang: string) => {
    setCookie("current-lang", lang);
    setCurrentLanguage(lang);

    router.reload();
  };

  return (
    <Flex pos="absolute" right={5}>
      <Menu>
        <MenuButton
          as={Button}
          bgColor={COLORS.pink}
          border="1.5px solid #000"
          color="#000"
          _hover={{ bgColor: "gray" }}
        >
          {currentLanguage === "en" ? "🇬🇧" : "🇸🇪"}
        </MenuButton>

        <MenuList bgColor={COLORS.pink} boxShadow="dark-lg">
          <MenuItem
            bgColor={COLORS.pink}
            mb={3}
            _hover={{ bgColor: "gray" }}
            onClick={() => {
              switchLanguage("sv");
            }}
          >
            🇸🇪 Swedish
          </MenuItem>
          <MenuItem
            bgColor={COLORS.pink}
            _hover={{ bgColor: "gray" }}
            onClick={() => {
              switchLanguage("en");
            }}
          >
            🇬🇧 English
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};
