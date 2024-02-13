import React from "react"
import Home from "./components/Home"
import { Route, Routes } from "react-router-dom"
import About from "./components/About"
import Navbar from "./components/Navbar"
import Rightside from "./components/Rightside"
import Comments from "./components/Comments"
import Profile from "./components/Profile"
function App() {
	return (
		<div className=" flex flex-row items-center justify-between">
			<Navbar />
			<Routes>
				<Route path="/profile" element={<Profile />} />
				<Route path="/comment" element={<Comments />} />
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
			</Routes>
			<Rightside />
		</div>
	)
}

export default App
