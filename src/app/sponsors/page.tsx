'use client';
import React from 'react';
import SponsorMarquee from '@/app/sponsors/Sponsor';

export default function Sponsor() {
	return (
		<div className="mt-4 py-8 bg-offWhite">
			<div className="py-4">
				<h1 className="flex text-4xl text-center font-black items-center justify-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-900 to-red-950">
					Our Sponsors
				</h1>
			</div>
			<SponsorMarquee />
		</div>
	);
}
