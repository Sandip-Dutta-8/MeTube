import React from 'react'
import { Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { logo } from '../assets/constant'
import { SearchBar } from './index'

const Navbar = () => {
  return (
    <Stack alignItems="center" p={2} zIndex={10} sx={{ position:  "sticky", background: '#000', top: 0, justifyContent: "space-between", flexDirection: { sx: "column", md: "row" }, gap: "10px"}}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
        <Typography variant="h5" fontWeight="bold" sx={{ color: "white"}} ml={2}>
           Me<span style={{ color: "#FC1503" }}>Tube</span>
        </Typography>
    </Link>
    <SearchBar />
  </Stack>
  )
}

export default Navbar