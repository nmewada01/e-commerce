import { Box, Flex, Heading, Text, Tooltip } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
const MyAccount = () => {
  const profileData = useSelector((state) => state.AuthReducer?.profileData);
  console.log(profileData)
  return (
    <div>
      <Box
        m="2rem"
        className="myaccount"
        h={"100vh"}
        bgImage={"linear-gradient(skyblue,royalblue)"}
      >
        <Heading w={"80%"} m={"auto"} className="heading">
          Hi! {profileData.length !== 0 ? profileData.name : "User"}! Thank you
          for visiting my website! My name is Naresh Rajput and I hope you like
          my Website.
        </Heading>
        <Flex
          alignItems={"center"}
          alignContent={"center"}
          h={"50vh"}
          w={"50%"}
          m={"auto"}
          my={"5"}
        >
          <Heading className="heading"> Follow Me : </Heading>
          <Flex justifyContent={"space-evenly"}>
            <Tooltip label="Follow Me On Github" color="white">
              <Box>
                <Text>
                  <a href="https://github.com/nmewada01" alt={"nmewada01"}>
                    <AiFillGithub fontSize={"45px"} />
                  </a>
                </Text>
              </Box>
            </Tooltip>
            <Tooltip label="Follow Me On Linkedin" color="white">
              <Box>
                <Text>
                  <a
                    href="https://www.linkedin.com/in/naresh-rajput/"
                    alt={"Naresh Rajput"}
                  >
                    <AiFillLinkedin fontSize={"50px"} />
                  </a>
                </Text>
              </Box>
            </Tooltip>
          </Flex>
        </Flex>
        <Text fontSize={"30px"} color="white">
          Have A Great Day!
        </Text>
      </Box>
    </div>
  );
};

export default MyAccount;
