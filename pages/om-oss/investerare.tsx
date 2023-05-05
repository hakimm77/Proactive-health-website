import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { COLORS } from "@/helpers/colors";
import { Flex, Text } from "@chakra-ui/react";
import { useMediaQuery } from "@material-ui/core";
import { getCookie } from "cookies-next";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const InvestorPage = () => {
  const isMobile = useMediaQuery("(max-width:1400px)");
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState<any>(
    getCookie("current-lang")
  );

  useEffect(() => {
    i18n.changeLanguage(currentLanguage);
  }, []);

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
            {t("Investerare")}
          </Text>

          <Text mb={10}>
            {t(
              "Vi är ett startup som arbetar utanför den reglerade sjukvården, vi är inte finansierade av offentliga system utan helt beroende av våra egna intäkter."
            )}
          </Text>

          <Text mb={10}>
            {t(
              "Vi har haft proof-of-concept utveckling under 2020-2021 och kommersialiserade verksamheten 2022 och har sålt behandlingar framgångsrikt sedan februari."
            )}
          </Text>

          <Text mb={10}>
            {t(
              "Vi siktar på att sätta upp 10 kliniker totalt i Sverige, Skandinavien och EU de kommande 10 åren."
            )}
          </Text>

          <Text mb={10}>
            {t(
              "Det ger en kapacitet på 10 000 patienter/år per och där verksamheten är data driven och personalomsättning motverkas med akademisk fortbildning, pro bono verksamhet samt optionsprogram."
            )}
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

export default InvestorPage;
