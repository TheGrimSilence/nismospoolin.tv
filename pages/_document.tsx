import Document, {
	Html,
	Head,
	Main,
	NextScript,
	DocumentContext,
} from 'next/document';
import Footer from '../components/Footer';
import Header from '../components/Header';

class CustomDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
		return initialProps;
	}

	render() {
		return (
			<Html>
				<Head>
					<link rel='preconnect' href='https://fonts.googleapis.com' />
					<link rel='preconnect' href='https://fonts.gstatic.com' />
					<link
						href='https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap'
						rel='stylesheet'
					/>
					<link
						rel='icon'
						type='image/svg+xml'
						href='/assets/images/favicon.svg'
					/>
					<link rel='icon' type='image/png' href='/assets/images/favicon.png' />
				</Head>
				<body className='dark:bg-gray-900' >
					<Main />
					<NextScript />
					<Footer />
				</body>
			</Html>
		);
	}
}

export default CustomDocument;
