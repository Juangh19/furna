import { CartIcon } from '../icons/Icons';

export function NavBar() {
	return (
		<header className='bg-[#fcfcfc] border-b border-b-[#e9e9e9] text-darkText sticky top-0 z-50'>
			<section className='flex items-center justify-between max-w-4xl px-8 py-4 mx-auto '>
				<div className='text-2xl font-bold'>
					<h2>
						Furna<span className='text-gold '>.</span>
					</h2>
				</div>
				<div className='flex gap-6 text-[1rem]'>
					<a href='' className=' hover:opacity-75'>
						Home
					</a>
					<a href='' className=' hover:opacity-75'>
						Products
					</a>
					<a href='' className=' hover:opacity-75'>
						About
					</a>
					<a href='' className=' hover:opacity-75'>
						Contact
					</a>
				</div>
				<div className='w-6 h-6 cursor-pointer '>
					<CartIcon />
				</div>
			</section>
		</header>
	);
}
