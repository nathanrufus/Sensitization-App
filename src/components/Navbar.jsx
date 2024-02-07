import React from "react"
import { BsArrowThroughHeartFill } from "react-icons/bs"

function Navbar() {
	return (
		<div className=" navbar bg-white h-screen p-5 pt-8 w-7/12">
			<div className=" inline-flex">
				<BsArrowThroughHeartFill className=" bg-amber-300 text-4xl rounded cursor-pointer float-left mr-2" />
                <h1 className=" text-blue-600 origin-left font-medium text-2xl">Sensitize App</h1>
			</div>
           
		</div>
	)
}

export default Navbar
