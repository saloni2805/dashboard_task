import React, { useContext } from "react"
import { TextField, InputAdornment } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import DashboardContext from "../context/DashboardContext"

const SearchBar = () => {
  const { searchWidget } = useContext(DashboardContext)

  const handleSearch = (e) => {
    searchWidget(e.target.value)
    console.log(e.target.value)
  }

  return (
    <TextField
      // label="Search"
      id="outlined-size-small"
      size="small"
      onChange={handleSearch}
      variant="outlined"
      placeholder="Search anything..."
      sx={{
        marginBottom: "4px",
        backgroundColor: "#e7f5fe",
        borderRadius: "5px",
        width: "60%",
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  )
}

export default SearchBar
