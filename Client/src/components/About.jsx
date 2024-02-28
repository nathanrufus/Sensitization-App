import React from "react"

function About() {
	return (
		<div>
			<section class="flex items-center bg-stone-100 xl:h-screen font-poppins dark:bg-gray-800 ">
				<div class="justify-center flex max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
					<div class="flex flex-wrap ">
						<div class="w-full px-4 mb-10 lg:mb-0 ">
							<h2 class="mb-4 text-4xl font-semibold text-blue-500 dark:text-gray-300">
								About Us
							</h2>

							<p class="mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
								 Our Mission: At the core of sensitization app's mission is the
								commitment to cultivating a msensitization appsionate and informed
								global community. We strive to break down barriers, challenge
								stereotypes, and encourage dialogue on issues that matter most.
								Through this mission, we aim to create a ripple effect of
								positive change that extends far beyond the digital realm. Key
								Features: 1. Diverse Content: sensitization app provides a vast array
								of multimedia content, including articles, videos, podcasts, and
								interactive modules, covering a wide spectrum of social issues.
								Our content is meticulously curated to ensure relevance,
								accuracy, and engagement. 2. Interactive Learning: We believe in
								the power of experiential learning. Our app goes beyond
								traditional educational methods by incorporating interactive
								modules that allow users to actively engage with the content,
								enhancing their understanding and retention of key concepts. 3.
								Real-Life Stories: To make sensitization relatable, sensitization app
								features real-life stories from individuals who have experienced
								or overcome social challenges. These stories inspire empathy,
								foster connection, and demonstrate the impact of collective
								action. 
							</p>

							<a
								href="#"
								class="px-4 py-3 text-blue-700 transition-all transform border border-blue-500 rounded-3xl hover:bg-blue-600 dark:border-blue-400 dark:hover:bg-blue-500 dark:hover:text-gray-100 dark:hover:border-blue-500 dark:text-blue-400 hover:text-gray-100"
							>
								Discover more
							</a>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default About
