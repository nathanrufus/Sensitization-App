import React, { useState } from "react"
import sma from "./Assets/sma.jpg"
import { CgProfile } from "react-icons/cg"
import { AiOutlineLike } from "react-icons/ai"
import { GoComment } from "react-icons/go"
import { useNavigate } from "react-router-dom"
function Content() {
	const navigate= useNavigate()
	const comments=()=>{
		navigate('/comment')
	}
	const [open,setopen]=useState(true)
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
			<div className=" rounded-md border px-6 py-4 max-w-full mt-2 w-full">
				<div className=" flex ml-4">
					<img
						src={sma}
						alt="image"
						className="h-12 w-12 rounded-full overflow-hidden object-cover"
					/>
					<div className="flex flex-col ml-4">
						<h1 className=" font-semibold mb-0">Kibet nathan</h1>
						<span className="text-grey">@kibetnathan@gmail.com</span>
					</div>
				</div>
				<div className="flex flex-col items-baseline justify-center">
					<p onClick={()=>comments()}>
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
					<div className=" m-5 flex text-grey items-baseline w-full flex-col">
						<div className=" flex">
							<div class="flex items-center mr-8">
								<AiOutlineLike className=" text-2xl cursor-pointer" />
								<span>616</span>
							</div>
							<div class="flex items-center mr-4">
								<GoComment
									onClick={()=> setopen(!open)}
									className=" text-2xl pt-1 pr-1 cursor-pointer"
								/>
								<span>406</span>
							</div>
						</div>

						{/* comment section */}
						<div class={`lg:max-w-md ${open ? ' hidden' :' visible' } w-full mx-auto my-2 p-6 bg-white rounded-md`}>
							<h2 class="text-xl font-semibold mb-1">Comment</h2>
							<form class="flex items-start mb-1">
								<img
									src="https://source.unsplash.com/50x50/?avatar"
									alt="Your Avatar"
									class="w-8 h-8 rounded-full mr-2"
								/>
								<textarea
									class="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
									placeholder="Add your comment..."
								></textarea>
								<button
									type="submit"
									class="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md"
								>
									Post
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
			{/* <div className=" rounded-md border px-6 py-4 max-w-full mt-2 w-full">
				<div className=" flex ml-4">
					<CgProfile className="  text-2xl rounded cursor-pointer float-left mr-2" />
					<h1 className=" font-semibold mb-0">Kibet nathan</h1>
				</div>
				<div className="flex flex-col items-baseline justify-center">
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
					<div className=" m-5 flex text-grey items-center w-full">
						<div class="flex items-center mr-8">
							<AiOutlineLike className=" text-2xl cursor-pointer" />
							<span>616</span>
						</div>
						<div class="flex items-center mr-4">
							<GoComment className=" text-2xl pt-1 pr-1 cursor-pointer" />
							<span>406</span>
						</div>
					</div>
				</div>
			</div> */}
		</div>
	)
}

export default Content
