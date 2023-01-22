import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Flex } from "@chakra-ui/react";

const StaffPage = () => {
  return (
    <Flex flexDir="column">
      <Navbar />
      <Footer />
    </Flex>
  );
};

export default StaffPage;
