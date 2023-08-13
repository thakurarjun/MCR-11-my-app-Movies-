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
    const movieToAdd = movies.find((movie) => movie.id === item);
    if (movieToAdd) {
      setWatchlist((prevWatchlist) => [...prevWatchlist, movieToAdd]);
      localStorage.setItem(
        "watchlist",
        JSON.stringify([...watchlist, movieToAdd])
      );
    }

    navigate("/movie-detail", { state: movieToAdd });
    console.log(item);
  };

  const handleWatchlistData = (item) => {
    navigate("/watchlist", { state: item });
  };

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
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>

          <Select placeholder="Release Year" w="17%">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>

          <Select placeholder="Rating" w="17%">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
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
          {filteredMovies.map((item) => (
            <>
              <Box w="full" gap={6}>
                <Box cursor={"pointer"} onClick={() => handleMovieDetail(item)}>
                  <img src={item.imageURL} alt="img" />
                  <Heading as="h4" size="md">
                    {item.title}
                  </Heading>
                  <Text>{item.summary}</Text>
                </Box>
                <Box>
                  <Button>Start</Button>
                  <Button mt={5} onClick={() => handleWatchlistData(item)}>
                    Add to Watchlist
                  </Button>
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
