import { Box, Heading, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { movies } from "../data";

const Header = () => {
  const [searchData, setSearchData] = useState(movies);

  const handleSearch = (e) => {
    const filterData = searchData.filter((item) => item.title.LowerCase());
    setSearchData(filterData);
  };
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
          <Heading as="h4" size="md">
            IMBD
          </Heading>
        </Box>

        <Box w="40%">
          <Input
            placeholder="Search movies by title,cast...."
            shadow={"lg"}
            onChange={handleSearch}
          />
        </Box>

        <Box display={"flex"} justifyContent={"space-between"} w="25%">
          <Heading as="h5" size="sm">
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
