import React from 'react'

import { Stack, Box } from "@mui/material";

import { ChannelCard, Loader, VideoCard } from "./";

const Videos = ({ videos, direction }) => {
  if(!videos?.length) return <Loader />;
    console.log(videos);

  return (
    <Stack direction={direction || "row"} flexWrap="wrap" sx={{justifyContent: {xs: "center", sm: "center", md: "center"}}} alignItems="center" gap={2} flexGrow={1}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} /> }
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
    //<div>videos</div>
  )
}

export default Videos