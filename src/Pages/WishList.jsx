import {
  Box,
  Heading,
  // Image,
  SimpleGrid,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar/Navbar";
import WishListShow from "../components/wishlist/WishListShow";

const WishList = () => {
  const wishlist = useSelector((store) => store.wishReducer.wishlist);
  const [isLargerThan] = useMediaQuery("(min-width: 768px)");
  return (
    <div>
       <Navbar/> <br/>
      <Box
        width={["95%", "90%", "80%", "75%"]}
        m={"auto"}
        my={"9"}
        textAlign={"left"}
      >
        <Box my={"9"}>
          <Heading>MY WISHLIST</Heading>
          <Text>{wishlist.length} ITEM</Text>
          {wishlist.length===0 ? <Text>
            You haven't saved any items to your wishlist yet. Start shopping and
            add your favorite items to your wishlist.
          </Text>:<Text>Here Is your favourite Items list. You can buy them by clicking on the Item. after Clicking you can get all details about the Items then you go for checkout.</Text>}
        </Box>
        <SimpleGrid
          columns={isLargerThan ? "3" : "2"}
          spacing={isLargerThan ? "10" : "5"}
          fontSize={["sm", "md", "md", "md"]}
        >
          {wishlist?.length > 0 &&
            wishlist.map((item) => {
              return (
                <>
                  <WishListShow key={item.id} item={item} />
                </>
              );
            })}
        </SimpleGrid>
      </Box>
    </div>
  );
};

export default WishList;
