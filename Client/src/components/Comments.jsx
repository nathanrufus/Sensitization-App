import React from "react"
import sma from "./Assets/sma.jpg"
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function Comments() {
	const navigate=useNavigate()
	const Back=()=>{
		navigate('/')
	}
	return (
		<div className="  bg-white h-screen p-5 pt-8 w-full overflow-scroll">
			<div className=" rounded-md border px-6 py-4 max-w-full mt-2 w-full">
			<IoIosArrowRoundBack onClick={()=>Back()} className=" text-2xl cursor-pointer"/>
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

			<div class="w-full bg-white rounded-lg border p-2 flex items-baseline flex-col justify-center">
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
								<h3 class="font-bold">User name</h3>
							</div>
							<p class="text-gray-600 mt-2">
								this is sample commnent which i am trying to make{" "}
							</p>
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
	)
}

export default Comments
