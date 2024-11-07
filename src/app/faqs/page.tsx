import React from 'react';
import FAQcomponent from './faqs';
import { FAQList } from './faq_list';

export default function LocalTeam() {
	return (
		<div className="top-12 relative bg-offWhite">
			<FAQcomponent FAQs={FAQList} />
		</div>
	);
}
