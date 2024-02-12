import React from "react"
import sma from "./Assets/sma.jpg"
import { CgProfile } from "react-icons/cg"
import { AiOutlineLike } from "react-icons/ai"
import { GoComment } from "react-icons/go"
function Content() {
	return (
		<div className=" bg-white h-screen p-5 pt-8 w-full overflow-scroll">
			<div className=" flex flex-row text-sm md:text-2xl items-center justify-between">
				<h1 className=" text-2xl text-blue-700 hover:text-blue-300 transition-all duration-300 cursor-pointer">
					Posts
				</h1>
				<button className="bg-blue-500 py-2 px-4 text-white rounded hover:bg-white hover:text-blue-500 transition-all duration-500 md:text-sm">
					Create Post
				</button>
			</div>
			<div>
				<div>
					<CgProfile className="  text-2xl rounded cursor-pointer float-left mr-2" />
				</div>
				<div className="flex flex-col items-baseline justify-center m-3">
					<h1 className=" font-semibold mb-0">Kibet nathan</h1>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
						eius magni unde ex veniam neque totam culpa quas molestiae sequi
						recusandae, beatae necessitatibus inventore perferendis? Aut quasi
						aperiam iure vero.
					</p>
					<div className=" w-full max-w-sm rounded overflow-hidden shadow-lg">
						<img
							src={sma}
							alt=""
							loading="lazy"
							className="w-full h-64 object-cover"
						/>
					</div>
					<div className=" m-5 flex flex-row items-center justify-evenly w-full">
						<div className=" flex flex-row align-center justify-center">
							<AiOutlineLike className=" text-2xl cursor-pointer" />
							<h1 className=" text-xl pt-0 mt-0">10</h1>
						</div>

						<div className=" flex flex-row align-center justify-center">
							<GoComment className=" text-xl pt-1 pr-1 cursor-pointer" />
							<h1 className=" text-xl pt-0 mt-0">20</h1>
						</div>
					</div>
				</div>
				<div>
					<CgProfile className="  text-2xl rounded cursor-pointer float-left mr-2" />
				</div>
				<div className="flex flex-col items-baseline justify-center">
					<h1 className=" font-semibold mb-0">Kibet nathan</h1>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
						eius magni unde ex veniam neque totam culpa quas molestiae sequi
						recusandae, beatae necessitatibus inventore perferendis? Aut quasi
						aperiam iure vero.
					</p>
					<div className=" w-full max-w-sm rounded overflow-hidden shadow-lg">
						<img
							src={sma}
							alt=""
							loading="lazy"
							className="w-full h-64 object-cover"
						/>
					</div>
					<div>
						<CgProfile className="  text-2xl rounded cursor-pointer float-left mr-2" />
					</div>
					<div className="flex flex-col items-baseline justify-center">
						<h1 className=" font-semibold mb-0">Kibet nathan</h1>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
							eius magni unde ex veniam neque totam culpa quas molestiae sequi
							recusandae, beatae necessitatibus inventore perferendis? Aut quasi
							aperiam iure vero.
						</p>
						<div className=" w-full max-w-sm rounded overflow-hidden shadow-lg">
							<img
								src={sma}
								alt=""
								loading="lazy"
								className="w-full h-64 object-cover"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Content
