import HeroImg from '../assets/images/HeroImg.png';

export function Hero() {
	return (
		<div className='w-full bg-[#e9e9e9]'>
			<section className='flex max-w-4xl px-8 py-16 mx-auto'>
				<div className='flex flex-col justify-center flex-1 gap-6'>
					<h1 className='text-5xl font-bold text-gold'>
						Discover Comfort & Elegance
					</h1>
					<p className=''>
						Customer satisfaction speaks for itself with 2000+ reviews
					</p>
					<a
						href=''
						className='p-3 text-white rounded bg-gold w-fit hover:opacity-70 '
					>
						Explore Products
					</a>
				</div>
				<div className='flex items-center justify-center flex-1 border '>
					<div className='relative w-4/6 p-6'>
						<div className=' bg-[rgba(95,79,48,0.40)] rounded-full aspect-square '>
							<img
								className='absolute w-full -right-12 -top-12'
								src={HeroImg}
								alt=''
							/>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}