'use client';
import React from 'react';
import { IFAQ } from '@/app/faqs/faq_list_type';
import { Accordion, AccordionItem } from '@nextui-org/react';
import { FaCirclePlus, FaCircleMinus } from 'react-icons/fa6';

export default function FAQcomponent({ FAQs }: { FAQs: IFAQ[] }) {
	return (
		<main className="bg-bg-effect bg-cover bg-center overflow-hidden">
			<div className="flex-col w-full px-6 sm:px-6 md:px-8 lg:px-24 xl:px-32 justify-center items-center mx-auto ">
				<h1 className="flex text-4xl text-center font-black items-center justify-center py-5 text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-900 to-red-950">
					Frequently Asked Questions
				</h1>
				<Accordion
					variant="light"
					selectionMode="multiple"
					className="py-8 sm:py-8 flex flex-col gap-4">
					{FAQs.map((qa, index) => (
						<AccordionItem
							key={index}
							aria-label={`accordian ${index}}`}
							indicator={({ isOpen }) =>
								isOpen ? (
									<FaCircleMinus className="text-warningRed" />
								) : (
									<FaCirclePlus className="text-warningRed" />
								)
							}
							title={
								<p className="text-textBlue font-medium text-base">
									{' '}
									{index + 1}. {qa.question}
								</p>
							}>
							<p className="text-sm font-light text-gray-700">{qa.answer}</p>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</main>
	);
}
