import { Box, Heading, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { movies } from "../data";
import { useNavigate } from "react-router-dom";

const Header = ({handleInputChange,searchQuery}) => {
    const navigate = useNavigate()

  return (
    <Box>
      <Box
        display="flex"
        justifyContent={"space-between"}
        p={6}
        bg="gray.100"
        borderRadius={"lg"}
      >
        <Box>
          <Heading as="h4" size="md" onClick={() =>navigate("/")} cursor="pointer">
            IMBD
          </Heading>
        </Box>

        <Box w="40%">
          <Input
            placeholder="Search movies by title,cast...."
            shadow={"lg"}
            value={searchQuery}
            onChange={handleInputChange}
          />
        </Box>

        <Box display={"flex"} justifyContent={"space-between"} w="25%">
          <Heading as="h5" size="sm" onClick={() => navigate("/")} cursor={"pointer"}>
            Movies{" "}
          </Heading>
          <Heading as="h5" size="sm">
            Watch List
          </Heading>
          <Heading as="h5" size="sm">
            Starred Movies
          </Heading>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
