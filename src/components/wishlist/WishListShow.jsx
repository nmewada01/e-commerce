import { Box, Button, Flex, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeWishList } from "../../redux/WishReducer/action";
import { CloseIcon } from "@chakra-ui/icons";

const WishListShow = ({ item }) => {
  const { images, name, id, original_price, final_price } = item;
  const [price, setPrice] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleWish = (id) => {
    navigate(`/description/${id}`);
  };
  const hanldeWishhover = () => {
    setPrice(true);
  };
  const handleWishLeave = () => {
    setPrice(false);
  };
  const handleRemoveWishList = (id) => {
    dispatch(removeWishList({ id }));
  };
  return (
    <div>
      <Button onClick={() => handleRemoveWishList(id)}>
        <CloseIcon color={"red"} />
      </Button>
      <Stack h={['35vh','60vh','60vh']}>
        <Box
          onMouseEnter={hanldeWishhover}
          onMouseLeave={handleWishLeave}
          onClick={() => handleWish(id)}
          border={price && "1px solid teal"}
        >
          <Image src={images[0]} alt={name} />
          <Text fontWeight={"lightbold"}>{name}</Text>
          {price && (
            <Flex fontWeight={"bold"} justifyContent={"space-around"}>
              <Text as={"s"} color={"red"}>
                {original_price}
              </Text>
              <Text>{final_price}</Text>
            </Flex>
          )}
        </Box>
      </Stack>
    </div>
  );
};

export default WishListShow;
