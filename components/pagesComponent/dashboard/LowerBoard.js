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
  StatLabel,
  StatNumber,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
// import HomeP from "../../../asset/Images/HomeP.svg";
import Nimg from "../../../asset/Images/Nimg.svg";
import Bookmark from "../../../asset/Images/Bookmark.svg";
import DirectionR from "../../../asset/Images/DirectionR.svg";
import DirectionL from "../../../asset/Images/DirectionL.svg";
import { SlArrowRight } from "react-icons/sl";

const LowerBoard = () => {
  return (
    <Grid templateColumns={{ lg: "repeat(3, 1fr)" }} gap={6}>
      <GridItem boxShadow={"md"} borderRadius={"md"}>
        <Card>
          <CardHeader>
            <Heading size="md">Listing Overview</Heading>
          </CardHeader>
          <CardBody>
            <SimpleGrid columns={2} spacing={5}>
              <Stack>
                <Text fontSize={"10px"}>Most Viewed</Text>
                <Divider />
                <Stack direction={"row"} align={"center"}>
                  <Box
                    w={"67px"}
                    h={"68px"}
                    // p={".5em"}
                    borderRadius={"xl"}
                    border={"1px"}
                    borderColor={"#12D8A0"}
                  >
                    <Center py={"1em"}>
                      <Image src={Nimg} alt="Img" />
                    </Center>
                  </Box>
                  <Text fontSize={"16px"} fontWeight={600}>
                    None
                  </Text>
                </Stack>
              </Stack>
              <Stack>
                <Text fontSize={"10px"}>Most Shared</Text>
                <Divider />
                <Stack direction={"row"} align={"center"}>
                  <Box
                    w={"67px"}
                    h={"68px"}
                    // p={".5em"}
                    borderRadius={"xl"}
                    border={"1px"}
                    borderColor={"#4545FE"}
                  >
                    <Center py={"1em"}>
                      <Image src={Nimg} alt="Img" />
                    </Center>
                  </Box>
                  <Text fontSize={"16px"} fontWeight={600}>
                    None
                  </Text>
                </Stack>
              </Stack>
            </SimpleGrid>
          </CardBody>
          <CardFooter>
            <Stack w={"100%"} bg={"#F5F5F5"} borderRadius={"xl"} p={"1em"}>
              <Text fontSize={"10px"}>Most Watchlist</Text>
              <SimpleGrid
                alignContent={"center"}
                alignItems={"center"}
                columns={2}
                spacing={5}
                w={"100%"}
              >
                <Stack direction={"row"} align={"center"}>
                  <Box
                    w={"67px"}
                    h={"68px"}
                    // p={".5em"}
                    borderRadius={"xl"}
                    border={"1px"}
                    borderColor={"#FF9103"}
                  >
                    <Center py={"1em"}>
                      <Image src={Nimg} alt="Img" />
                    </Center>
                  </Box>
                  <Text fontSize={"16px"} fontWeight={600}>
                    None
                  </Text>
                </Stack>
                <Stat
                  border={"1px"}
                  borderRadius={"xl"}
                  borderColor={"#CBCBCB"}
                  py={".5em"}
                  pl={".5em"}
                  w={"100%"}
                  h={"68px"}
                >
                  <Flex align={"center"}>
                    <StatNumber
                      fontSize={"24px"}
                      color={"#191919"}
                      fontFamily={"Euclid Circular B"}
                    >
                      0
                    </StatNumber>
                    <Spacer />
                    <Image src={Bookmark} alt="book" />
                  </Flex>

                  {/* <StatLabel>Collected Fees</StatLabel> */}
                  <Stack spacing={1} direction={"row"} align={"center"}>
                    <Text fontSize={"10px"} fontWeight={500}>
                      Number of watchlists
                    </Text>
                  </Stack>
                </Stat>
              </SimpleGrid>
            </Stack>
          </CardFooter>
        </Card>
      </GridItem>
      <GridItem>
        <Card h={"100%"} boxShadow={"md"} pt={"2em"}>
          <CardHeader>
            <Flex justify={"space-between"} align={"center"}>
              <Stack direction={"row"} align={"center"}>
                {/* <Image src={HomeP} alt="In" /> */}
                <Heading fontSize={"28px"}>₦ 0.00</Heading>
              </Stack>
              <Stack direction={"row"} align={"center"}>
                <Text color={"#CBCBCB"} fontSize={"12px"}>
                  View all
                </Text>
                <SlArrowRight color={"#CBCBCB"} fontSize={"10px"} />
              </Stack>
            </Flex>
            <Text>Total Outstanding Balance</Text>
          </CardHeader>
          <CardBody>
            <Stack h={"100%"} direction={"row"}>
              <Box
                w={"85%"}
                h={"100%"}
                bg={"#F5F5F5"}
                borderRadius={"xl"}
                // border={"1px"}
                // borderColor={"#4545FE"}
              >
                <Flex h={"100%"} w={"100%"} align={"center"} justify={"center"}>
                  <Image src={Nimg} width={100} alt="Img" />
                </Flex>
              </Box>

              <Flex h={"100%"} w={"100%"} direction={"column"}>
                <Text>None</Text>
                <Spacer />
                <Stat>
                  <StatNumber color={"#FF6A6A"} fontSize={"14px"}>
                    ₦0.00
                  </StatNumber>
                  <StatLabel fontSize={"12px"} color={"#606060"}>
                    Outstanding Balance
                  </StatLabel>
                </Stat>
                <Spacer />

                <Stack direction={"row"} alignSelf={"end"}>
                  <Text>1/5</Text>
                  <Box bg={"#E4E4E4"} cursor={"pointer"} borderRadius={"full"}>
                    <Image src={DirectionL} alt="Rimg" />
                  </Box>
                  <Box bg={"#E4E4E4"} cursor={"pointer"} borderRadius={"full"}>
                    <Image src={DirectionR} alt="Rimg" />
                  </Box>
                </Stack>
              </Flex>
            </Stack>
          </CardBody>
          {/* <CardFooter>
            <Button>View here</Button>
          </CardFooter> */}
        </Card>
      </GridItem>
      <GridItem>
        <Card h={"100%"} boxShadow={"md"} pt={"1em"}>
          <CardHeader>
            <Text color={"#12D8A0"} fontWeight={600}>
              Top Selling
            </Text>
            <Flex
              mt={"1em"}
              direction={"column"}
              justify={"center"}
              align={"start"}
            >
              <Stack align={"center"}>
                {/* <Image src={HomeP} alt="In" /> */}
                <Heading fontSize={"28px"}>₦ 0.00</Heading>
              </Stack>
              <Text>Total Sold</Text>
              {/* <Stack direction={"row"} align={"center"}>
                <Text color={"#CBCBCB"} fontSize={"12px"}>
                  View all
                </Text>
                <SlArrowRight color={"#CBCBCB"} fontSize={"10px"} />
              </Stack> */}
            </Flex>
          </CardHeader>
          <CardBody pt={"0"}>
            <Stack h={"100%"} direction={"row"}>
              <Box
                w={"85%"}
                h={"100%"}
                bg={"#F5F5F5"}
                borderRadius={"xl"}
                // border={"1px"}
                // borderColor={"#4545FE"}
              >
                <Flex h={"100%"} w={"100%"} align={"center"} justify={"center"}>
                  <Image src={Nimg} width={100} alt="Img" />
                </Flex>
              </Box>

              <Flex h={"100%"} w={"100%"} direction={"column"}>
                <Text>None</Text>
                <Spacer />
                <Stat>
                  <StatNumber fontSize={"16px"} color={"#CBCBCB"}>
                    0
                  </StatNumber>
                  <StatLabel fontSize={"12px"} color={"#606060"}>
                    Whole unit Sold
                  </StatLabel>
                </Stat>
                <Spacer />

                <Stack direction={"row"} alignSelf={"end"}>
                  <Text>1/5</Text>
                  <Box bg={"#E4E4E4"} cursor={"pointer"} borderRadius={"full"}>
                    <Image src={DirectionL} alt="Rimg" />
                  </Box>
                  <Box bg={"#E4E4E4"} cursor={"pointer"} borderRadius={"full"}>
                    <Image src={DirectionR} alt="Rimg" />
                  </Box>
                </Stack>
              </Flex>
            </Stack>
          </CardBody>
          {/* <CardFooter>
            <Button>View here</Button>
          </CardFooter> */}
        </Card>
      </GridItem>
      {/* <GridItem
        boxShadow={"md"}
        borderRadius={"md"}
        w={"475px"}
        h={"287px"}
      ></GridItem> */}
    </Grid>
  );
};

export default LowerBoard;
