import Image from 'next/image';
import React from 'react';
import { Timeline } from '@/components/ui/timeline';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

import cs50A01 from './assets/cs50A01.png';
import cs50A02 from './assets/cs50A02.png';
import cs50A03 from './assets/cs50A03.png';
import cs50A04 from './assets/cs50A04.png';
import cs50B01 from './assets/cs50B01.png';
import cs50B02 from './assets/cs50B02.jpg';
import cs50B03 from './assets/cs50B03.jpg';
import cs50B04 from './assets/cs50B04.png';
import cs50C01 from './assets/cs50C01.png';
import cs50C02 from './assets/cs50C02.png';
import cs50C03 from './assets/cs50C03.png';
import cs50C04 from './assets/cs50C04.png';
import cs50D01 from './assets/cs50D01.png';
import cs50D02 from './assets/cs50D02.png';
import cs50D03 from './assets/cs50D03.png';
import cs50D04 from './assets/cs50D04.png';
import cs50E01 from './assets/cs50E01.png';
import cs50E02 from './assets/cs50E02.png';
import cs50E03 from './assets/cs50E03.png';
import cs50E04 from './assets/cs50E04.png';
import cs50F01 from './assets/cs50F01.png';
import cs50F02 from './assets/cs50F02.png';
import cs50F03 from './assets/cs50F03.png';
import cs50F04 from './assets/cs50F04.png';
import cs50G01 from './assets/cs50G01.png';
import cs50G02 from './assets/cs50G02.png';
import cs50G03 from './assets/cs50G03.png';
import cs50G04 from './assets/cs50G04.png';

type timelineEntry = {
	title: string;
	description: string;
	items: string[];
	images: StaticImport[];
};
const timelineData: timelineEntry[] = [
	{
		title: 'WEEK 0 Search',
		description:
			'Week 0 introduces the basics of artificial intelligence, covering key concepts like problem-solving and intelligent agents to set the foundation for AI learning.',
		items: [
			'Search Problems',
			'Depth-First Search',
			'Breadth-First Search',
			'Greedy Best-First Search',
			'A* Search',
			'Minimax',
			'Alpha-Beta Pruning',
		],
		images: [cs50A01, cs50A02, cs50A03, cs50A04],
	},
	{
		title: 'WEEK 1 Knowledge',
		description:
			'Week 1 dives into the basics of knowledge representation, reasoning, and logic, and how they are used in AI applications.',
		items: [
			'Propositional Logic',
			'Entailment',
			'Inference',
			'Model Checking',
			'Resolution',
			'First-Order Logic',
		],
		images: [cs50B01, cs50B02, cs50B03, cs50B04],
	},
	{
		title: 'WEEK 2 Uncertainty',
		description:
			'Week 2 explores the concept of uncertainty in AI and how it is managed using probability theory and Bayesian networks.',
		items: [
			'Probability',
			'Conditional Probability',
			'Random Variables',
			'Independence',
			'Bayes Rule',
			'Joint Probability',
			'Bayesian Networks',
			'Sampling',
			'Markov Models',
			'Hidden Markov Models',
		],
		images: [cs50C01, cs50C02, cs50C03, cs50C04],
	},
	{
		title: 'WEEK 3 Optimization',
		description:
			'Week 3 covers optimization techniques in AI, including constraint satisfaction problems, local search, and optimization algorithms.',
		items: [
			'Local Search',
			'Hill Climbing',
			'Simulated Annealing',
			'Linear Programming',
			'Constraint Satisfaction',
			'Backtracking Search',
		],
		images: [cs50D01, cs50D02, cs50D03, cs50D04],
	},
	{
		title: 'WEEK 4 Learning',
		description:
			'Week 4 delves into machine learning and how it is used to build intelligent systems that can learn from data and improve over time.',
		items: [
			'Superised Learning',
			'Nearest Neighbor Classifiers',
			'Perceptrons Learning',
			'Support Vector Machines',
			'Regression',
			'Loss Functions',
			'Overfitting',
			'Regularization',
			'Reinforcement Learning',
			'Markov Decision Processes',
			'Q-Learning',
			'Unsupervised Learning',
			'K-Means Clustering',
		],
		images: [cs50E01, cs50E02, cs50E03, cs50E04],
	},
	{
		title: 'WEEK 5 Neural Networks',
		description:
			'Week 5 introduces neural networks and deep learning, covering the basics of artificial neural networks and how they are used in AI applications.',
		items: [
			'Artificial Neural Networks',
			'Activation Functions',
			'Gradient Descent',
			'Backpropagation',
			'Overfitting',
			'TensorFlow',
			'Image Convolution',
			'Convolutional Neural Networks',
			'Recurrent Neural Networks',
		],
		images: [cs50F01, cs50F02, cs50F03, cs50F04],
	},
	{
		title: 'WEEK 6 Language',
		description:
			'Week 6 explores natural language processing and how AI is used to process and understand human language.',
		items: [
			'Syntax',
			'Semantics',
			'Context-Free Grammars',
			'nlTK',
			'n-grams',
			'Bags of Words',
			'Naïve Bayes Classifiers',
			'Word Representations',
			'word2vec',
			'Attention Mechanisms',
			'Transformers',
		],
		images: [cs50G01, cs50G02, cs50G03, cs50G04],
	},
];
export default function TimelineDemo() {
	const data = timelineData.map((entry) => ({
		title: entry.title,
		content: (
			<div>
				<p className="text-textBlue text-xs md:text-sm font-normal mb-8">
					{entry.description}
				</p>
				<div className="mb-8">
					<div className="flex flex-col gap-2 items-left text-textBlue text-xs md:text-sm">
						{entry.items.map((item, indexedDB) => (
							<div
								key={indexedDB}
								className="flex gap-2 items-center text-xs md:text-sm">
								🔥 {item}
							</div>
						))}
					</div>
				</div>
				<div className="grid grid-cols-2 gap-4">
					{entry.images.map((image, index) => (
						<Image
							key={index}
							src={image}
							alt={`Image ${index + 1}`}
							width={500}
							height={500}
							className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.1)]"
						/>
					))}
				</div>
			</div>
		),
	}));

	return (
		<div className="w-full">
			<Timeline data={data} />
		</div>
	);
}
