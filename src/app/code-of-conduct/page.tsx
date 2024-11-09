import React, { ReactElement } from 'react';

const Header = (): ReactElement => {
	return (
		<div className="bg-dot-white font-semibold mt-8">
			<div className="container mx-auto text-center">
				<h1 className="flex text-4xl text-center font-black items-center justify-center  text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-900 to-red-950">
					CS50 AI Code of Conduct
				</h1>
			</div>
		</div>
	);
};

const Section = ({ title, content }: { title: string; content: string }) => {
	return (
		<div className="container mx-auto py-8">
			<h2 className="text-2xl text-cs50Yellow font-medium mb-4">{title}</h2>
			<p className="text-textBlue">{content}</p>
		</div>
	);
};

type ListProps = {
	title: string;
	items: string[];
};

const List = ({ title, items }: ListProps) => {
	return (
		<div className="container mx-auto py-4">
			<h3 className="text-xl text-cs50Yellow font-medium mb-2">{title}</h3>
			<ul className="list-disc list-inside">
				{items.map((item, index) => (
					<li key={index} className="text-textBlue flex items-center">
						<svg
							className="h-4 w-4 mr-2 text-green-500 flex-shrink-0"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round">
							<circle cx="12" cy="12" r="10" />
							<path d="m9 12 2 2 4-4" />
						</svg>
						<p> {item} </p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default function CodeOfConduct() {
	const sections = [
		{
			title: 'Code of Conduct',
			content:
				'Thank you for being a part of CS50x Nepal. We value your participation and want everyone to have an enjoyable and fulfilling experience. Accordingly, all participants are expected to follow this Code of Conduct, and to show respect, understanding, and consideration to one another. Thank you for helping make this a welcoming, friendly atmosphere for everyone.',
		},
		{
			title: 'Purpose',
			content:
				'CS50x Nepal is committed to providing a safe, inclusive, and respectful environment for all participants. This Code of Conduct outlines the expectations and guidelines for behavior throughout the event activities including (but not limited to) lecture class, fair, hackathon, mentoring hours, dining, etc.',
		},
		{
			title: 'Reporting',
			content:
				'If you experience or witness any violations of this Code of Conduct, please report it promptly to the event organizers. Reports can be made in person or through the designated reporting channels provided at the venue. A quick way to reach us will be at cs50xnepal@ioepc.edu.np with an email subject “Breach of Code Of Conduct”.',
		},
	];

	const lists = [
		{
			title: 'Scope',
			items: [
				'Chat and forums including online and offline spaces.',
				'Any other channels or groups which exist in order to discuss CS50x Nepal project activities.',
				'All event location/venues and associated spaces, including conferences, hackfests, parties, workshops and other small/mini events.',
				'All areas related to event venues: vendor exhibit halls, staff and meal areas, connecting infrastructure like walkways, hallways, elevators, and stairs.',
				'Sponsor events, either on-site or off-site.',
				'Private events off-site that involve one or more attendees.',
				'Private conversations taking place in official event spaces.',
			],
		},
		{
			title: 'Our Standards',
			items: [
				'Respect Others: Treat all participants, organizers, speakers, and mentors with respect and consideration. Harassment and discrimination will not be tolerated.',
				'Inclusive Atmosphere: Foster a welcoming atmosphere that encourages diversity and inclusion. Embrace different perspectives and experiences.',
				'Professionalism: Conduct yourself in a professional manner. Be mindful of your language and behavior, both online and offline.',
				"Collaboration: Encourage collaboration and positive interactions among participants. Share knowledge and support each other's learning.",
				'Compliance with CS50 Rules: Adhere to the CS50 rules, guidelines, and licenses throughout the event.',
				'Compliance with Campus Policies: Follow the rules and policies of IOE Purwanchal Campus during the event.',
			],
		},
		{
			title: 'Expected Behavior',
			items: [
				'Respect Others: Treat all participants, organizers, speakers, and mentors with respect and consideration. Harassment and discrimination will not be tolerated.',
				'Inclusive Atmosphere: Foster a welcoming atmosphere that encourages diversity and inclusion. Embrace different perspectives and experiences.',
				'Professionalism: Conduct yourself in a professional manner. Be mindful of your language and behavior, both online and offline.',
				"Collaboration: Encourage collaboration and positive interactions among participants. Share knowledge and support each other's learning.",
				'Compliance with CS50 Rules: Adhere to the CS50 rules, guidelines, and licenses throughout the event.',
				'Compliance with Campus Policies: Follow the rules and policies of IOE Purwanchal Campus during the event.',
			],
		},
		{
			title: 'Unacceptable Behavior',
			items: [
				'Harassment, discrimination, or intimidation of any form.',
				'Disruptive or disrespectful behavior during lectures, classes, or activities.',
				'Any form of cheating or dishonesty in quizzes, hackathons, or projects.',
				'Violation of CS50 rules, guidelines, and licenses.',
				'Non-compliance with IOE Purwanchal Campus rules and policies.',
				'Use of offensive or inappropriate language.',
			],
		},
		{
			title: 'Consequences',
			items: [
				'Verbal warning or private discussion with organizers.',
				'Removal from specific activities or sessions.',
				'Temporary or permanent expulsion from the event.',
				'Or as per the campus and venue rules/laws/standards.',
				'Organizers reserve the right to take appropriate action based on the severity and repetition of the behavior.',
			],
		},

		{
			title: 'Additional Guidelines',
			items: [
				'Event Website and Communication: Participants are encouraged to check the official event website (cs50xnepal.ioepc.edu.np) for updates and important information. Communication channels should be used responsibly and respectfully.',
				'Guest Sessions and Workshops: Engage actively in guest sessions and workshops. Respect the speakers and mentors providing their time and expertise.',
				'Use of Infrastructure: Participants should use campus infrastructure responsibly. Any damage to property will be the responsibility of the individual involved.',
			],
		},

		{
			title: 'Conclusion',
			items: [
				'CS50x Nepal aims to create a positive and enriching experience for all participants. By following this Code of Conduct, participants contribute to building a supportive learning community.',
			],
		},
	];

	return (
		<>
			<div className="px-6 sm:px-6 md:px-8 lg:px-24 xl:px-32 sm:mt-0">
				<Header />
				{sections.map((section, index) => (
					<Section
						key={index}
						title={section.title}
						content={section.content}
					/>
				))}
				{lists.map((list, index) => (
					<List key={index} title={list.title} items={list.items} />
				))}
			</div>
		</>
	);
}
