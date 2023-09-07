export function Footer() {
	return (
		<footer className='px-12 py-12 text-white bg-darkText'>
			<div className='flex flex-col items-center '>
				<hr className='relative z-0 w-full top-4 opacity-70' />
				<div className='relative z-10 flex justify-center gap-4 px-6 mb-4 text-2xl bg-darkText w-fit '>
					<a href=''>
						<i className='opacity-80 hover:opacity-100 fa-brands fa-facebook'></i>
					</a>
					<a href=''>
						<i className='opacity-80 hover:opacity-100 fa-brands fa-instagram'></i>
					</a>
					<a href=''>
						<i className='opacity-80 hover:opacity-100 fa-brands fa-twitter'></i>
					</a>
					<a href=''>
						<i className='opacity-80 hover:opacity-100 fa-brands fa-youtube'></i>
					</a>
				</div>
			</div>
			<div className='flex justify-center gap-4 mx-auto mt-2 mb-4'>
				<a href='' className='opacity-80 hover:opacity-100'>
					Home
				</a>
				<a href='' className='opacity-80 hover:opacity-100'>
					Products
				</a>
				<a href='' className='opacity-80 hover:opacity-100'>
					About
				</a>
				<a href='' className='opacity-80 hover:opacity-100'>
					Contact
				</a>
			</div>
			<div className='flex flex-col items-center gap-2'>
				<span className='mb-1 text-2xl font-semibold'>Furna</span>
				<span className='opacity-80'>
					Copyright © {new Date().getFullYear()} Furna.
				</span>
				<div className='flex gap-4'>
					<a href='' className='underline opacity-80 hover:opacity-100'>
						Legal information
					</a>
					<a href='' className='underline opacity-80 hover:opacity-100'>
						Privacy policy
					</a>
				</div>
			</div>
		</footer>
	);
}
