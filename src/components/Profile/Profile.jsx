import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  Button,
  //Icon,
  Avatar,
  Text,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

import React, { useEffect } from "react";
import { GrLogout } from "react-icons/gr";
//import { FiUser } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { profile } from "../../redux/AuthReducer/action";
import { ShowCoupon } from "../Coupon/ShowCoupon";
import { CgProfile } from "react-icons/cg";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { BsCartCheck } from "react-icons/bs";
import { RiCoupon3Line } from "react-icons/ri";
import { getLocalData } from "../../utils/localStorage";
const Profile = ({ colorMode }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.AuthReducer.isAuth);

  const profileData = useSelector((state) => state.AuthReducer?.profileData);
  // console.log("profileData:", profileData);
  useEffect(() => {
    if (profileData?.length === 0) {
      const token = localStorage.getItem("token"); //different approaches for getting local storage
      const email = getLocalData("userInfo");
      const payload = {
        email: email,
        token,
      };
      dispatch(profile(payload));
    }
  }, [dispatch, profileData?.length]);

  const logoutHandler = () => {
    new Promise((res, rej) => {
      res(localStorage.removeItem("token"));
      res(localStorage.removeItem("userInfo"));
    }).then(() => {
      navigate("/");
      window.location.reload();
    });
  };

  return (
    <div>
      <Menu>
        <MenuButton
          p="0"
          borderRadius={"50%"}
          bg="none"
          color="black"
          as={Button}
          colorScheme="none"
          rightIcon={<ChevronDownIcon ml={"-15px"} fontSize={"20px"} />}
        >
          <Avatar
            size={"sm"}
            name={profileData.length !== 0 ? profileData.name : ""}
            src={profileData.length !== 0 ? profileData.description : ""}
          />
          <Text
            fontSize={"xs"}
            color={colorMode === "dark" ? "white" : "black"}
          >
            {profileData.length !== 0 ? profileData.name : ""}
          </Text>
        </MenuButton>
        <MenuList>
          <MenuGroup>
            <MenuItem fontWeight={"bold"}>
              {profileData.length !== 0 ? profileData.name : ""}
            </MenuItem>
            <MenuDivider />
            {auth ? (
              <MenuItem onClick={() => navigate("/myaccount")}>
                <Avatar
                  size={"xs"}
                  name={profileData.length !== 0 ? profileData.name : ""}
                  src={profileData.length !== 0 ? profileData.description : ""}
                />
                <Text fontSize={"sm"}>
                  {profileData.length !== 0 ? profileData.email : ""}
                </Text>
              </MenuItem>
            ) : (
              <MenuItem onClick={() => navigate("/myaccount")}>
                <CgProfile /> My Account
              </MenuItem>
            )}

            <MenuItem>
              <RiCoupon3Line />
              <ShowCoupon />
            </MenuItem>
            <MenuItem onClick={() => navigate("/wishlist")}>
              <MdOutlineFavoriteBorder color={"red"} />
              Wishlist
            </MenuItem>
            <MenuItem onClick={() => navigate("/cart")}>
              <BsCartCheck color={"blue"} />
              Cart
            </MenuItem>
            <MenuItem onClick={logoutHandler}>
              <GrLogout />
              Logout
            </MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </div>
  );
};

export default Profile;

// const username = localStorage.getItem("userInfo")
//   ? JSON.parse(localStorage.getItem("userInfo"))
//   : null;
