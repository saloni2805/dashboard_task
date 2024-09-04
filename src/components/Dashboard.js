import React, { useContext, useState } from "react"
import {
  Box,
  Button,
  Card,
  CardContent,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material"
import Widget from "./Widget"
import AddWidgetButton from "./AddWidgetButton"
import AddCategoryButton from "./AddCategoryButton"
import DashboardContext from "../context/DashboardContext"
import AutorenewIcon from "@mui/icons-material/Autorenew"
import MoreVertSharpIcon from "@mui/icons-material/MoreVertSharp"
import WatchLaterIcon from "@mui/icons-material/WatchLater"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"

const Dashboard = () => {
  const { categories, setCategories } = useContext(DashboardContext)
  const [anchorEl, setAnchorEl] = useState(null)
  const [selectedOption, setSelectedOption] = useState("Last 2 Days")

  const handleRefresh = () => {
    // Reset all widgets visibility to true
    const refreshedCategories = categories.map((category) => ({
      ...category,
      widgets: category.widgets.map((widget) => ({
        ...widget,
        visible: true,
      })),
    }))

    setCategories(refreshedCategories)
    console.log("Dashboard refreshed")
  }

  const handleMenuClick = () => {
    // Implement menu logic here
    console.log("Menu clicked")
  }

  const handleDropdownClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleDropdownClose = (option) => {
    setAnchorEl(null)
    if (option) {
      setSelectedOption(option)
    }
  }

  return (
    <Box
      sx={{
        backgroundColor: "#e7f5fe",
        padding: "20px",
        borderRadius: "8px",
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "center", md: "space-between" },
          alignItems: "center",
          paddingBottom: "20px",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Typography variant="h4" sx={{ marginBottom: { xs: "10px", md: "0" } }}>
          CNAPP Dashboard
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <AddCategoryButton />
          <Button
            onClick={handleRefresh}
            sx={{ marginLeft: 1, backgroundColor: "white" }}
            variant="outlined"
          >
            <AutorenewIcon />
          </Button>
          <Button
            onClick={handleMenuClick}
            sx={{ marginLeft: 1, backgroundColor: "white" }}
            variant="outlined"
          >
            <MoreVertSharpIcon />
          </Button>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginLeft: 1,
              backgroundColor: "white",
            }}
          >
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleDropdownClick}
              startIcon={<WatchLaterIcon />}
              variant="outlined"
              endIcon={<ArrowDropDownIcon />}
            >
              {selectedOption}
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={() => handleDropdownClose()}
            >
              <MenuItem onClick={() => handleDropdownClose("Last 2 Days")}>
                Last 2 Days
              </MenuItem>
              <MenuItem onClick={() => handleDropdownClose("Last Week")}>
                Last Week
              </MenuItem>
              <MenuItem onClick={() => handleDropdownClose("Last Month")}>
                Last Month
              </MenuItem>
            </Menu>
          </Box>
        </Box>
      </Box>

      {/* Main Content Area with Background Color */}
      <Box
        sx={{
          padding: { xs: "10px", md: "20px" },
          borderRadius: "8px",
          width: "100%",
        }}
      >
        {categories.map((category) => (
          <Box key={category.id} sx={{ marginBottom: "40px" }}>
            {/* Category Title */}
            <Typography variant="h5" sx={{ marginBottom: "10px" }}>
              {category.name}
            </Typography>

            {/* Add Widget Button */}
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
              {category.widgets
                .filter((widget) => widget.visible)
                .map((widget) => (
                  <Widget
                    key={widget.id}
                    widget={widget}
                    categoryId={category.id}
                  />
                ))}

              {/* Add Widget Button Card at the end */}
              <Card
                sx={{
                  minWidth: 250,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "7px solid lightgrey",
                  borderRadius: "5px",
                  padding: "1px",
                  marginTop: "5px",
                  marginRight: "5px",
                  width: "250px",
                  backgroundColor: "white",
                  flexDirection: "column",
                  maxHeight: 200,
                }}
              >
                <CardContent>
                  <AddWidgetButton categoryId={category.id} />
                </CardContent>
              </Card>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default Dashboard
