import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { COLORS } from "@/helpers/colors";
import { Flex, Text, Textarea, Link, Button } from "@chakra-ui/react";
import { useMediaQuery } from "@material-ui/core";
import Image from "next/image";
import { useState } from "react";

const NewsLetterPage = () => {
  const [acceptedRules, setAcceptedRules] = useState(false);
  const isMobile = useMediaQuery("(max-width:1400px)");
  const [inputFields, setInputFields] = useState<any[]>([
    {
      placeholder: "Ditt namn*",
      value: "",
    },
    {
      placeholder: "Mobilnummer",
      value: "",
    },
    {
      placeholder: "E-post*",
      value: "",
    },
  ]);

  const updateValue = async (idx: number, text: string) => {
    let inputs = [...inputFields];
    inputs[idx].value = text;

    setInputFields(inputs);
  };

  const sendData = () => {
    if (acceptedRules && inputFields[0].value && inputFields[2].value) {
      //send
      console.log("sent");
    }
  };

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
            Nyhetsbrev
          </Text>

          <Text mb={10}>
            Om du vill vara med på vårt nyhetsbrev eller få del av erbjudanden,
            fyll i dina uppgifter här nedan!{" "}
          </Text>

          <Flex flexDir="column">
            <Flex
              flexDir="row"
              flexWrap="wrap"
              justifyContent="space-between"
              mb={5}
            >
              {inputFields.map((item, idx) => (
                <Textarea
                  as={item.full ? "textarea" : "input"}
                  bgColor="#fff"
                  placeholder={item.placeholder}
                  value={item.value}
                  onChange={(e) => {
                    updateValue(idx, e.target.value);
                  }}
                  mb={3}
                  w={item.full ? "100%" : "48%"}
                  minH={item.full ? 100 : 50}
                  resize={item.full ? "vertical" : "none"}
                />
              ))}
            </Flex>

            <Flex flexDir="row" alignItems="flex-start" mb={5}>
              <input
                type="checkbox"
                style={{ margin: 10, width: 30, height: 30, cursor: "pointer" }}
                onChange={(e) => {
                  setAcceptedRules(e.target.checked);
                }}
              />

              <Text>
                Genom kryssa i så samtycker du aktivt till våra{" "}
                <Link color="#2596be">villkor för service</Link> och{" "}
                <Link color="#2596be">integritet</Link> på den här websajten.
              </Text>
            </Flex>

            <Button
              w="100px"
              bgColor="#000"
              color="#fff"
              fontWeight={400}
              fontSize={20}
              _hover={{ bgColor: "gray" }}
              onClick={sendData}
            >
              SÄND
            </Button>
          </Flex>
        </Flex>

        <Image
          src={require("../../assets/analysis-image.jpg")}
          alt={"analysis-image"}
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

export default NewsLetterPage;
