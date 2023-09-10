import { Newsletter } from '../components/Newsletter';
import AboutImg from '../assets/images/AboutImg.png';

export function About() {
	return (
		<>
			<div className='flex-1 w-full pt-20 pb-12 bg-[#e9e9e9]'>
				<section className='relative flex items-center justify-center max-w-4xl gap-4 px-8 mx-auto '>
					<h1 className='absolute text-6xl font-semibold left-[40%] -top-10'>
						ABOUT US
					</h1>
					<div className='flex-1 '>
						<img src={AboutImg} alt='' />
					</div>
					<div className='flex flex-col justify-center flex-1 pt-8 pl-8'>
						<p className='text-xs font-semibold opacity-70 after:content-[""] after:absolute after:bg-[#141414] after:w-20 after:h-2 after:-bottom-6 after:right-8'>
							Welcome to <strong className='text-sm font-bold'>Furna</strong>,
							where we believe that furniture should do more than just fill a
							space – it should enhance your life. As a leading player in the
							world of furniture design and craftsmanship, we've dedicated
							ourselves to creating pieces that seamlessly blend form, function,
							and style.
							<br />
							<br />
							Our story is one of passion and innovation. For{' '}
							<strong className='text-sm font-bold'>12</strong> years, we've
							been committed to providing our customers with the finest
							furniture that marries artistry with utility. We're not just in
							the business of furniture; we're in the business of making your
							home a more comfortable, beautiful, and personal place.
						</p>
					</div>
				</section>
			</div>
			<Newsletter />
		</>
	);
}
