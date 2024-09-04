import React, { useState } from "react"
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material"
import { useContext } from "react"
import DashboardContext from "../context/DashboardContext"

const AddWidgetButton = ({ categoryId }) => {
  const [open, setOpen] = useState(false)
  const [widgetName, setWidgetName] = useState("")
  const [widgetText, setWidgetText] = useState("")
  const { addWidget } = useContext(DashboardContext)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleSubmit = () => {
    addWidget(categoryId, widgetName, widgetText)
    setWidgetName("")
    setWidgetText("")
    handleClose()
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        + Add Widget
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Widget</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Widget Name"
            fullWidth
            value={widgetName}
            onChange={(e) => setWidgetName(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Widget Text"
            fullWidth
            value={widgetText}
            onChange={(e) => setWidgetText(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default AddWidgetButton
