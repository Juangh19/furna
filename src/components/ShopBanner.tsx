import ShopBannerImg from '../assets/images/ShopBannerImg.png';

export function ShopBanner() {
	return (
		<div className='w-full bg-[#e9e9e9]'>
			<section className='flex items-center justify-between max-w-4xl gap-12 px-8 py-16 mx-auto'>
				<div className='flex flex-col gap-4 basis-7/12'>
					<h2 className='text-4xl font-semibold'>
						{' '}
						Furniture that blends creativity with serenity
					</h2>
					<p className='text-xs'>
						Explore our curated selection of exquisite furniture pieces,
						designed to enhance your living
					</p>
					<a
						href=''
						className=' bg-darkText w-fit text-[#fcfcfc] p-3 hover:text-darkText hover:bg-transparent hover:outline-darkText hover:outline    '
					>
						SHOP NOW
					</a>
				</div>
				<div className=''>
					<div className='relative w-full bg-[rgba(95,79,48,0.30)] '>
						<img
							src={ShopBannerImg}
							alt=''
							className='relative w-full -top-6 -left-6'
						/>
					</div>
				</div>
			</section>
		</div>
	);
}
