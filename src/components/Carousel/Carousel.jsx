import React from "react";
import {
  Box,
  // IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Button,
  Flex,
  useMediaQuery,
} from "@chakra-ui/react";
// import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel() {
  const [slider, setSlider] = React.useState(null);
  const [isLargerThan] = useMediaQuery("(min-width: 468px)");
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });
  const cards = [
    {
      id: 1000,
      title: "Shopping! Gappy ji is Now Happy ji",
      text: "Here are Men's, Women's, Clothes and Shoes Collection, where you can buy Shoes and clothes with great prices",
      image:
        "https://png.pngtree.com/thumb_back/fw800/background/20201010/pngtree-black-friday-sale-background-design-template-banner-discount-vector-poster-business-image_407567.jpg",
    },
  ];

  return (
    <Box
      position={"relative"}
      height={"600px"}
      width={"full"}
      overflow={"hidden"}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      {/* <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="40px" />
      </IconButton> */}
      {/* Right Icon */}
      {/* <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton> */}
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card) => (
          <Box
            key={card.id}
            height={"6xl"}
            color="whitesmoke"
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            // backgroundImage="linear-gradient(teal,skyblue,royalblue)"
            background="url(https://img.freepik.com/free-photo/front-view-cyber-monday-shopping-cart-with-bags-copy-space_23-2148657638.jpg?w=1380&t=st=1664900415~exp=1664901015~hmac=89c39369bd2b9d5caa08a3b57e7c2ff809dbaea870971c47018c09ddb72496b9) center/cover no-repeat"
          >
            {/* This is the block if we need to change, to customize the caption */}
            <Container
              size="container.lg"
              height="600px"
              m="auto"
              position="relative"
            >
              <Stack
                spacing={6}
                w={"full"}
                maxW={"lg"}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)"
              >
                <Heading fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}>
                  {card.title}
                </Heading>
                <Text fontSize={["sm", "md", "lg", "xl"]} color="">
                  {card.text}
                </Text>
                <Flex gap={isLargerThan ? "2rem" : "1rem"} justify={"center"}>
                  <Button
                    fontSize={["xs", "sm", "md", "lg", "xl"]}
                    bg="black"
                    color="whitesmoke"
                    _hover={{
                      border: "1px solid black",
                      background: "none",
                      color: "blue",
                    }}
                  >
                    <Link to="/men">MENS SHOP </Link>
                  </Button>
                  <Button
                    fontSize={["10px", "sm", "md", "lg"]}
                    bg="black"
                    color="whitesmoke"
                    _hover={{
                      border: "1px solid black",
                      background: "none",
                      color: "blue",
                    }}
                  >
                    <Link to="/women">WOMENS SHOP </Link>
                  </Button>
                  <Button
                    fontSize={["10px", "sm", "md", "lg"]}
                    bg="black"
                    color="whitesmoke"
                    _hover={{
                      border: "1px solid black",
                      background: "none",
                      color: "blue",
                    }}
                  >
                    <Link to="/shoes">SPORTS KIT </Link>
                  </Button>
                </Flex>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
