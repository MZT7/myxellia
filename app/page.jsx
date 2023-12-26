import Image from "next/image";
import Dashboard from "../components/pagesComponent/dashboard/dashboard";
import Header from "@/components/inc/Header";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box w={{ base: "100%" }}>
      <Header />
      <Dashboard />
    </Box>
  );
}
