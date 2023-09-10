import Logo from '../assets/images/Logo.png';
import { Newsletter } from '../components/Newsletter';

export function Contact() {
	return (
		<>
			<div className='flex-1 w-full'>
				<section className='flex max-w-4xl gap-8 px-8 py-12 mx-auto '>
					<div className='bg-[#e9e9e9] flex-1 flex flex-col items-center text-center gap-4 justify-center'>
						<img src={Logo} alt='' />
						<h2 className='text-lg font-bold'>
							YOU CAN <span className='text-[#c68b55]'>CONTACT</span> US
							DIRECTLY AT:
						</h2>
						<a
							className='opacity-80 hover:opacity-100'
							href='mailto:contact@furna.store'
						>
							{' '}
							contact@furna.store{' '}
						</a>
						<p className='opacity-80'>
							Or you write us via the contact form. <br />
							We will get back to you as soon as possible.
						</p>
					</div>
					<div className='flex-1'>
						<h2 className='mb-4 text-xl font-bold'>CONTACT US</h2>
						<form className='flex flex-col gap-4'>
							<input
								placeholder='Your name'
								className='px-4 py-2 border outline-none '
								type='text'
								id='name'
								autoComplete='off'
							/>
							<input
								placeholder='Email'
								className='px-4 py-2 border outline-none '
								type='email'
								id='email'
							/>
							<input
								placeholder='Subject'
								className='px-4 py-2 border outline-none '
								type='text'
								id='subject'
								autoComplete='off'
							/>
							<textarea
								placeholder='Write something'
								className='px-4 py-2 border outline-none resize-none '
								name=''
								id='message'
								autoComplete='off'
								rows={5}
							></textarea>
							<button
								onClick={(e) => {
									e.preventDefault();
								}}
								type='submit'
								className='mt-2 text-xs w-fit hover:bg-transparent hover:text-gold bg-gold text-[#fcfcfc] font-semibold px-6 py-3 border-2 border-gold'
							>
								SEND MESSAGE
							</button>
						</form>
					</div>
				</section>
			</div>
			<Newsletter />
		</>
	);
}
