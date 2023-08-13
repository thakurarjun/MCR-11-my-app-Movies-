import { Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

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

DAtaaaaa
    </Box>
  )
}

export default MovieDetail