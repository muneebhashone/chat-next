import { Box } from "@chakra-ui/react";
import React from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box>
      <Header />
      <Sidebar>{children}</Sidebar>
    </Box>
  );
};
