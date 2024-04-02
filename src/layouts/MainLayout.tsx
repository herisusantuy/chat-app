import { Flex } from "@mantine/core";
import React from "react";

interface MainLayoutProps {
  children: React.ReactElement;
}
const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Flex>
      <Flex>{children}</Flex>
    </Flex>
  );
};

export default MainLayout;
