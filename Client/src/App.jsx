import React from "react"
import "tw-elements-react/dist/css/tw-elements-react.min.css"
import Home from "./components/Home"
import { Route, Routes } from "react-router-dom"
import About from "./components/About"
import Navbar from "./components/Navbar"
import Rightside from "./components/Rightside"
import Comments from "./components/Comments"
import Profile from "./components/Profile"
import Register from "./components/Register"
import Login from "./components/Login"
import CreatePost from "./components/CreatePost"
function App() {
	return (
		<div className=" flex flex-row items-center justify-between">
			<Navbar />
			<Routes>
				<Route path="/profile" element={<Profile />} />
				<Route path="/register" element={<Register />} />
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/login" element={<Login />} />
				<Route path="/createpost" element={<CreatePost />} />
			</Routes>
			<Rightside />
			{/* <Register/> 
			 <Login/> */}
		</div>
	)
}

export default App
