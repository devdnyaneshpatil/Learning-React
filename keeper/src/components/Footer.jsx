import { Box, Heading, ListItem, UnorderedList } from "@chakra-ui/react";
import React from "react";

function Footer() {
  return (
    <Box>
      <Box display={'flex'} justifyContent={"space-around"} bg={"gray"}>
        <Box>
          <Heading>About Us</Heading>
          <UnorderedList>
            <ListItem>Lorem ipsum dolor sit amet</ListItem>
            <ListItem>Consectetur adipiscing elit</ListItem>
            <ListItem>Integer molestie lorem at massa</ListItem>
            <ListItem>Facilisis in pretium nisl aliquet</ListItem>
          </UnorderedList>
        </Box>
        <Box>
          <Heading>About Us</Heading>
          <UnorderedList>
            <ListItem>Lorem ipsum dolor sit amet</ListItem>
            <ListItem>Consectetur adipiscing elit</ListItem>
            <ListItem>Integer molestie lorem at massa</ListItem>
            <ListItem>Facilisis in pretium nisl aliquet</ListItem>
          </UnorderedList>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
