import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/outline';
import Container from '../components/Container';
import Header from '../components/Header';
import HtmlParser from 'react-html-parser';

const faqs: { question: string; answer: string }[] = [
	{
		question: 'Are you as cool as you say you are?',
		answer: "I like to think I am. But who's to say?",
	},
	{
		question: 'Do you have a YouTube channel too?',
		answer:
			'I do! You can find it <a class="hover:text-accent underline transition-colors font-bold" href="https://www.youtube.com/channel/UCCOrBkV7p6divDFlLhQPkHw">here</a>! I try to keep up with YouTube as much as possible bu tit can be challenging to stream long hours and get a video up every week! We\'re working on it though, subscribe and stay tuned, dudes!',
	},
	{
		question: 'Do you have a P.O. Box where we can send stuff?',
		answer:
			'Unfortunately the P.O. Box is currently closed, but stay tuned to know when it reopens, okay?',
	},
	{
		question: 'Do you have official merch?',
		answer:
			'What streamer doesn\'t!? Get you\'re official Nismospoolin T-Shirt <a class="hover:text-accent underline transition-colors font-bold" href="https://shop.spreadshirt.com/happylittleaccidents/official+nismospoolin+design-A109032151?department=1&productType=210&color=4C2075&appearance=134&view=1">here</a>! Support your favorite streamer and represent the SubMasterRace everywhere you go with your very own Nismospoolin Shirt.',
	},
];

const infoList: { term: string; detail: string }[] = [
	{
		term: 'Age',
		detail: 'Old',
	},
	{
		term: 'Birthtown',
		detail: 'Dunstable, England',
	},
	{
		term: 'Height',
		detail: '6 ft (Is this a dating profile?)',
	},
	{
		term: 'Occupation',
		detail: "You're watching it :)",
	},
	{
		term: 'Located in',
		detail: 'Florida, USA (Alright this might be a dating profile...)',
	},
	{
		term: 'Previous Accolades',
		detail: 'Small time Pro-Am drifter',
	},
	{
		term: 'Platforms',
		detail: 'PC... peasants',
	},
];

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ');
}

const About = () => {
	return (
		<>
			<Header />
			{/* <Container> */}
			<div className='grid grid-cols-1 lg:grid-cols-3'>
				<div className='lg:col-span-2'>
					<div className='hidden'>
						<h2>Hardware</h2>
						<ul>
							<li></li>
						</ul>
					</div>
					<div className='bg-gray-50'>
						<div className='max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8'>
							<div className='max-w-3xl mx-auto divide-y-2 divide-gray-200'>
								<h2 className='text-center text-3xl font-extrabold text-gray-900 sm:text-4xl'>
									Frequently Asked Questions
								</h2>
								<dl className='mt-6 space-y-6 divide-y divide-gray-200'>
									{faqs.map((faq) => (
										<Disclosure as='div' key={faq.question} className='pt-6'>
											{({ open }) => (
												<>
													<dt className='text-lg'>
														<Disclosure.Button className='text-left w-full flex justify-between items-start text-gray-400'>
															<span className='font-medium text-gray-900'>
																{faq.question}
															</span>
															<span className='ml-6 h-7 flex items-center'>
																<ChevronDownIcon
																	className={classNames(
																		open ? '-rotate-180' : 'rotate-0',
																		'h-6 w-6 transform'
																	)}
																	aria-hidden='true'
																/>
															</span>
														</Disclosure.Button>
													</dt>
													<Disclosure.Panel as='dd' className='mt-2 pr-12'>
														<p className='text-base text-gray-500'>
															{HtmlParser(faq.answer)}
														</p>
													</Disclosure.Panel>
												</>
											)}
										</Disclosure>
									))}
								</dl>
							</div>
						</div>
					</div>
				</div>
				<div>
					<div className='bg-gray-50 overflow-hidden '>
						<div className='px-4 py-5 sm:px-6'>
							<h2 className='text-center text-3xl font-extrabold text-gray-900 sm:text-4xl'>
								Channel Info
							</h2>
							<p className='py-6 text-gray-800'>
								Hi! I&apos;m Niel, AKA Nismospoolin. I try to stream every day
								at 11AM EST.
							</p>
						</div>
						<dl className='sm:divide-y sm:divide-gray-200'>
							{infoList.map((item) => (
								<div
									key={item.term}
									className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'
								>
									<dt className='text-sm font-medium text-gray-500'>
										{item.term}
									</dt>
									<dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 text-right'>
										{item.detail}
									</dd>
								</div>
							))}
						</dl>
					</div>
					<div>
						<h2>Stream Rules</h2>
					</div>
				</div>
			</div>
			{/* Hardware */}
			{/* Optional stream rules? */}
			{/* </Container> */}
		</>
	);
};

export default About;
