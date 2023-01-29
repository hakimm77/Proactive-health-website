import { COLORS } from "@/helpers/colors";
import {
  Button,
  Checkbox,
  Flex,
  Input,
  Link,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useMediaQuery } from "@material-ui/core";
import Image from "next/image";
import { useState } from "react";

export const HormonsFields = ({ fieldsOnly }: { fieldsOnly?: boolean }) => {
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
    {
      placeholder: "Ämne",
      value: "",
    },
    {
      placeholder: "Meddelande",
      value: "",
      full: true,
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
    <Flex
      flexDir={isMobile ? "column" : "row"}
      w={isMobile ? "100%" : "90%"}
      justifyContent="space-between"
      alignItems={isMobile ? "center" : ""}
      mb={20}
    >
      <Flex
        flexDir="column"
        w={isMobile ? "90%" : fieldsOnly ? "100%" : "40%"}
        mb={isMobile ? 20 : 0}
      >
        {!fieldsOnly && (
          <>
            <Text color="#000" fontWeight={600} fontSize={16} mb={3}>
              Boka en tid för provtagning
            </Text>
            <Text color="#000" fontWeight={600} fontSize={40} mb={10}>
              Hormonanalys
            </Text>

            <Text color={COLORS.gray} fontSize={16} mb={5}>
              En hormonanalys tar en förmiddag, du kommer fastande och vi tar
              prover mellan kl. 8-12, svaren tar 1 vecka att få tillbaka från
              labb och då får du en tid hos vår läkare som går igenom svaren med
              dig.{" "}
            </Text>
            <Text color={COLORS.gray} fontSize={16} mb={10}>
              Betalning via{" "}
              <span style={{ color: "#000", cursor: "pointer" }}>
                QR-kod i swish
              </span>{" "}
              innan du hör av dig så återkommer vi inom 24 timmar och bokar en
              dag som passar dig.{" "}
            </Text>
          </>
        )}

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

      {!fieldsOnly && (
        <Flex flexDir="column" w={isMobile ? "95%" : "50%"}>
          <Image
            alt={"main-image"}
            src={require("../../assets/header-image.jpg")}
            style={{ objectFit: "contain" }}
          />
          <Flex bgColor="#000" p={5} flexDir="column">
            <Text color="#fff" fontSize={21}>
              BLI AV MED DIN ÖVERVIKT
            </Text>
            <Text color="#fff" fontSize={25} fontWeight={600}>
              Vi garanterar återgång till normal vikt!
            </Text>
          </Flex>
        </Flex>
      )}
    </Flex>
  );
};
