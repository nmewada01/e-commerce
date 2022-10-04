import { AddIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  Tooltip,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";

export const InputCoupon = (discount_price, setDis) => {
  const [input, setInput] = useState();
  const [checkDisable, setCheckDisable] = useState(false);
  const toast = useToast();
  let disc = 0;
  const handleRemoveCoupon = () => {
    setCheckDisable(false);
    disc = 0;
    setDis(disc);
    toast({
      title: "Coupon Removed",
      description: "",
      status: "info",
      duration: 2000,
      position: "top",
      isClosable: true,
    });
  };

  const handleOnCoupon = () => {
    if (input === "family10") {
      disc = Math.floor((discount_price / 100) * 10);
      setDis(disc);
      toast({
        title: "Coupon Applied Successfully",
        description: "You got 10% Discount",
        status: "success",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
      setCheckDisable(true);
    }
    if (input === "family20") {
      let disc = Math.floor((discount_price / 100) * 20);
      setDis(disc);
      toast({
        title: "Coupon Applied Successfully",
        description: "You got 20% Discount",
        status: "success",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
      setCheckDisable(true);
    }
    if (input === "family30") {
      let disc = Math.floor((discount_price / 100) * 30);
      setDis(disc);
      toast({
        title: "Coupon Applied Successfully",
        description: "You got 30% Discount",
        status: "success",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
      setCheckDisable(true);
    }
    if (input === "family5") {
      let disc = Math.floor((discount_price / 100) * 5);
      setDis(disc);
      toast({
        title: "Coupon Applied Successfully",
        description: "You got 5% Discount",
        status: "success",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
      setCheckDisable(true);
    }
    if (input === "family15") {
      let disc = Math.floor((discount_price / 100) * 15);
      setDis(disc);
      toast({
        title: "Coupon Applied Successfully",
        description: "You got 15% Discount",
        status: "success",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
      setCheckDisable(true);
    }
    if (input === "family25") {
      let disc = Math.floor((discount_price / 100) * 25);
      setDis(disc);
      toast({
        title: "Coupon Applied Successfully",
        description: "You got 25% Discount",
        status: "success",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
      setCheckDisable(true);
    }
  };
  return (
    <>
      <InputGroup size="lg">
        <Input
          disabled={checkDisable}
          pr="4.5rem"
          type="text"
          placeholder="Enter Your Promo Code"
          onChange={(e) => setInput(e.target.value)}
        />
        <InputRightElement width="4.5rem">
          {checkDisable ? (
            <Button onClick={handleRemoveCoupon}>
              <Tooltip label="Remove Coupon" bg="red" color={"white"}>
                <CloseIcon />
              </Tooltip>
            </Button>
          ) : (
            <Button h="1.75rem" size="sm" onClick={handleOnCoupon}>
              <Tooltip>
                <AddIcon label="Apply Coupon" />
              </Tooltip>
            </Button>
          )}
        </InputRightElement>
      </InputGroup>
      <Box className="marquee">
        <Text fontSize={"xl"}>
          You can find the Coupon after clicking to the profile...
        </Text>
      </Box>
    </>
  );
};
