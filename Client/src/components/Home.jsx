import React, { useEffect, useState } from "react"
import Content from "./Content"
import CreatePost from "./CreatePost"

function Home() {
	const [item, setItem] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch("http://127.0.0.1:5000/posts", {
					headers: {
						Authorization: `Bearer ${localStorage.getItem("token")}`,
					},
				})

				if (!response.ok) {
					throw new Error(`HTTP error! Status: ${response.status}`)
				}

				const data = await response.json()
        console.log(data);
				setItem(data)
			} catch (error) {
				console.error("Error fetching data:", error)
			}
		}

		fetchData() // Call the async function
	}, []) // Empty dependency array to run the effect only once on mount

	return (
		<div>
			<Content item={item} />
		</div>
	)
}

export default Home
