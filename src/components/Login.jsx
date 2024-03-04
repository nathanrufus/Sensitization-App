import { useNavigate } from "react-router-dom"
import React, { useEffect, useState } from "react"

import { TEInput, TERipple } from "tw-elements-react"

function Login() {
	const [email, setEmail] = useState("")
	const [refreshPage, setRefreshPage] = useState(false)

	const [password, setPassword] = useState("")
	const navigate = useNavigate()

	const login = () => {
		fetch("http://127.0.0.1:5000/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ password: password, email: email }),
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

	const handleSubmit = (e) => {
		e.preventDefault()
		setPassword("")
		setEmail("")
		login()
	}
	const handleregister = () => {
		navigate("/register")
	}
	return (
		<div>
			<section className="h-screen">
				<div className="h-full">
					{/* <!-- Left column container with background--> */}
					<div className=" g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
						<div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
							<img
								src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
								className="w-full"
								alt="Sample image"
							/>
						</div>

						{/* <!-- Right column container --> */}
						<div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
							<form onSubmit={handleSubmit}>
								{/* <!-- Email input --> */}
								<TEInput
									type="email"
									label="Email address"
									size="lg"
									className="mb-6"
									value={email}
									required
									onChange={(e) => setEmail(e.target.value)}
								></TEInput>

								{/* <!--Password input--> */}
								<TEInput
									type="password"
									label="Password"
									className="mb-6"
									size="lg"
									minLength={8}
									required
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								></TEInput>

								{/* <!-- Login button --> */}
								<div className="text-center lg:text-left">
									<TERipple rippleColor="light">
										<button className="inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
											Login
										</button>
									</TERipple>

									{/* <!-- Register link --> */}
									<p className="mb-0 mt-2 pt-1 text-sm font-semibold">
										Don't have an account?{" "}
										<a
											onClick={handleregister}
											href="#!"
											className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
										>
											Register
										</a>
									</p>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Login
