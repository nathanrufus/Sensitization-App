import React, { useState, useEffect } from "react"
import sma from "./Assets/sma.jpg"
import { AiOutlineLike } from "react-icons/ai"
import { GoComment } from "react-icons/go"
import { useNavigate } from "react-router-dom"
function Content({ item }) {
	const navigate = useNavigate()

	const [open, setopen] = useState(true)

	return (
		<div>
			<div className=" bg-white h-screen p-5 pt-8 w-full overflow-scroll">
				<div className=" flex flex-row text-sm md:text-2xl items-center justify-between">
					<h1 className=" text-2xl text-blue-700 hover:text-blue-300 transition-all duration-300 cursor-pointer">
						Posts
					</h1>
					<button className="bg-blue-500 py-2 px-4 text-white rounded hover:bg-white hover:text-blue-500 transition-all duration-500 md:text-sm">
						Create Post
					</button>
				</div>
				{item?.map((obj) => (
					<div className=" rounded-md border px-6 py-4 max-w-full mt-2 w-full">
						<div className=" flex ml-4">
							<img
								src={sma}
								alt="image"
								className="h-12 w-12 rounded-full overflow-hidden object-cover"
							/>
							<div className="flex flex-col ml-4">
								<h1 className=" font-semibold mb-0">{obj.name}</h1>
								<span className="text-grey">{obj.email}</span>
							</div>
						</div>
						<div className="flex flex-col items-baseline justify-center">
							<p>{obj.message}</p>
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
										<span>{obj.likes}</span>
									</div>
									<div class="flex items-center mr-4">
										<GoComment
											onClick={() => setopen(!open)}
											className=" text-2xl pt-1 pr-1 cursor-pointer"
										/>
										<span>406</span>
									</div>
								</div>

								{/* comment section */}
								<div
									class={`lg:max-w-md ${
										open ? " hidden" : " visible"
									} w-full mx-auto my-2 p-6 bg-white rounded-md`}
								>
									<h3 class="font-bold">Comments</h3>

									<form>
										<div class="flex flex-col">
											<div class="border rounded-md p-3 ml-1 my-2">
												<div class="flex gap-3 items-center">
													<img
														src="https://avatars.githubusercontent.com/u/22263436?v=4"
														class="object-cover w-8 h-8 rounded-full 
					     border-2 border-emerald-400  shadow-emerald-400
					"
													/>
													<h3 class="font-bold">{obj.name}</h3>
												</div>
												<p class="text-gray-600 mt-2">{obj.comments} </p>
											</div>
										</div>

										<div class="w-full px-3 my-1">
											<textarea
												class="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
												name="body"
												placeholder="Type Your Comment"
												required
											></textarea>
										</div>

										<div class="w-full flex justify-end px-3">
											<input
												type="submit"
												class="px-2.5 py-1.5 rounded-md text-white text-sm bg-indigo-500"
												value="Post Comment"
											/>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
			))}

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
		</div>
	)
}

export default Content
