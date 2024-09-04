import React, { useState } from "react"
import DashboardContext from "./DashboardContext"

const DashboardProvider = ({ children }) => {
  const [categories, setCategories] = useState([
    {
      id: "1",
      name: "CSPM Executive Dashboard",
      widgets: [
        {
          id: "1",
          name: "Widget 1",
          text: "Random Text for Widget 1",
          visible: true,
        },
        {
          id: "2",
          name: "Widget 2",
          text: "Random Text for Widget 2",
          visible: true,
        },
      ],
    },
    {
      id: "2",
      name: "CWPP Dashboard",
      widgets: [
        {
          id: "3",
          name: "Widget 3",
          text: "Random Text for Widget 3",
          visible: true,
        },
        {
          id: "4",
          name: "Widget 4",
          text: "Random Text for Widget 4",
          visible: true,
        },
      ],
    },
  ])

  const addWidget = (categoryId, name, text) => {
    const newCategories = categories.map((category) =>
      category.id === categoryId
        ? {
            ...category,
            widgets: [
              ...category.widgets,
              { id: Date.now().toString(), name, text, visible: true },
            ],
          }
        : category
    )
    setCategories(newCategories)
  }

  const toggleWidgetVisibility = (categoryId, widgetId) => {
    const newCategories = categories.map((category) =>
      category.id === categoryId
        ? {
            ...category,
            widgets: category.widgets.map((widget) =>
              widget.id === widgetId
                ? { ...widget, visible: !widget.visible }
                : widget
            ),
          }
        : category
    )
    setCategories(newCategories)
  }

  return (
    <DashboardContext.Provider
      value={{ categories, addWidget, toggleWidgetVisibility, setCategories }}
    >
      {children}
    </DashboardContext.Provider>
  )
}

export default DashboardProvider
