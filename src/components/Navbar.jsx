import React from "react"
import { Link } from "react-router-dom"
import { BsArrowThroughHeartFill } from "react-icons/bs"
import { FaHome } from "react-icons/fa"
import { FcAbout } from "react-icons/fc"
import { MdContactSupport } from "react-icons/md"
import { AiFillProfile } from "react-icons/ai"
import { CgProfile } from "react-icons/cg"

function Navbar() {
	return (
		<div className=" navbar bg-white h-screen p-5 pt-8 w-80 flex flex-col border-r-[1px] items-baseline">
			<div className=" inline-flex">
				<BsArrowThroughHeartFill className=" bg-amber-300 text-4xl rounded cursor-pointer float-left mr-2" />
				<h1 className=" text-blue-600 origin-left font-medium text-2xl">
					Sensitize App
				</h1>
			</div>
			<div className=" flex flex-col items-baseline justify-between my-7">
				<ul className=" flex flex-col">
					<div className=" flex flex-row items-center hover:bg-blue-400 transition-all duration-200 mb-2 hover:rounded-[2rem] p-2">
						<Link to="/">
							<FaHome className="  text-2xl rounded cursor-pointer float-left mr-2" />
						</Link>
						<Link to="/" className="  list text-2xl">
							Home
						</Link>
					</div>
					<div className=" flex flex-row items-center hover:bg-blue-400 transition-all duration-200 mb-1 hover:rounded-[2rem] p-2">
						<Link to="/about">
							<FcAbout className="   text-2xl rounded cursor-pointer float-left mr-2" />
						</Link>

						<Link to="/about" className=" list  text-2xl">
							About
						</Link>
					</div>
					<div className=" flex flex-row items-center hover:bg-blue-400 transition-all duration-200 mb-1 hover:rounded-[2rem] p-2">
						<Link to="contact">
							<MdContactSupport className="  text-2xl rounded cursor-pointer float-left mr-2" />
						</Link>
						<Link to="/contact" className=" list text-2xl">
							Contact us
						</Link>
					</div>
					<div className=" flex flex-row items-center hover:bg-blue-400 transition-all duration-200  hover:rounded-[2rem] p-2">
						<Link to="profile">
							<AiFillProfile className="  text-2xl rounded cursor-pointer float-left mr-2" />
						</Link>
						<Link to="profile" className=" list text-2xl">
							profile
						</Link>
					</div>
				</ul>
				<div>
					<button className=" btn  my-16 p-4 px-10 bg-blue-900 text-white rounded-[2rem] hover:text-blue-900 hover:bg-white transition-all duration-300">
						Logout
					</button>
				</div>
				<div className=" prof flex flex-row hover:bg-blue-400 transition-all duration-200 my-4 mt-7 hover:rounded-[2rem] p-4 ">
					<div>
						<CgProfile className="  text-2xl rounded cursor-pointer float-left mr-2" />
					</div>
					<div className="flex flex-col items-baseline justify-center">
						<h1 className=" font-semibold mb-0">Kibet nathan</h1>
						<h2>@kibetnathan@gmail.com</h2>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar
