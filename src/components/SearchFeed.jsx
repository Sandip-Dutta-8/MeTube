import { React, useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";

import { fetchFromApi } from "../assets/fetchFromApi";
import { Videos } from "./";

const SearchFeed = () => {

  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${searchTerm}&maxResults=50`)
      .then((data) => setVideos(data.items))
  }, [searchTerm]);

  return (

    <Box p={2} minHeight="95vh" width="auto" display="flex" justifyContent="center" alignItems="center" flexDirection="column">
      <Typography variant="h4" fontWeight={900}  color="white" mb={3}>
        Search Results for <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
      </Typography>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Box display="flex" flexGrow={1}/>
        {<Videos videos={videos} />}
      </Box>
    </Box>
  );
};

export default SearchFeed