import { FunctionComponent } from 'react';
import Container from './Container';
import Image from 'next/image';
import { BsTwitch } from 'react-icons/bs';

const Hero: FunctionComponent = ({ children }) => {
	return (
		<Container>
			<div className='-mx-2 relative h-hero bg-nismospoolin bg-no-repeat bg-scroll bg-center bg-cover overflow-hidden flex px-8'>
				<div className='flex flex-col flex-grow justify-center text-gray-300'>
					<p className='text-5xl my-4'>Nismo<span className='text-accent'>spoolin</span></p>
					<p>Join me every morning at 11AM on Twitch and join the fun!</p>
					<div className='flex'>
						<a className='bg-accent filter contrast-100 hover:contrast-125 text-white rounded-sm py-4 px-20 inline mt-10' href='https://www.twitch.tv/nismospoolin'>
							<BsTwitch className='inline' /> Subscribe
						</a>
					</div>
				</div>
				<div className='relative flex w-2/5 items-end'>
					{/* <span className='flex flex-grow'></span> */}
					<img className='hidden md:block' src='/nismospoolin.png' alt='Neil' />
					{/* <Image layout='fill' src='/background-nismo.png' /> */}
				</div>
			</div>
		</Container>
	);
};

export default Hero;
