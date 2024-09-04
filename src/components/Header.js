import React from "react"
import { Box, Breadcrumbs } from "@mui/material"
import Link from "@mui/material/Link"
import SearchBar from "./SearchBar"

const Header = () => {
  const handleBreadcrumbClick = (event) => {
    event.preventDefault()
    console.log("Breadcrumb clicked")
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1px 20px",
        borderBottom: "1px solid #ddd",
      }}
    >
      {/* Breadcrumb on the left side */}
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        <Link
          underline="hover"
          color="inherit"
          href="/"
          onClick={handleBreadcrumbClick}
        >
          Home
        </Link>
        <Link
          underline="hover"
          color="text.primary"
          href="/dashboard"
          onClick={handleBreadcrumbClick}
        >
          Dashboard
        </Link>
      </Breadcrumbs>

      {/* Search Bar in the middle */}
      <Box sx={{ width: "50%" }}>
        <SearchBar />
      </Box>
    </Box>
  )
}

export default Header
