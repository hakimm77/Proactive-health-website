import { COLORS } from "@/helpers/colors";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Button,
  Flex,
} from "@chakra-ui/react";
import { useMediaQuery } from "@material-ui/core";
import { setCookie } from "cookies-next";
import Image from "next/image";

export const PopupModal = ({
  isOpen,
  handleCloseModal,
  router,
}: {
  handleCloseModal: () => void;
  isOpen: boolean;
  router: any;
}) => {
  const isMobile = useMediaQuery("(max-width:1400px)");

  const storePopupData = () => {
    setCookie("popup", "clicked");
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        handleCloseModal();
        storePopupData();
      }}
      closeOnOverlayClick={false}
    >
      <ModalOverlay />
      <ModalContent backgroundColor={COLORS.pink} minW="40%">
        <ModalHeader>Nyhetsbrev</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Image
            src={require("../../assets/analysis-image.jpg")}
            alt={"analysis-image"}
            style={{
              width: isMobile ? "95%" : "80%",
              objectFit: "contain",
              alignSelf: "center",
              marginBottom: 20,
              marginTop: 20,
            }}
          />
          <Text fontSize={20}>
            Sätt dig i kretsen och ta del av våra senaste uppdateringar och
            erbjudanden! Registrera dig för vårt nyhetsbrev och missa aldrig en
            grej. Klicka här för att prenumerera nu.
          </Text>
        </ModalBody>

        <ModalFooter>
          <Button
            bgColor="#1D1D1D"
            color="#fff"
            mr={3}
            _hover={{ bgColor: "gray" }}
            onClick={() => {
              router.push("/media/nyhetsbrev");
              storePopupData();
            }}
          >
            Nyhetsbrevssida
          </Button>
          <Button
            variant="ghost"
            onClick={() => {
              handleCloseModal();
              storePopupData();
            }}
          >
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
