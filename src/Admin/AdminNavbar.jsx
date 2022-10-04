import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import SideBar from "./SideBar";
const AdminNavbar = () => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    new Promise((res, rej) => {
      res(localStorage.removeItem("token"));
      res(localStorage.removeItem("userInfo"));
    }).then(() => {
      navigate("/login");
      window.location.reload();
    });
  };
  return (
    <Box h="8vh" bg={"black"} mx={"5"}>
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Box mx={"5"}>
          <SideBar />
        </Box>
        <Box mx={"5"}>
          <Menu>
            <MenuButton
              fontSize={"11px"}
              my={"2"}
              mx={"2"}
              as={Button}
              rightIcon={<AiFillCaretDown />}
            >
              Naresh Rajput
            </MenuButton>
            <MenuList>
              <MenuItem as={"Button"} onClick={logoutHandler}>
                Logout
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </Box>
  );
};

export default AdminNavbar;
