'use client';
import {
	useMotionValueEvent,
	useScroll,
	useTransform,
	motion,
} from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

interface TimelineEntry {
	title: string;
	content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
	const ref = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const [height, setHeight] = useState(0);

	useEffect(() => {
		if (ref.current) {
			const rect = ref.current.getBoundingClientRect();
			setHeight(rect.height);
		}
	}, [ref]);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['start 10%', 'end 50%'],
	});

	const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
	const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

	return (
		<div
			className="w-full bg-offWhite md:px-10 overflow-hidden"
			ref={containerRef}>
			<div className="py-8 px-6 sm:px-6 md:px-8 lg:px-28">
				<h1 className="flex text-4xl text-center font-black items-center justify-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-900 to-red-950">
					Syllabus
				</h1>
				<p className="text-center text-textBlue text-sm pt-2 ">
					Explore the journey through AI fundamentals, from foundational
					concepts to hands-on projects. Each week builds essential skills,
					covering topics like search algorithms, machine learning, neural
					networks, and more, preparing you for a deep dive into the world of
					artificial intelligence.
				</p>
			</div>

			<div ref={ref} className="relative max-w-7xl mx-auto pb-20">
				{data.map((item, index) => (
					<div
						key={index}
						className="flex justify-start pt-10 md:pt-40 md:gap-10">
						<div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
							<div className="h-10 absolute left-3 md:left-3 w-10 rounded-full  dark:bg-offWhite flex items-center justify-center">
								<div className="h-4 w-4 rounded-full bg-neutral-300 border border-neutral-400 p-2" />
							</div>
							<h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-textBlue ">
								{item.title}
							</h3>
						</div>

						<div className="relative pl-20 pr-4 md:pl-4 w-full">
							<h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-textBlue">
								{item.title}
							</h3>
							{item.content}{' '}
						</div>
					</div>
				))}
				<div
					style={{
						height: height + 'px',
					}}
					className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-300 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] ">
					<motion.div
						style={{
							height: heightTransform,
							opacity: opacityTransform,
						}}
						className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
					/>
				</div>
			</div>
		</div>
	);
};
