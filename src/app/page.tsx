'use client';
import Image from 'next/image';
import { Link, Button } from '@nextui-org/react';
import FrequentlyAskedQuestion from '../app/faqs/page';
import AboutUs from '@/app/about/AboutUs';
import Testimonials from '../app/testimonials/page';
import Sponsor from '../app/sponsors/page';
import Instructor from './instructors/page';

export default function Home() {
	return (
		<>
			<section className="h-full sm:h-[84.5vh] items-center flex bg-offWhite overflow-hidden px-6 sm:px-6 md:px-8 lg:px-24 xl:px-32 mt-10 sm:mt-0">
				{/* Heading/Introduction */}
				<div className="flex flex-col items-center sm:flex-row md:gap-0 lg:gap-8 xl:gap-11">
					<div className="w-full flex flex-col items-center sm:items-start align-center justify-center sm:w-1/2">
						<p className="font-bold text-7xl md:text-4xl sm:text-4xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-950">
							CS50 AI
						</p>
						<p className="w-full sm:w-96 font-semibold text-2xl text-center sm:text-left sm:text-base md:text-regular lg:text-2xl text-cs50Yellow mt-3">
							The golden duck has returned!!!
						</p>
						<p className="md:w-[80%] text-sm text-textBlue text-center sm:text-left font-light pt-4">
							Dive into the fundamentals of Artificial intelligence through the
							renowned CS50 curriculum, now adapted for students in Nepal.
							Guided by expert instructors from Purwanchal Campus, this course
							equips you with practical skills and theoretical knowledge in
							AI,machine learning,and data science. Explore real-world
							applications,engage with hands-on projects,and join a growing
							community of future innovators.
						</p>
						<Button
							className="mt-4 w-40 text-base rounded-md text-offWhite border-primaryPurple font-semibold bg-primaryPurple border-3 transition-all duration-500 hover:bg-offWhite hover:text-primaryPurple hover:border-primaryPurple px-12 py-6 flex justify-center items-center"
							as={Link}
							variant="flat">
							Get Started 🔥
						</Button>
					</div>
					{/* Image div */}
					<div className="flex flex-col justify-center items-center">
						<Image
							className="w-100 h-100"
							src="/images/Graphic.png"
							alt="Machine Learning Illustrated Image"
							quality={100}
							width={600}
							height={600}
							priority
						/>
					</div>
				</div>
			</section>
			<AboutUs />
			<Instructor />
			<Sponsor />
			<FrequentlyAskedQuestion />
			<Testimonials />
		</>
	);
}
