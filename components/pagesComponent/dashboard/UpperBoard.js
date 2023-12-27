import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
  Spacer,
  Stack,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import Increase from "../../../asset/Images/Increase.svg";
import IncreaseR from "../../../asset/Images/IncreaseR.svg";
import ProfileP from "../../../asset/Images/ProfileP.svg";
import HomeP from "../../../asset/Images/HomeP.svg";
import DirectionR from "../../../asset/Images/DirectionR.svg";
import DirectionL from "../../../asset/Images/DirectionL.svg";
import { SlArrowRight } from "react-icons/sl";

const UpperBoard = () => {
  return (
    <Grid templateColumns={{ lg: "repeat(3, 1fr)" }} gap={6}>
      <GridItem
        boxShadow={"md"}
        borderRadius={"md"}
        // w={"856px"}
        // h={"325px"}
        colSpan={2}
        bg={"#fff"}
        py={"2em"}
      >
        <Stack spacing={"0.5em"}>
          <Flex justify={"space-between"} px={"2em"}>
            <Stack>
              <Heading fontSize={"20px"} fontWeight={"600"}>
                Sales Overview
              </Heading>
              <Text fontSize={"12px"}>
                Showing overview Jan 2022 - Sep 2022
              </Text>
            </Stack>
            <Box
              borderColor={"#CBCBCB"}
              border={"1px"}
              color={"#CBCBCB"}
              borderRadius={"lg"}
              // justifyContent={"center"}
              alignSelf={"center"}
              py={"1em"}
              px={"2.5em"}
              fontSize={"12px"}
              // h={"46px"}
            >
              View Transactions
            </Box>
          </Flex>
          <Stack
            direction={"row"}
            align={"center"}
            spacing={"1.5em"}
            justify={"end"}
            px={"2em"}
          >
            <Text>1 Week</Text>
            <Text>1 Month</Text>
            <Text
              py={"0.5em"}
              px={"1em"}
              fontWeight={600}
              borderRadius={"md"}
              boxShadow={"md"}
              bg={"#f5f5f5"}
            >
              1 Year
            </Text>
          </Stack>
          <Divider color={"#E4E4E4"} bg={"#E4E4E4"} />

          <Flex pr={"2em"} direction={{ lg: "column", xl: "row" }}>
            <Stack
              w={"100%"}
              justify={"space-between"}
              align={"center"}
              direction={"row"}
              px={".5em"}
            >
              <Box bg={"#E4E4E4"} cursor={"pointer"} borderRadius={"full"}>
                <Image src={DirectionL} alt="l" />
              </Box>

              <Stack w={"80%"} h={"100%"}>
                <Box
                  w={"100%"}
                  h={"100%"}
                  className=" sha"
                  boxShadow={"inner"}
                ></Box>
                <Divider />
                <Stack direction={"row"} justify={"space-evenly"}>
                  <Text fontSize={"10px"} fontWeight={500} color={"#919191"}>
                    Jan
                  </Text>
                  <Text fontSize={"10px"} fontWeight={500} color={"#919191"}>
                    Feb
                  </Text>
                  <Text fontSize={"10px"} fontWeight={500} color={"#919191"}>
                    Mar
                  </Text>
                  <Text fontSize={"10px"} fontWeight={500} color={"#919191"}>
                    Apr
                  </Text>
                  <Text fontSize={"10px"} fontWeight={500} color={"#919191"}>
                    May
                  </Text>
                  <Text fontSize={"10px"} fontWeight={500} color={"#919191"}>
                    Jun
                  </Text>
                  <Text fontSize={"10px"} fontWeight={500} color={"#919191"}>
                    Jul
                  </Text>
                  <Text fontSize={"10px"} fontWeight={500} color={"#919191"}>
                    Aug
                  </Text>
                  <Text fontSize={"10px"} fontWeight={500} color={"#919191"}>
                    Sep
                  </Text>
                </Stack>
              </Stack>
              <Box bg={"#E4E4E4"} cursor={"pointer"} borderRadius={"full"}>
                <Image src={DirectionR} alt="r" />{" "}
              </Box>
            </Stack>
            <Spacer />
            <SimpleGrid w={"100%"} columns={2} spacing={3}>
              <Stat
                border={"1px"}
                borderRadius={"xl"}
                borderColor={"#CBCBCB"}
                py={".5em"}
                pl={".5em"}
                w={"100%"}
                h={"73px"}
              >
                <StatNumber fontSize={"20px"} color={"#4545FE"}>
                  ₦ 0.00
                </StatNumber>
                {/* <StatLabel>Collected Fees</StatLabel> */}
                <Stack spacing={1} direction={"row"} align={"center"}>
                  <Text fontSize={"10px"} fontWeight={500}>
                    Balance
                  </Text>
                  <Image src={Increase} alt="In" />
                  <Text fontSize={"10px"} color={"green"}>
                    0%
                  </Text>
                </Stack>
              </Stat>
              <Stat
                border={"1px"}
                borderRadius={"xl"}
                borderColor={"#CBCBCB"}
                py={".5em"}
                pl={".5em"}
                w={"100%"}
                h={"73px"}
              >
                <StatNumber fontSize={"20px"} color={"#12D8A0"}>
                  ₦ 0.00
                </StatNumber>
                {/* <StatLabel>Collected Fees</StatLabel> */}
                <Stack spacing={1} direction={"row"} align={"center"}>
                  <Text fontSize={"10px"} fontWeight={500}>
                    Deposit
                  </Text>
                  <Image src={Increase} alt="In" />
                  <Text fontSize={"10px"} color={"green"}>
                    0%
                  </Text>
                </Stack>
              </Stat>
              <Stat
                border={"1px"}
                borderRadius={"xl"}
                borderColor={"#CBCBCB"}
                py={".5em"}
                pl={".5em"}
                w={"100%"}
                h={"73px"}
              >
                <StatNumber fontSize={"20px"} color={"#191919"}>
                  ₦ 0.00
                </StatNumber>
                {/* <StatLabel>Collected Fees</StatLabel> */}
                <Stack spacing={1} direction={"row"} align={"center"}>
                  <Text fontSize={"10px"} fontWeight={500}>
                    Purchase
                  </Text>
                  <Image src={Increase} alt="In" />
                  <Text fontSize={"10px"} color={"green"}>
                    0%
                  </Text>
                </Stack>
              </Stat>
              <Stat
                border={"1px"}
                borderRadius={"xl"}
                borderColor={"#CBCBCB"}
                py={".5em"}
                pl={".5em"}
                w={"100%"}
                h={"73px"}
              >
                <StatNumber fontSize={"20px"} color={"#FF6A6A"}>
                  ₦ 0.00
                </StatNumber>
                {/* <StatLabel>Collected Fees</StatLabel> */}
                <Stack spacing={1} direction={"row"} align={"center"}>
                  <Text fontSize={"10px"} fontWeight={500}>
                    Withdrawal
                  </Text>
                  <Image src={IncreaseR} alt="In" />
                  <Text fontSize={"10px"} color={"#FF6A6A"}>
                    0%
                  </Text>
                </Stack>
              </Stat>
            </SimpleGrid>
          </Flex>
        </Stack>
      </GridItem>
      <GridItem
      // boxShadow={"md"}
      // borderRadius={"md"}
      // // w={"856px"}
      // // h={"325px"}
      // // colSpan={2}
      // bg={"#F5F5F5"}
      // py={"2em"}
      >
        <Stack spacing={2.5} h={"100%"}>
          <Card h={"100%"} boxShadow={"md"}>
            <CardHeader p={"1em"}>
              <Flex justify={"space-between"} align={"center"}>
                <Stack direction={"row"} align={"center"}>
                  <Image src={HomeP} alt="In" />
                  <Heading fontSize={"14px"} fontWeight={500}>
                    Property Overview
                  </Heading>
                </Stack>
                <Stack direction={"row"} align={"center"}>
                  <Text color={"#CBCBCB"} fontSize={"12px"}>
                    View all
                  </Text>
                  <SlArrowRight color={"#CBCBCB"} fontSize={"10px"} />
                </Stack>
              </Flex>
            </CardHeader>
            <CardBody p={".5em"}>
              <Stack direction={"row"}>
                <Stat
                  border={"1px"}
                  borderRadius={"xl"}
                  borderColor={"#CBCBCB"}
                  py={".5em"}
                  w={"117px"}
                  // h={"79px"}
                  textAlign={"center"}
                  alignSelf={"center"}
                >
                  <StatNumber fontSize={"20px"}>0</StatNumber>
                  <StatLabel>Total</StatLabel>
                </Stat>
                <Stat
                  border={"1px"}
                  borderRadius={"xl"}
                  borderColor={"#CBCBCB"}
                  py={".5em"}
                  w={"117px"}
                  // h={"79px"}
                  textAlign={"center"}
                >
                  <StatNumber fontSize={"20px"}>0</StatNumber>
                  <StatLabel>Available</StatLabel>
                </Stat>
                <Stat
                  border={"1px"}
                  borderRadius={"xl"}
                  borderColor={"#CBCBCB"}
                  py={".5em"}
                  w={"117px"}
                  // h={"79px"}
                  textAlign={"center"}
                >
                  <StatNumber fontSize={"20px"}>0</StatNumber>
                  <StatLabel>Sold Out</StatLabel>
                </Stat>
              </Stack>
            </CardBody>
            {/* <CardFooter>
            <Button>View here</Button>
          </CardFooter> */}
          </Card>
          <Card h={"100%"} boxShadow={"md"}>
            <CardHeader p={"1em"}>
              <Flex justify={"space-between"} align={"center"}>
                <Stack direction={"row"} align={"center"}>
                  <Image src={ProfileP} alt="In" />
                  <Heading fontSize={"14px"} fontWeight={500}>
                    Customers Overview
                  </Heading>
                </Stack>
                <Stack direction={"row"} align={"center"}>
                  <Text color={"#CBCBCB"} fontSize={"12px"}>
                    View all
                  </Text>
                  <SlArrowRight color={"#CBCBCB"} fontSize={"10px"} />
                </Stack>
              </Flex>
            </CardHeader>
            <CardBody p={".5em"}>
              <Stack direction={"row"}>
                <Stat
                  border={"1px"}
                  borderRadius={"xl"}
                  borderColor={"#CBCBCB"}
                  py={".5em"}
                  w={"88px"}
                  // h={"79px"}
                  textAlign={"center"}
                  alignSelf={"center"}
                >
                  <StatNumber fontSize={"20px"}>0</StatNumber>
                  <StatLabel>Total</StatLabel>
                </Stat>
                <Stat
                  border={"1px"}
                  borderRadius={"xl"}
                  borderColor={"#CBCBCB"}
                  py={".5em"}
                  w={"88px"}
                  // h={"79px"}
                  textAlign={"center"}
                >
                  <StatNumber fontSize={"20px"}>0</StatNumber>
                  <StatLabel>New</StatLabel>
                </Stat>
                <Stat
                  border={"1px"}
                  borderRadius={"xl"}
                  borderColor={"#CBCBCB"}
                  py={".5em"}
                  w={"88px"}
                  // h={"79px"}
                  textAlign={"center"}
                >
                  <StatNumber fontSize={"20px"}>0</StatNumber>
                  <StatLabel>Active</StatLabel>
                </Stat>
                <Stat
                  border={"1px"}
                  borderRadius={"xl"}
                  borderColor={"#CBCBCB"}
                  py={".5em"}
                  w={"88px"}
                  // h={"79px"}
                  textAlign={"center"}
                >
                  <StatNumber fontSize={"20px"}>0</StatNumber>
                  <StatLabel>Inactive</StatLabel>
                </Stat>
              </Stack>
            </CardBody>
            {/* <CardFooter>
            <Button>View here</Button>
          </CardFooter> */}
          </Card>
        </Stack>
      </GridItem>
    </Grid>
  );
};

export default UpperBoard;
