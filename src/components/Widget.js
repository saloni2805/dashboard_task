import React, { useContext } from "react"
import { Box, Typography, Button, Card, CardContent } from "@mui/material"

const Widget = ({ widget }) => {
  return (
    <Card
      sx={{
        border: "7px solid lightgrey",
        borderRadius: "5px",
        padding: "1px",
        marginTop: "5px",
        marginRight: "5px",
        width: "250px",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <CardContent>
        <Box>
          <Typography variant="h6" sx={{ marginBottom: "5px" }}>
            {widget.name}
          </Typography>
          <Typography sx={{ marginBottom: "5px" }}>{widget.text}</Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

export default Widget
