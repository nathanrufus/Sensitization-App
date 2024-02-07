import React from "react"
import { CiSearch } from "react-icons/ci"

function Rightside() {
	return (
		<div className=" rightside p-5 pt-2 h-screen w-7/12">
			<div className=" flex items-center rounded-md bg-[#f3e8e8] mt-6 px-4 py-2">
				<CiSearch className=" text-blue-300 text-lg block float-left cursor-pointer mr-2" />
				<input
					type={"search"}
					placeholder="search"
					className=" text-base bg-transparent w-full text-black focus:outline-none"
				/>
			</div>
		</div>
	)
}

export default Rightside
