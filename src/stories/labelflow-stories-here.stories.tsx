import React from "react";

import { ChakraProvider } from "@chakra-ui/react";

import { MyComponent } from "../index";

export default {
  title: "Exercise Component",
  // If you don't want to use Chakra, you can simply remove this decorator
  decorators: [
    (Story) => (
      <ChakraProvider resetCSS>
        <Story />
      </ChakraProvider>
    ),
  ],
};

export const Basic = () => <MyComponent />;
