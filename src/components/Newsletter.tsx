export function Newsletter() {
	return (
		<div className='w-full bg-[#FBEAC7]'>
			<section className='flex max-w-4xl gap-8 px-8 py-12 mx-auto'>
				<div className='flex-1'>
					<h3 className='mb-2 text-3xl font-semibold '>Join Our Newsletter</h3>
					<p className='text-xs'>
						Subscribe now for free and enjoy a 10% discount on your initial
						purchase.
					</p>
				</div>
				<div className='flex justify-end flex-1'>
					<form action='' className='flex flex-col items-end w-full max-w-xs '>
						<input
							type='text'
							placeholder='Your email'
							className='w-full p-2 font-semibold bg-transparent border-b outline-none text-slate-500 border-darkText'
						/>
						<button className='p-3 text-[#fcfcfc] bg-darkText w-fit'>
							Subscribe
						</button>
					</form>
				</div>
			</section>
		</div>
	);
}
