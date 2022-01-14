import React from "react"
import Navbar from "./Navbar"
import "../styles/global.css"

export default function Layout({ children }) {
  return (
    <div className="container mx-auto">
      <Navbar />
      <div className="content">{children}</div>
      <footer>
        <p className="text-center">Copyright 2021 Web Warrior</p>
      </footer>
    </div>
  )
}
