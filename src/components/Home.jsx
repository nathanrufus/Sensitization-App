import React from "react"
import Navbar from "./Navbar"
import Rightside from "./Rightside"
import Content from "./Content"

function Home() {
	return (
		<div className=" flex flex-row items-center justify-between">
			<Navbar />
			<Content />
			<Rightside />
		</div>
	)
}

export default Home
