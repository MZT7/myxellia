"use client";
import Image from "next/image";
import Dashboard from "../components/pagesComponent/dashboard/dashboard";
import Header from "@/components/inc/Header";
import { Box, useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [value, onChange] = useState(new Date());
  return (
    <Box w={{ base: "100%" }}>
      <Header onOpen={onOpen} btnRef={btnRef} />
      <Dashboard
        isOpen={isOpen}
        // onOpen={onOpen}
        onClose={onClose}
        btnRef={btnRef}
        value={value}
        onChange={onChange}
      />
    </Box>
  );
}
