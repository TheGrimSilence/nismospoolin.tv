import { FunctionComponent } from 'react';
import Link from 'next/link';
import { BsTwitch } from 'react-icons/bs';
import Container from './Container';
import Image from 'next/dist/client/image';

const Footer: FunctionComponent = ({ children }) => {
	return (
		<>
			<div className='bg-primary px-8 lg:px-20 py-8 text-gray-400'>
				<div className='grid grid-cols-2 lg:grid-cols-6 grid-flow-row auto-rows-max pt-16 pb-16'>
					<div className='flex justify-center md:justify-start col-span-2 lg:col-span-1 mb-8 lg:mb-0'>
						<div className='flex-shrink-0 flex items-center'>
							<img
								className='block lg:hidden h-16 w-auto border-accent border-solid border rounded'
								src='/nismospoolin.svg'
								alt='Workflow'
							/>
							<img
								className='hidden lg:block h-16 w-auto border-accent border-solid border rounded'
								src='/logo.svg'
								alt='Workflow'
							/>
						</div>
					</div>
					<div className='flex flex-col justify-around pl-2'>
						<Link href='/home'>
							<a className='hover:text-gray-100'>Home</a>
						</Link>
						<Link href='/streams'>
							<a className='hover:text-gray-100'>Streams</a>
						</Link>
						{/* <Link>Blog</Link> */}
					</div>
					<div className='flex flex-col justify-around pl-2'>
						<Link href='/sponsors'>
							<a className='hover:text-gray-100'>Sponsors</a>
						</Link>
						<Link href='/about'>
							<a className='hover:text-gray-100'>About</a>
						</Link>
					</div>
					<div className='flex flex-col justify-around pl-2 mt-4 lg:mt=0'>
						<Link href='/contact'>
							<a className='hover:text-gray-100'>Contact</a>
						</Link>
						<Link href='/shop'>
							<a className='hover:text-gray-100'>Shop</a>
						</Link>
					</div>
					<div className='col-span-2 md:col-span-2 pt-8'>
						<p className='text-gray-200 mb-8 text-sm lg:text-base'>
							Support me by subscribing! Subs get a verity of neat perks on top
							of knowing they are supporting their favorite streamer monetarily!
						</p>
						<a className='bg-accent text-white rounded-sm py-4 px-4 md:px-12 inline mt-4 uppercase text-xs'>
							<BsTwitch className='inline' /> Subscribe to my channel!
						</a>
					</div>
				</div>
			</div>
			{/* <footer className={styles.footer}>
				<a
					href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
					target='_blank'
					rel='noopener noreferrer'
				>
					Powered by{' '}
					<span className={styles.logo}>
						<Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
					</span>
				</a>
			</footer> */}
		</>
	);
};

export default Footer;
