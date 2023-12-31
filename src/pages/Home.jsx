import { Box, Button, Heading, Select, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Header from "../components/Header";
import { movies } from "../data";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(movies);

  const [watchlist, setWatchlist] = useState([]);

  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredMovies(filtered);
    
  };

  const handleMovieDetail = (item) => {
    navigate("/movie-detail", { state: item });
    console.log(item);
  };


  const handleWatchlistData = (index) => {
    const movieToAdd = movies.filter((_,i) => i === index);
      setWatchlist([...watchlist,movieToAdd[0]]);
      navigate("/watchlist")
  }

  return (
    <Box w="100%">
      <Header
        handleInputChange={handleInputChange}
        setFilteredMovies={setFilteredMovies}
        filteredMovies={filteredMovies}
        setSearchQuery={setSearchQuery}
        searchQuery={searchQuery}
      />
      <Box>
        <Box display="flex" justifyContent={"space-between"} p={3}>
          <Heading as="h5" size="sm">
            Movies
          </Heading>

          <Select placeholder="All Genre" w="17%">
            <option value="drama">Drama </option>
            <option value="crime">Crime</option>
            <option value="action">Action</option>
            <option value="adventure">Adventure</option>
            <option value="fantasy">Fantasy</option>
            <option value="romance">Romance</option>
          </Select>

          <Select placeholder="Release Year" w="17%">
            <option value="1992">1992</option>
            <option value="1994">1994 </option>
            <option value="1998">1998</option>
            <option value="2003">2003</option>
            <option value="2008">2008</option>
          </Select>

          <Select placeholder="Rating" w="17%">
            <option value="1-5">1-5</option>
            <option value="6-10">6-10</option>
          </Select>

          <Button bg="gray.100">Add a Movie</Button>
        </Box>

        <Box
          w="full"
          display="flex"
          gap={6}
          p={4}
          overflowX="auto"
          overflowY={"auto"}
        >
          {filteredMovies.map((item,i) => (
            <>
              <Box
                w="full"
                gap={6}
               
              >
                <Box  cursor={"pointer"}
                onClick={() => handleMovieDetail(item)}>
                <img src={item.imageURL} alt="img" />
                <Heading as="h4" size="md">
                  {item.title}
                </Heading>
                <Text>{item.summary}</Text>
                </Box>
                <Box>
                  <Button>Start</Button>
                  <Button mt={5} onClick={()=>handleWatchlistData(i)}>Add to Watchlist</Button>
                </Box>
              </Box>
            </>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
