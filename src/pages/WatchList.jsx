import { Box, Button, Heading, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useLocation } from 'react-router-dom'

const WatchList = () => {
    const {state} = useLocation();
    const [watchlist,setWatchlist] = useState();
    console.log(state,"===>state")

    useEffect(() => {
        setWatchlist(state)
    },[state])

    console.log(watchlist,"watchlistData-==>")
  return (
    <Box>
        <Header />
        <Box display={"flex"} p={8} justifyContent={"space-around"}>
        <>
        <Box w="40%" h="70%">
            <img src={watchlist?.imageURL} alt="img" />
        </Box>
     <Box w="60%">

        <Heading as="h4" size="md">{watchlist?.title}</Heading>
        <Text>{watchlist?.summary}</Text>
        <Text mt={2}>Year : {watchlist?.year} </Text>
        <Text mt={2}>Genre : {watchlist?.genre[0]} </Text>
        <Text mt={2}>Rating : {watchlist?.rating} </Text>
        <Text mt={2}>Director : {watchlist?.director} </Text>
        <Text mt={2}>Writer : {watchlist?.writer} </Text>
        <Text mt={2}>Cast : {watchlist?.cast?.map((item) => (
            <Text>{item}</Text>
        ))} </Text>
        <Box display={"flex"} justifyContent={"space-between"} p={8}>
 <Box justifyContent={"center"} alignItems={"center"}>
 <Button bg="gray.100" ml={"240px"}>Remove From Watchlist</Button>
 </Box>
  
        </Box>
     </Box>
     </>
     
  </Box>
    </Box>
  )
}

export default WatchList