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
		'Home',
		'About Us',
		'Local Team',
		'Testimonials',
		'FAQs',
		'Code of Conduct',
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
					<CS50Logo />
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent
				className="hidden sm:flex sm:gap-1 md:gap-2 lg:gap-4 xl:gap-6"
				justify="center">
				<NavbarItem>
					<Link href="#">Home</Link>
				</NavbarItem>
				<NavbarItem isActive>
					<Link aria-current="page">About Us</Link>
				</NavbarItem>
				<NavbarItem>
					<Link href="#">Local Team</Link>
				</NavbarItem>
				<NavbarItem>
					<Link href="#">Testimonials</Link>
				</NavbarItem>
				<NavbarItem>
					<Link href="#">FAQs</Link>
				</NavbarItem>
				<NavbarItem>
					<Link href="#">Code of Conduct</Link>
				</NavbarItem>
			</NavbarContent>
			<NavbarContent justify="end">
				<NavbarItem className="sm:px-0 sm:py-2 text-base px-4 py-2 sm:text-xs md:text-base rounded-md text-offWhite border-primaryPurple font-semibold bg-primaryPurple border-3 transition-all duration-500 hover:bg-offWhite hover:text-primaryPurple hover:border-primaryPurple md:px-6 md:py-3">
					<Button as={Link} className="px-0 py-0" href="#" variant="flat">
						Get Started🔥
					</Button>
				</NavbarItem>
			</NavbarContent>
			<NavbarMenu className="bg-offYellow text-textBlue font-medium h-auto-important">
				{menuItems.map((item, index) => (
					<NavbarMenuItem key={`${item}-${index}`}>
						<Link className="w-full" href="#" size="md">
							{item}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</Navbar>
	);
}
