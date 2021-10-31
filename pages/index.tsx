import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Card from '../components/Card';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';

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

			<Card />
			<div className='h-screen'></div>

			<footer className={styles.footer}>
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
			</footer>
		</>
	);
};

export default Home;
