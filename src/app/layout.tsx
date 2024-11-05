import type { Metadata } from 'next';
import './globals.css';
import { Poppins } from 'next/font/google';
import Navbar from '@/components/Navbar';
import PreviousEdition from '@/components/PreviousEdition';

const poppins = Poppins({
	weight: '400',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'CS50 AI With Python',
	description:
		'CS50 AI with Python is an adaptation of famous CS50 course at the doorstep of IOE, Purwanchal Campus.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link
					rel="icon"
					href="/icon?<generated>"
					type="image/<generated>"
					sizes="<generated>"
				/>
			</head>
			<body className={poppins.className}>
				<Navbar />
				<PreviousEdition />
				{children}
			</body>
		</html>
	);
}
