import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Icon,
  Box,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

import React from "react";
import { Link } from "react-router-dom";

export default function SideBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const { colorMode } = useColorMode();
  return (
    <>
      <Button ref={btnRef} onClick={onOpen}>
        <Icon
          as={HamburgerIcon}
          color={colorMode === "dark" ? "white" : "black"}
        />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Dashboard</DrawerHeader>

          <DrawerBody mt={"1rem"}>
            <Stack spacing={"8"}>
              <Box>
                <Link to="/">Home</Link>
              </Box>
              <Box>
                <Link to="/allproducts">AllProducts</Link>
              </Box>
              <Box>
                <Link to="/men">Men's</Link>
              </Box>
              <Box>
                <Link to="/women">Women's</Link>
              </Box>
              <Box>
                <Link to="/shoes">Shoes</Link>
              </Box>
            </Stack>
          </DrawerBody>

          {/* <DrawerFooter>
          </DrawerFooter> */}
        </DrawerContent>
      </Drawer>
    </>
  );
}
