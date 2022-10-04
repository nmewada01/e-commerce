import {
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  Input,
  VStack,
} from "@chakra-ui/react";

export const CheckoutForm = ({
  isLargerThan,
  FormSubmit,
  onChange,
}) => {
  return (
    <>
      <Box width={["95%", "90%", "50%", "50%"]}  m="auto" min-h="100vh">
        <form p="3rem" onSubmit={FormSubmit}>
          <Heading align={"left"} my={"5"}>
            Address<span style={{ color: "red" }}>*</span>
          </Heading>
          <HStack spacing={"10"} my={"5"}>
            <Input
              onChange={onChange}
              type="text"
              name="firstName"
              placeholder="First Name*"
            />
            <Input
              onChange={onChange}
              type="text"
              name="lastName"
              placeholder="Last Name*"
            />
          </HStack>
          <VStack spacing={"10"} my={"10"}>
            <Input
              onChange={onChange}
              type="text"
              name="addressLine1"
              placeholder="Address Line 1*"
            />
            <Input
              onChange={onChange}
              type="text"
              name="addressLine2"
              placeholder="Address Line 2"
            />
          </VStack>
          <HStack spacing={"10"} my={"8"}>
            <Input
              onChange={onChange}
              type="text"
              name="locality"
              placeholder="Town/City*"
            />
            <Input
              onChange={onChange}
              type="number"
              name="pinCode"
              placeholder="Pin Code*"
            />
          </HStack>
          <HStack spacing={"10"} my={"5"}>
            <Input
              onChange={onChange}
              type="text"
              name="state"
              placeholder="State/Territory*"
            />
            <Input
              onChange={onChange}
              type="text"
              name="country"
              placeholder="Country*"
            />
          </HStack>
          <Divider />
          <Heading align={"left"} my={"5"}>
            Contact<span style={{ color: "red" }}>*</span>
          </Heading>
          <VStack spacing={"8"}>
            <Input
              onChange={onChange}
              type="email"
              name="email"
              placeholder="Email*"
            />
            <Input
              onChange={onChange}
              type="number"
              name="mobile"
              placeholder="Mobile*"
            />
          </VStack>
          <Button
            mt="2rem"
            width={["95%", "90%", "80%", "80%"]}
            my={"4"}
            bg={isLargerThan ? "black" : "grey"}
            color="whitesmoke"
            p="1.5rem 2rem"
            border={"3px solid beige"}
            _hover={{
              background: "none",
              color: "teal",
              border: "1px solid black",
            }}
            type="submit"
          >
            PLACE ORDER
          </Button>
        </form>
      </Box>
    </>
  );
};
