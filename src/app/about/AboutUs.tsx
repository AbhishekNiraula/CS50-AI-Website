import React from 'react';
import '@/app/globals.css';
import Image from 'next/image';

const AboutUs = () => {
	return (
		<section id="about">
			<div className="w-full md:h-20 h-32 text-white flex flex-col items-center justify-center bg-gradient-to-r from-purple-950 via-purple-800 to-purple-500 py-8">
				<p className="text-4xl mt-6 font-extrabold">About Us</p>
				<p className="text-xs py-2 px-6 sm:px-28 text-center ">
					Following a very successful adaption of CS50x course in Nepal, We are
					back with CS50 AI.
				</p>
			</div>
			<div className="absolute left-0 w-full overflow-hidden ">
				<svg
					data-name="Layer 1"
					className="relative block h-20 w-full "
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none">
					<defs>
						<linearGradient
							id="purple-gradient"
							x1="0%"
							y1="0%"
							x2="100%"
							y2="0%">
							<stop offset="0%" stopColor="#3b0764" />
							<stop offset="50%" stopColor="#6b21a8" />
							<stop offset="100%" stopColor="#a855f7" />
						</linearGradient>
					</defs>
					<path
						d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
						fill="url(#purple-gradient)"></path>
				</svg>
			</div>
			<div className="flex flex-col-reverse items-center overflow-hidden px-6 sm:px-6 md:px-8 lg:px-12 xl:px-12 sm:flex-row bg-offWhite mt-28 pb-12 justify-center tracking-wide">
				<div className="w-full flex flex-col items-center sm:items-start align-center justify-center sm:w-1/2">
					<p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-900 to-red-950">
						What is CS50 AI?
					</p>
					<p className="md:w-[80%] text-sm text-textBlue text-center sm:text-left font-light pt-4">
						CS50 AI is a specialized adaption of Harvard University&apos;s Cs50
						Introduction to Artificial Intelligence with Python course, designed
						to introduce students to the fundamentals of artificial
						intelligence. THis couse covers core AI concepts such as machine
						learning, neural networks,natural language processing, and search
						algorithms. Through hands-on projects and real-world
						examples,student learn how to build intelligent systems capable of
						solving complex problems. Cs50 AI is ideal for those looking to gain
						fundamental knowledge in AI, equipping them with the skills needed
						to pursue furthur studies or careers in this transformative field.
					</p>
				</div>
				<div className="w-full mb-4 sm:mb-0 sm:w-1/3 flex flex-col justify-center align-center items-center">
					<Image
						className="w-60 h-60 sm:h-100 sm:w-100"
						src="/images/CS50Duck.png"
						alt="CS50 AI Image"
						quality={100}
						width={1200}
						height={1200}
						priority
					/>
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
