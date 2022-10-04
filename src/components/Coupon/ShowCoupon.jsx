import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
  Flex,
  Badge,
  Kbd,
  Stack,
} from "@chakra-ui/react";

export const ShowCoupon = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Text onClick={onOpen}>Coupon</Text>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Apply Coupon</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex justifyContent={"space-around"} alignItem={"center"} my={'5'}>
              <Text>COUPON</Text>
              <Text>DISCOUNT</Text>
            </Flex>
            <Stack textAlign={"center"} lineHeight={"2rem"}>
              <Flex justifyContent={"space-around"} alignItem={"center"}>
                <Badge colorScheme="green" textTransform={"lowercase"}>
                  family5
                </Badge>
                <Kbd>5% off</Kbd>
              </Flex>
              <Flex justifyContent={"space-around"} alignItem={"center"}>
                <Badge colorScheme="green" textTransform={"lowercase"}>
                  family10
                </Badge>{" "}
                <Kbd>10% off</Kbd>
              </Flex>
              <Flex justifyContent={"space-around"} alignItem={"center"}>
                <Badge colorScheme="green" textTransform={"lowercase"}>
                  family15
                </Badge>{" "}
                <Kbd>15% off</Kbd>
              </Flex>
              <Flex justifyContent={"space-around"} alignItem={"center"}>
                <Badge colorScheme="green" textTransform={"lowercase"}>
                  family20
                </Badge>{" "}
                <Kbd>20% off</Kbd>
              </Flex>
              <Flex justifyContent={"space-around"} alignItem={"center"}>
                <Badge colorScheme="green" textTransform={"lowercase"}>
                  family25
                </Badge>{" "}
                <Kbd>25% off</Kbd>
              </Flex>
              <Flex justifyContent={"space-around"} alignItem={"center"}>
                <Badge colorScheme="green" textTransform={"lowercase"}>
                  family30
                </Badge>{" "}
                <Kbd>30% off</Kbd>
              </Flex>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button
              mr={3}
              my={"4"}
              bg="black"
              color="whitesmoke"
              p="1.5rem 2rem"
              border={"1px solid beige"}
              _hover={{
                background: "none",
                color: "teal",
                border: "1px solid black",
              }}
              onClick={onClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
