import Image from 'next/image';
const Card = () => {
	return (
		<div className=' bg-gray-400 p-6 mx-auto max-w-md rounded-xl'>
			<div className='p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4'>
				<div className='flex-shrink-0 relative h-12 w-12'>
					{/* <img className='h-12 w-12' src='/favicon.ico' alt='' /> */}
					<Image
						src='/favicon.ico'
						alt='Vercel Logo'
						className='h-12 w-12'
						layout='fill'
					/>
				</div>
				<div>
					<div className='text-xl font-medium text-black'>Nismospoolin</div>
					<p className='text-gray-500'>FeelsOldMan</p>
				</div>
			</div>
		</div>
	);
};

export default Card;
