import React from "react"
import DashboardProvider from "./context/DashboardProvider"
import Dashboard from "./components/Dashboard"
import Header from "./components/Header"

const App = () => {
  return (
    <DashboardProvider>
      <Header />
      <Dashboard />
    </DashboardProvider>
  )
}

export default App
