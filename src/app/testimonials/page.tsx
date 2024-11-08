'use client';
import React from 'react';
import { Link, Button } from '@nextui-org/react';
import Image from 'next/image';
import TestimonialsMarquee from '@/app/testimonials/marquee';

export default function Testimonials() {
	return (
		<section id="testimonials" className="top-12 bg-offPurple">
			<TestimonialsMarquee />
		</section>
	);
}
