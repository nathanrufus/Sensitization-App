import React from "react"
import { CiSearch } from "react-icons/ci"

function Rightside() {
	return (
		<div className=" flex flex-col rightside p-5 pt-2 h-screen w-5/12 border-l-[1px] ">
			<div className=" flex flex-col items-baseline rounded-md  mt-4 px-4 py-2 outline-2">
				<form class="flex items-center">
					<label for="simple-search" class="sr-only">
						Search
					</label>
					<div class="relative w-full">
						<div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
							<CiSearch className=" text-blue-300 text-lg block float-left cursor-pointer mr-2" />
						</div>
						<input
							type="text"
							id="simple-search"
							class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Search"
							required
						/>
					</div>
					<button
						type="submit"
						class="  p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						Search
					</button>
				</form>
				<div className=" border-spacing-1 bg-slate-300 p-4 rounded-[1rem] my-6">
					<h1 className=" text-2xl text-blue-500 stroke-emerald-700 font-semibold">
						Let's sensitize ourselves:
					</h1>
					<p className=" text-black font-light">
						Sensitization literally means making people 'sensitive' about an
						issue. This is the core of awareness raising and is what you ideally
						want to achieve, that people become aware and react to certain
						issues.
					</p>
				</div>
				<div className=" flex flex-col items-baseline border-spacing-1 p-2 rounded-[1rem] my-8 w-full">
					<h1 className=" text-2xl text-blue-500 stroke-emerald-700 font-semibold ">
						Reviews
					</h1>
					<form action="">
						<textarea
							name="review"
							id=""
							className=" border-2 rounded-md my-4 flex items-center justify-center w-56 h-12"
						></textarea>
						<button
							type="submit"
							className=" btn bg-blue-500 py-2 px-2 text-white rounded hover:bg-white hover:text-blue-500 transition-all duration-500"
						>
							Submit
						</button>
					</form>
				</div>
				<div className=" flex flex-row items-center justify-evenly ">
					<div className=" flex flex-row items-center justify-between">
						<p className=" font-light text-black text-sm p-2 hover:text-[#141414] shadow-sm transition-all duration-500">
							@Copyright Kibet Nathan
						</p>
						<p className=" font-light text-black  text-sm p-4 hover:text-[#141414] shadow-sm transition-all duration-500">
							Fullstack Developer
						</p>
					</div>
					<div className=" flex flex-row items-center justify-center">
						<p className=" font-light text-black text-sm p-4 hover:text-[#141414]  shadow-sm transition-all duration-500">
							Designer: nathankibet
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Rightside
