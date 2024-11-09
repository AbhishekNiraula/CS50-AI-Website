'use client';
import React from 'react';
import { Link, Button } from '@nextui-org/react';
import Image from 'next/image';
import { SocialIcon } from 'react-social-icons';

export default function FooterSection() {
	return (
		<section className="py-10 bg-offWhite sm:pt-16 lg:pt-24">
			<div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
				<div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
					<div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
						<Link href="/">
							<Image
								src="/icon.svg"
								alt="CS50xNepal Logo"
								width={80}
								height={30}
							/>
						</Link>

						<p className="text-sm leading-relaxed text-textBlue mt-7">
							CS50 AI Nepal is dedicated to fostering excellence, innovation,
							and skill in AI education, empowering students to shape a
							transformative and impactful future.
						</p>

						<ul className="flex items-center space-x-3 mt-9">
							{[
								[
									'facebook',
									'https://www.facebook.com/profile.php?id=61554706883546&mibextid=kFxxJD',
								],
								[
									'twitter',
									'https://x.com/CS50xNepal?t=zhIVQxpn57jrtVVsYZJG0w&s=09',
								],
								['linkedin', 'https://www.linkedin.com/company/cs50x-nepal/'],
								['discord', '#'],
							].map(([network, url], index) => (
								<li key={index}>
									<SocialIcon
										url={url}
										className="flex items-center justify-center text-white transition-all duration-200 rounded-full w-7 h-7 hover:bg-primaryRed focus:bg-primaryRed hover:cursor-pointer"
										network={network}
										bgColor="#141E46"
										style={{ height: 30, width: 30 }}
									/>
								</li>
							))}
						</ul>
					</div>

					<div>
						<p className="text-sm font-semibold tracking-widest text-textBlue uppercase">
							Reference Sites
						</p>

						<ul className="mt-6 space-y-4 text-sm text-textBlue">
							<li>
								<a
									href="https://cs50.harvard.edu/ai/2024/"
									title=""
									className="flex transition-all duration-200 hover:text-primaryRed focus:text-primaryRed">
									{' '}
									Harvard CS50{' '}
								</a>
							</li>

							<li>
								<a
									href="https://www.ioepc.edu.np/"
									title=""
									className="flex transition-all duration-200 hover:text-primaryRed focus:text-primaryRed">
									{' '}
									IOE Purwanchal Campus{' '}
								</a>
							</li>

							<li>
								<a
									href="https://excess.ioepc.edu.np/"
									title=""
									className="flex transition-all duration-200 hover:text-primaryRed focus:text-primaryRed">
									{' '}
									EXCESS Nepal{' '}
								</a>
							</li>

							<li>
								<a
									href="https://robotics.ioepc.edu.np/"
									title=""
									className="flex transition-all duration-200 hover:text-primaryRed focus:text-primaryRed">
									{' '}
									Robotics Club{' '}
								</a>
							</li>
							<li>
								<a
									href="https://cs50xnepal.ioepc.edu.np/"
									title=""
									className="flex transition-all duration-200 hover:text-primaryRed focus:text-primaryRed">
									{' '}
									CS50xNepal{' '}
								</a>
							</li>
						</ul>
					</div>

					<div>
						<p className="text-sm font-semibold tracking-widest text-textBlue uppercase">
							Useful Links
						</p>

						<ul className="mt-6 space-y-4 text-textBlue text-sm">
							<li>
								<a
									href="/code-of-conduct"
									title=""
									className="flex transition-all duration-200 hover:text-primaryRed focus:text-primaryRed">
									{' '}
									Code of Conduct{' '}
								</a>
							</li>

							<li>
								<a
									href="/syllabus"
									title=""
									className="flex transition-all duration-200 hover:text-primaryRed focus:text-primaryRed">
									{' '}
									CS50 AI Syllabus{' '}
								</a>
							</li>

							<li>
								<a
									href="https://cs50.ai"
									title=""
									className="flex transition-all duration-200 hover:text-primaryRed focus:text-primaryRed">
									CS50 IDE{' '}
								</a>
							</li>

							<li>
								<a
									href="https://cs50.harvard.edu/x/2024/certificate/"
									title=""
									className="flex transition-all duration-200 hover:text-primaryRed focus:text-primaryRed">
									CS50 Certification{' '}
								</a>
							</li>
						</ul>
					</div>

					<div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
						<p className="text-sm font-semibold tracking-widest text-textBlue uppercase">
							Useful Tools
						</p>
						<ul className="mt-6 space-y-4 text-textBlue text-sm">
							<li>
								<a
									href="https://vscode.dev/"
									title=""
									className="flex transition-all duration-200 hover:text-primaryRed focus:text-primaryRed">
									{' '}
									Visual Studio Code{' '}
								</a>
							</li>

							<li>
								<a
									href="https://cs50.ai"
									title=""
									className="flex transition-all duration-200 hover:text-primaryRed focus:text-primaryRed">
									{' '}
									CS50 IDE{' '}
								</a>
							</li>

							<li>
								<a
									href="https://edstem.org/us/courses/176/discussion/"
									title=""
									className="flex transition-all duration-200 hover:text-primaryRed focus:text-primaryRed">
									{' '}
									CS50 Ed Discussions{' '}
								</a>
							</li>

							<li>
								<a
									href="https://cs50.me/cs50x"
									title=""
									className=" transition-all duration-200 hover:text-primaryRed focus:text-primaryRed">
									{' '}
									Gradebook{' '}
								</a>
							</li>
							<li>
								<Button
									className="flex w-40 text-base rounded-md text-offWhite border-primaryPurple font-semibold bg-primaryPurple border-3 transition-all duration-500 hover:bg-offWhite hover:text-primaryPurple hover:border-primaryPurple px-12 py-6"
									as={Link}
									variant="flat">
									Get Started 🔥
								</Button>
							</li>
							<li>
								<Button
									className="flex w-40 text-base rounded-md text-offWhite border-primaryRed font-semibold bg-primaryRed border-3 transition-all duration-500 hover:bg-offWhite hover:text-primaryRed hover:border-primaryRed px-12 py-6"
									as={Link}
									href="https://www.youtube.com/@cs50xnepal"
									variant="flat">
									Subscribe Us
								</Button>
							</li>
						</ul>
					</div>
				</div>

				<hr className="mt-12 mb-10 border-gray-200" />

				<p className="text-sm text-center text-gray-600">
					© Copyright 2024, Designed and Developed by{' '}
					<Link
						className="text-blue-500 underline underline-offset-4 text-sm"
						href="https://www.facebook.com/profile.php?id=100083009736365">
						Abhishek Niraula{' '}
					</Link>
					,{' '}
					<Link
						className="text-blue-500 underline underline-offset-4 text-sm"
						href="https://www.facebook.com/niraj.bista.92">
						Niraj Bista
					</Link>{' '}
					and{' '}
					<Link
						className="text-blue-500 underline underline-offset-4 text-sm"
						href="https://www.facebook.com/nabin.yadav.376695">
						Nabin Yadav
					</Link>
					.
				</p>
			</div>
		</section>
	);
}
