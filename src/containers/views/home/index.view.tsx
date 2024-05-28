import React from "react";
import { Button, Flex, Typography } from "@/components/atoms";

const HomePage = () => {
  return (
    <div className="main-content">
      <Flex as="span" dir="row" justify="center">
        <Typography as="span" variant="h1">
          This
        </Typography>
      </Flex>
      <Flex as="span" dir="row" justify="center">
        <Typography as="span" variant="h2">
          is
        </Typography>
      </Flex>
      <Flex as="span" dir="row" justify="center">
        <Typography as="span" variant="h3">
          Home Page
        </Typography>
      </Flex>

      <Flex as="span" dir="row" justify="center">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
      </Flex>
    </div>
  );
};

export default HomePage;
