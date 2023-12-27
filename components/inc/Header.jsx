// import { Image } from "@chakra-ui/react";
"use client";
import Image from "next/image";
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import logo from "../../asset/Images/logo.svg";
import Plus from "../../asset/Images/Plus.svg";
import Calender from "../../asset/Images/Calendar.svg";
import Notification from "../../asset/Images/Notification.svg";
import User from "../../asset/Images/User.svg";
import Home from "../../asset/Images/Home.svg";
import Location from "../../asset/Images/Location.svg";
import Profile from "../../asset/Images/Profile.svg";
import Wallet from "../../asset/Images/Wallet.svg";
import Setting from "../../asset/Images/Setting.svg";
import CalendarB from "../../asset/Images/CalendarB.svg";
import Search from "../../asset/Images/Search.svg";
import ArrowUp from "../../asset/Images/ArrowUp.svg";
import React, { useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [value, onChange] = useState(new Date());
  return (
    <>
      <Box w={{ base: "100%" }}>
        <Flex
          w={{ base: "100%" }}
          h="82px"
          color={"white"}
          bg="black"
          justifyContent={"space-between"}
          px="7em"
          align={"center"}
        >
          <Box>
            <Image
              // fill
              src={logo}
              alt="Dan"
            />
            <Text fontSize={"14px"} fontFamily={"Proxima Nova"}>
              For Mainstone
            </Text>
          </Box>
          <Box>
            <Flex columnGap={"2.5em"}>
              <Stack direction={"row"} spacing={"1.5em"}>
                <Image
                  // fill
                  className="bg-black"
                  src={Plus}
                  alt="Dan"
                />
                <Image
                  // fill
                  ref={btnRef}
                  onClick={onOpen}
                  style={{ cursor: "pointer" }}
                  src={Calender}
                  alt="Dan"
                />
                <Image
                  // fill
                  src={Notification}
                  alt="Dan"
                />
              </Stack>
              <Stack direction={"row"} align={"center"}>
                <Image
                  // fill
                  src={User}
                  alt="Dan"
                />
                <Text>Mezu Orizu</Text>
                <Image
                  // fill
                  src={ArrowUp}
                  alt="Dan"
                />
              </Stack>
            </Flex>
          </Box>
        </Flex>
        <Flex
          w={{ base: "100%" }}
          h="67px"
          bg=""
          justifyContent={"space-between"}
          px="7em"
          align={"center"}
          boxShadow="md"
        >
          <Stack
            align={"center"}
            direction={"row"}
            borderRadius={"lg"}
            bg={"#F5F5F5"}
            py={".5em"}
            px={"1em"}
          >
            <Image
              // fill
              src={Home}
              alt="Dan"
            />
            <Text fontSize={"14px"} fontWeight={"600"}>
              Dashboard
            </Text>
          </Stack>
          <Stack align={"center"} direction={"row"}>
            <Image
              // fill
              src={Location}
              alt="Dan"
            />
            <Text fontSize={"14px"}>Listing</Text>
          </Stack>
          <Stack align={"center"} direction={"row"}>
            <Image
              // fill
              src={Profile}
              alt="Dan"
            />
            <Text fontSize={"14px"}>User</Text>
          </Stack>
          <Stack align={"center"} direction={"row"}>
            <Image
              // fill
              src={Wallet}
              alt="Dan"
            />
            <Text fontSize={"14px"}>Account</Text>
          </Stack>
          <Stack align={"center"} direction={"row"}>
            <Image
              // fill
              src={CalendarB}
              alt="Dan"
            />
            <Text fontSize={"14px"}>Request</Text>
          </Stack>
          <Stack align={"center"} direction={"row"}>
            <Image
              // fill
              src={Setting}
              alt="Dan"
            />
            <Text fontSize={"14px"}>Settings</Text>
          </Stack>
          <Stack>
            <InputGroup>
              <Input
                fontSize={"14px"}
                placeholder="Search... properties, customers here"
                _placeholder={{ fontSize: "0.75em" }}
              />
              <InputRightElement>
                {/* <CheckIcon color="green.500" /> */}
                <Image
                  // fill
                  style={{ cursor: "pointer" }}
                  src={Search}
                  alt="Dan"
                />
              </InputRightElement>
            </InputGroup>
          </Stack>

          {/* <Box>Header</Box> */}
        </Flex>
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={"sm"}
      >
        <DrawerOverlay />
        <DrawerContent bg={"black"} color={"white"}>
          <DrawerCloseButton />
          <DrawerHeader>Calender</DrawerHeader>

          <DrawerBody>
            <Calendar
              onChange={onChange}
              className=" w-full !bg-black text-slate-500 !border-none !outline-none"
              value={value}
            />
          </DrawerBody>

          <DrawerFooter>
            {/* <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button> */}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
