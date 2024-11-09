import React from 'react';

import { instructorList } from './instructors';
import { HoverEffect } from '@/components/ui/card-hover-effect';

export default function Instructor() {
	return (
		<div className="text-center bg-offPurple py-10">
			<h1 className="px-6 flex text-4xl text-center font-black items-center justify-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-900 to-red-950">
				Meet our Instructors
			</h1>
			<div className="px-2 sm:px-6 md:px-8 lg:px-24 xl:px-32 overflow-hidden max-w-max">
				<HoverEffect items={instructorList} />
			</div>
		</div>
	);
}
