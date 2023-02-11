import { Flex, Text } from "@chakra-ui/react";
import { useMediaQuery } from "@material-ui/core";
import Image from "next/image";

export const PaymentComponent = ({
  type,
  imageType,
}: {
  type: string;
  imageType?: string;
}) => {
  const isMobile = useMediaQuery("(max-width:1400px)");

  return (
    <Image
      src={require(`../assets/${type}-swish-payment.${imageType ?? "png"}`)}
      alt={type}
      style={{
        width: isMobile ? "95%" : "35%",
        objectFit: "contain",
        alignSelf: isMobile ? "center" : "",
        borderRadius: 10,
      }}
    />
  );
};
