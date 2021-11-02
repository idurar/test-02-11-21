import React from "react";
import {
  
  Box,

  Stack,
  Heading,
    Text,
  Button,
} from "@chakra-ui/react";


export default function MainContent() {
    return (
       <div
        style={{
          padding: "40px",
          margin:"0 auto",
          width: "100%",
          maxWidth:"500px"
        }}
      >
        
            
          <Box maxW="32rem">
              <center>
              
                  <Heading as="h1" size="xl">
                    Welcome to SterBleu
              </Heading>
              <Heading as="h2" size="xl" colorScheme="teal" style={{color:"#40E0D0"}}>
                This is an empty view
              </Heading>
              <Text mt="30px" colorScheme="grey" >SuperBlock is simple modular library that allow to compose views with tools , giving you all the building blocks you need to build complex Saas applications</Text>
                <Stack mt="30px" direction="row" justify="center" spacing={2}>
                    <Button  size="md"  colorScheme="gray" variant="solid">
                        Get Started
                    </Button>
                      <Button  size="md"  colorScheme="gray" variant="solid">
                        Add New View
                    </Button>  
                </Stack>
            </center>
              </Box>
                
              
            
           
        
      </div>
    
  );
}

