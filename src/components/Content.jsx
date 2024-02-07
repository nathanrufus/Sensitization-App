import React from "react"

function Content() {
	return <div className=" bg-white h-screen p-5 pt-8 w-full">
        <div className=" flex flex-row text-sm md:text-2xl items-center justify-between">
            <h1 className=" text-2xl text-blue-700 hover:text-blue-300 transition-all duration-300 cursor-pointer">Posts</h1>
            <button className="bg-blue-500 py-2 px-4 text-white rounded hover:bg-white hover:text-blue-500 transition-all duration-500 md:text-sm">Create Post</button>
        </div>
    </div>
}

export default Content
