import React, { useState } from "react"
import {
  Button,
  Drawer,
  Box,
  Tabs,
  Tab,
  Checkbox,
  Typography,
} from "@mui/material"
import { useContext } from "react"
import DashboardContext from "../context/DashboardContext"
import CloseIcon from "@mui/icons-material/Close"

const AddCategoryButton = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [selectedTab, setSelectedTab] = useState(0)
  const { categories, toggleWidgetVisibility } = useContext(DashboardContext)

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen)
  }

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue)
  }

  return (
    <Box>
      <Button
        variant="outlined"
        onClick={handleDrawerToggle}
        sx={{ backgroundColor: "white" }}
      >
        Add Widget +
      </Button>
      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#2B35BC",
            color: "white",
          }}
        >
          <Typography
            sx={{
              marginLeft: "10px",
            }}
          >
            Add Widget
          </Typography>
          <CloseIcon onClick={handleDrawerToggle}></CloseIcon>
        </Box>

        <Box sx={{ width: 600, padding: 2 }}>
          <Tabs
            value={selectedTab}
            onChange={handleTabChange}
            orientation="horizontal"
            variant="scrollable"
            sx={{ borderRight: 1, borderColor: "divider" }}
          >
            {categories.map((category, index) => (
              <Tab key={category.id} label={category.name} />
            ))}
          </Tabs>

          <Box sx={{ padding: 2 }}>
            {categories[selectedTab].widgets.map((widget) => (
              <Box
                key={widget.id}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Checkbox
                  checked={widget.visible}
                  onChange={() =>
                    toggleWidgetVisibility(
                      categories[selectedTab].id,
                      widget.id
                    )
                  }
                />
                <Typography>{widget.name}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Drawer>
    </Box>
  )
}

export default AddCategoryButton
