import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import hand from "../../../asset/Images/hand.svg";
import Image from "next/image";
import UpperBoard from "./UpperBoard";
import LowerBoard from "./LowerBoard";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Dashboard = ({ isOpen, onClose, btnRef, value, onChange }) => {
  return (
    <Box position={"relative"}>
      <Stack px={"7em"} py={"2em"} fontFamily={"Euclid Circular B"}>
        <Box>
          <Stack direction={"row"}>
            <Image src={hand} alt="hand" />
            <Heading fontSize={"20px"} fontWeight={600}>
              Hi Mezu
            </Heading>
          </Stack>
          <Text fontSize={"12px"}>Welcome to your Dashboard</Text>
        </Box>
        <UpperBoard />
        <LowerBoard />
        <Text textAlign={"center"} color={"#919191"}>
          End-to-End Encryption
        </Text>
      </Stack>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={"sm"}
        // isFullHeight={false}
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
    </Box>
  );
};

export default Dashboard;
