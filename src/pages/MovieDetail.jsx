import { Box, Button, Heading, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../components/Header'

const MovieDetail = () => {
    const {state} = useLocation()
    const [movieDetailData,setMovieDetailData] = useState()
    console.log(state,"state")
    useEffect(() => {
        setMovieDetailData(state)
    },[state])

    console.log(movieDetailData,"===>movieDetailData")
  return (
    <Box>
  <Header />
  <Box display={"flex"} p={8} justifyContent={"space-around"}>
        <>
        <Box w="40%" h="70%">
            <img src={movieDetailData?.imageURL} alt="img" />
        </Box>
     <Box w="60%">

        <Heading as="h4" size="md">{movieDetailData?.title}</Heading>
        <Text>{movieDetailData?.summary}</Text>
        <Text mt={2}>Year : {movieDetailData?.year} </Text>
        <Text mt={2}>Genre : {movieDetailData?.genre[0]} </Text>
        <Text mt={2}>Rating : {movieDetailData?.rating} </Text>
        <Text mt={2}>Director : {movieDetailData?.director} </Text>
        <Text mt={2}>Writer : {movieDetailData?.writer} </Text>
        <Text mt={2}>Cast : {movieDetailData?.cast?.map((item) => (
            <Text>{item}</Text>
        ))} </Text>
        <Box display={"flex"} justifyContent={"space-between"} p={8}>
  <Button bg="gray.100">Start</Button>
  <Button bg="gray.100">Add to Watchlist</Button>
        </Box>
     </Box>
     </>
     
  </Box>

    </Box>
  )
}

export default MovieDetail