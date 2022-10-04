import { AiFillHeart } from "react-icons/ai";
import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  useMediaQuery,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getData } from "../../redux/DataReducer/action";
import { ListItem, UnorderedList } from "@chakra-ui/react";
import { addToCart } from "../../redux/CartReducer/action";
import { addToWishList } from "../../redux/WishReducer/action";
import Navbar from "../Navbar/Navbar";
// import { BsBagFill } from "react-icons/bs";
const DescriptionPage = () => {
  const { id } = useParams();
  const toast = useToast();
  const products = useSelector((store) => store.dataReducer.products);
  const dispatch = useDispatch();
  const [currentProducts, setCurrentProducts] = useState({});
  const [isLargerThan] = useMediaQuery("(min-width: 768px)");
  const [size, setSize] = useState(null);
  useEffect(() => {
    if (products.length === 0) {
      dispatch(getData());
    }
  }, [dispatch, products.length]);
  useEffect(() => {
    if (id) {
      const cur = products.find((item) => item.id === Number(id));
      cur && setCurrentProducts(cur);
    }
  }, [id, products]);

  const handleCart = () => {
    let payload = {
      ...currentProducts,
      size,
    };

    dispatch(addToCart(payload));
  };
  const handleWishList = () => {
    let payload = {
      ...currentProducts,
    };
    dispatch(addToWishList(payload, toast));
  };
  return (
    <div key={currentProducts.id}>
      <Navbar /> <br />
      <Flex
        justify={"space-between"}
        flexDirection={isLargerThan ? "row" : "column"}
      >
        <Box width={["100%", "100%", "60%", "60%"]} min-height={"100vh"}>
          {/* ------------------------------ 1 image------------------------------------ */}
          <Box>
            <Image w={"100%"} src={currentProducts.images?.[0]} />
          </Box>

          {/* ------------------------------ 4 images------------------------------------ */}

          <Box>
            <Flex>
              <Box>
                <Image src={currentProducts.images?.[1]} />
              </Box>
              <Box>
                <Image src={currentProducts.images?.[2]} />
              </Box>
            </Flex>
            <Flex>
              <Box>
                <Image src={currentProducts.images?.[3]} />
              </Box>
              <Box>
                <Image src={currentProducts.images?.[4]} />
              </Box>
            </Flex>
          </Box>

          {/* --------------------------------------------------------------------- */}
        </Box>

        {/* ------------------------------details Box------------------------------------ */}
        <Box
          width={["100%", "100%", "35%", "35%"]}
          min-height={"100vh"}
          textAlign={"left"}
          my={"6"}
        >
          <Box>
            <Heading>{currentProducts.name}</Heading>
            <Box mx={"4"} my={"6"} fontSize={["sm", "md", "lg", "xl"]}>
              <Text fontSize={"lg"}>
                MRP :
                <span style={{ textDecoration: "line-through" }}>
                  ₹{currentProducts.original_price}.00
                </span>
                <span
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    marginLeft: "5px",
                  }}
                >
                  ₹{currentProducts.final_price}.50
                </span>
              </Text>
              <Badge color={"grey"} fontWeight={"bold"}>
                incl. of taxes and duties
              </Badge>
            </Box>
            <Box>
              <Text
                fontSize={["sm", "md", "lg", "xl"]}
                textAlign="left"
                mx={"4"}
                fontWeight={"bold"}
              >
                Select Size
              </Text>
              <Flex gap={"2rem"} my={"5"} mx={"4"}>
                {currentProducts.sizes?.map((size) => (
                  <Button
                    key={size}
                    _hover={{
                      border: "1px solid black",
                      bg: "none",
                      color: "blue",
                    }}
                    onClick={() => setSize(size)}
                  >
                    {size}
                  </Button>
                ))}
              </Flex>
            </Box>
            <Box mt="3rem" align={"left"}>
              <Button
                width={["100%", "100%", "70%", "70%"]}
                bg="black"
                color={"whitesmoke"}
                colorScheme={"blackAlpha"}
                disabled={!size}
                onClick={handleCart}
              >
                {!size ? "Please Select A Size" : "ADD TO BAG"}
              </Button>
            </Box>
            <Box mt="1rem" align={"left"}>
              <Button
                width={["100%", "100%", "70%", "70%"]}
                bg="white"
                border={"1px solid black"}
                color="black"
                onClick={handleWishList}
              >
                ADD TO FAVOURITE <AiFillHeart color="red" size={"20px"} />
              </Button>
            </Box>
          </Box>
          <hr />
          {/* ------------------------------details Box End------------------------------------ */}

          {/* ------------------------------description Box------------------------------------ */}
          <Box mt={"5rem"} align={"left"} mx={"4"}>
            <Badge ml="1" fontSize="1rem" colorScheme="blackAlpha">
              Description :
            </Badge>

            <UnorderedList spacing={"3"} my={"4"}>
              <ListItem fontSize={"md"} fontWeight={"semibold"}>
                Gender : {currentProducts.gender}{" "}
              </ListItem>
              <ListItem fontSize={"md"} fontWeight={"semibold"}>
                Colour : {currentProducts.color}{" "}
              </ListItem>
              <ListItem fontSize={"md"} fontWeight={"semibold"}>
                Rating : {currentProducts.rating}{" "}
              </ListItem>
            </UnorderedList>
          </Box>
        </Box>
      </Flex>
    </div>
  );
};

export default DescriptionPage;
