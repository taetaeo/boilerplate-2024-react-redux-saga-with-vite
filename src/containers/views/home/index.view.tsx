import React from "react";
import { Flex, Typography } from "@/components/atoms";

const HomePage = () => {
  return (
    <div className="main-content">
      <Flex as="span" dir="row">
        <Typography as="h1">This</Typography>
      </Flex>
      <Flex as="span" dir="row">
        <Typography as="h1">is</Typography>
      </Flex>
      <Flex as="span" dir="row">
        <Typography as="h1">Home Page</Typography>
      </Flex>
    </div>
  );
};

export default HomePage;
