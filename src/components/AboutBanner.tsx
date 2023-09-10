import { Link } from 'react-router-dom';
import AboutBannerImg from '../assets/images/AboutBannerImg.png';

export function AboutBanner() {
	return (
		<div className='w-full bg-[#e9e9e9]'>
			<section className='flex flex-row-reverse items-center justify-between max-w-4xl gap-12 px-8 py-16 mx-auto'>
				<div className='flex flex-col gap-4 basis-7/12'>
					<h2 className='text-4xl font-semibold'> Discover Our Story</h2>
					<p className='text-xs'>
						Our history embodies expert craftsmanship and a passion for creating
						unique furniture stories.
					</p>
					<Link to='/about' className=' text-gold'>
						<span className='mr-1 underline'>More about us</span>
						<i className='text-xs fa-solid fa-up-right-from-square'></i>
					</Link>
				</div>
				<div className=''>
					<div className='relative w-full bg-[rgba(95,79,48,0.30)] '>
						<img
							src={AboutBannerImg}
							alt=''
							className='relative w-full top-6 left-6'
						/>
					</div>
				</div>
			</section>
		</div>
	);
}
