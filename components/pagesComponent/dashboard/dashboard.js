import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import hand from "../../../asset/Images/hand.svg";
import Image from "next/image";
import UpperBoard from "./UpperBoard";
import LowerBoard from "./LowerBoard";

const Dashboard = () => {
  return (
    <>
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
    </>
  );
};

export default Dashboard;
