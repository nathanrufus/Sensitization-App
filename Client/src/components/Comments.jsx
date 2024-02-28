import React, { useEffect, useState } from "react"
import sma from "./Assets/sma.jpg"
import { IoIosArrowRoundBack } from "react-icons/io"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios" // Added useParams

function Comments() {
	const [comments, setComment] = useState([])
	const [comment, setcomment] = useState("")

	const [isLoading, setIsLoading] = useState(true)
	const { user_id } = useParams()
	const navigate = useNavigate()

	const Back = () => {
		navigate("/")
	}
	useEffect(() => {
		const loadcomments = async () => {
			try {
				const response = await axios.get(
					`http://127.0.0.1:5000/comments`,
					{
						method: "GET",
						headers: {
							Authorization: `Bearer ${localStorage.getItem("token")}`,
						},
					}
				)
				console.log(response.data)
				setComment(response.data)
			} catch (error) {
				console.error("Error fetching comments:", error)
			} finally {
				setIsLoading(false)
			}
		}
		loadcomments()
	}, [])
	const add_comment = () => {
		fetch("http://127.0.0.1:5000/comments", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ comment: comment }),
		})
			.then((res) => {
				if (res.status === 200) {
					return res.json() // Parse the response JSON when status is 200
				} else {
					throw new Error(`HTTP error! Status: ${res.status}`)
				}
			})
			.then((data) => {
				console.log(data)
				localStorage.setItem("token", data.access_token)
				setRefreshPage(!refreshPage)
				navigate("/")
			})
			.catch((error) => console.error("There was an error", error))
	}

	const handlesubmit = (e) => {
		e.preventDefault()
		setcomment("")
		add_comment()
	}
	return (
		<>
			<div className="  bg-white h-screen p-5 pt-8 w-full overflow-scroll flex flex-row">
				{isLoading ? (
					<h1 className="text-6xl text-center mx-auto mt-32">Loading....</h1>
				) : (
					comments.map((obj) => (
						<div>
							<div className=" rounded-md border px-6 py-4 max-w-full mt-2 w-full">
								<IoIosArrowRoundBack className=" text-2xl cursor-pointer" onClick={Back}/>
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
									<p>{obj.comment}</p>
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
													class="object-cover w-8 h-8 rounded-full border-2 border-emerald-400  shadow-emerald-400"
												/>
												<h3 class="font-bold">{obj.name}</h3>
											</div>
											<p class="text-gray-600 mt-2">{obj.comment} </p>
										</div>
									</div>

									<div class="w-full px-3 my-1">
										<form onSubmit={handlesubmit}>
											<textarea
												class="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
												name="body"
												placeholder="Type Your Comment"
												required
												value={comment}
												onChange={(e) => setcomment(e.target.value)}
											></textarea>
											<input
												type="submit"
												class="px-2.5 py-1.5 rounded-md text-white text-sm bg-indigo-500"
												value="Post Comment"
											/>
										</form>
									</div>
								</form>
							</div>
						</div>
					))
				)}
			</div>
		</>
	)
}

export default Comments
