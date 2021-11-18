import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Container from '../components/Container';
import Header from '../components/Header';
import Hero from '../components/Hero';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Nismospoolin - Home</title>
				<meta
					name='description'
					content='Twitch Partner, YouTube video maker guy.'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />
			<Hero />
			<Container flex>
				<div className='flex justify-around w-full py-4 filter grayscale opacity-30 dark:invert dark:opacity-70'>
					<div>
						<Image src='/humble.svg' height='100' width='150' />
					</div>
					<div className=''>
						<Image src='/xidax.svg' height='100' width='150' />
					</div>
				</div>
			</Container>
			{/* <div>next stream if available</div> */}
			<Container>
				<div className='grid grid-cols-2 lg:grid-cols-3 gap-2 py-4 lg:px-20'>
					<div className='lg:col-span-2 justify-center my-auto'>
						<div className='relative object-center object-cover h-60 lg:h-80 lg:w-2/3 filter drop-shadow-xl mx-auto'>
							<Image
								src='/nismospoolin-gaming.png'
								// height='400'
								// width='400'
								layout='fill'
								objectFit='cover'
								className='rounded-3xl'
							/>
						</div>
					</div>
					<div className='flex-col px-4 h-full'>
						<h2 className='text-lg font-normal'>New Videos</h2>
						<h3 className='text-3xl lg:text-5xl font-semibold'>
							Every Day at 11AM
						</h3>
						<p className='mt-4 lg:mt-8'>
							With these hours it has never been easier to watch your favorite
							streamer so hit that Follow button, grab a drink and a snack and
							be entertained all day!
						</p>
						<p className='mt-4'>So go, go do that!</p>
					</div>
				</div>
			</Container>
			{/* <div>a little about the channel</div> */}
			{/* <div>top games if available?</div> */}
			<Container>
				<div className='my-16'>
					<h2 className='font-bold text-3xl lg:text-6xl'>Recent Categories</h2>
					<div className='grid grid-cols-2 lg:grid-cols-5 gap-8 px-4 font-semibold mt-12'>
						<div className=''>
							<Image
								src='/new-world_285x380.jpeg'
								height='380'
								width='285'
								layout='intrinsic'
							/>
							<p className='mt-2'>New World</p>
						</div>

						<div className=''>
							<Image
								src='/chatting_285x380.jpeg'
								height='380'
								width='285'
								layout='intrinsic'
							/>
							<p className='mt-2'>Just Chatting</p>
						</div>
						<div className=''>
							<Image
								src='/battlefield_285x380.jpeg'
								height='380'
								width='285'
								layout='intrinsic'
							/>
							<p className='mt-2'>Battlefield 2042</p>
						</div>
						<div className=''>
							<Image
								src='/diablo-2_285x380.jpeg'
								height='380'
								width='285'
								layout='intrinsic'
							/>
							<p className='mt-2'>Diablo II: Resurrected</p>
						</div>
						<div className=''>
							<Image
								src='/old-school-runescape_285x380.jpeg'
								height='380'
								width='285'
								layout='intrinsic'
							/>
							<p className='mt-2'>Old School RuneScape</p>
						</div>
					</div>
				</div>
			</Container>
			{/* <div>featured streams</div> */}
			{/* <div>twitter feed horizontal</div> */}

			{/* subscribe */}
			{/* youtube and twitch links */}
			{/* donate */}
			{/* about */}
			{/* contact */}

			{/* sponsors */}
		</>
	);
};

export default Home;
