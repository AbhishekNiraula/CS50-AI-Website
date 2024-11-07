'use client';
import React from 'react';
import Image from 'next/image';
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenuToggle,
	NavbarMenu,
	NavbarMenuItem,
	Link,
	Button,
} from '@nextui-org/react';
import { CS50Logo } from '@/components/CS50Logo';

export default function App() {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	const menuItems = [
		['/', 'Home'],
		['/#about', 'About Us'],
		['/local_team', 'Local Team'],
		['/#testimonials', 'Testimonials'],
		['/#faqs', 'FAQs'],
		['/code-of-conduct', 'Code of Conduct'],
	];

	return (
		<Navbar
			maxWidth="full"
			className="navbar px-0 sm:px-0 md:px-6 font-medium bg-offYellow text-textBlue overflow-x-hidden"
			onMenuOpenChange={setIsMenuOpen}>
			<NavbarContent className="">
				<NavbarMenuToggle
					aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
					className="sm:hidden"
				/>
				<NavbarBrand>
					<Link href="/">
						<CS50Logo />
					</Link>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent
				className="hidden sm:flex sm:gap-1 md:gap-2 lg:gap-4 xl:gap-6"
				justify="center">
				{menuItems.map(([link, title], index) => (
					<NavbarItem
						className="text-textBlue transition-all duration-200 hover:text-primaryRed focus:text-primaryRed"
						key={`${title}-${index}`}>
						<Link href={link}>{title}</Link>
					</NavbarItem>
				))}
			</NavbarContent>
			<NavbarContent justify="end">
				<NavbarItem className="sm:px-0  sm:py-2 text-base px-4 py-2 sm:text-xs md:text-base rounded-md text-offWhite border-primaryPurple  bg-primaryPurple border-3 transition-all duration-500 hover:bg-offWhite hover:text-primaryPurple hover:border-primaryPurple md:px-6 md:py-3">
					<Button
						as={Link}
						className="px-0 py-0 font-semibold"
						href="#"
						variant="flat">
						Get Started🔥
					</Button>
				</NavbarItem>
			</NavbarContent>
			<NavbarMenu className="bg-offYellow text-textBlue hover:text-primaryRed transition-all duration-200 font-medium h-auto-important">
				{menuItems.map(([link, title], index) => (
					<NavbarMenuItem key={`${title}-${index}`}>
						<Link className="w-full" href={link} size="md">
							{title}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</Navbar>
	);
}
