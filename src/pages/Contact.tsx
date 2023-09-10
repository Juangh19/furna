import { useState } from 'react';
import Logo from '../assets/images/Logo.png';
import { Newsletter } from '../components/Newsletter';

type FormData = {
	name: React.HTMLInputTypeAttribute | undefined;
	email: React.HTMLInputTypeAttribute | undefined;
	subject: React.HTMLInputTypeAttribute | undefined;
	message: React.HTMLInputTypeAttribute | undefined;
};

export function Contact() {
	const [formData, setFormData] = useState<FormData>({
		name: '',
		email: '',
		subject: '',
		message: '',
	});

	const isValidEmail = (email: string) => {
		// Regex para validar un correo electrónico
		const re = /\S+@\S+\.\S+/;
		return re.test(email);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (
			formData.name &&
			formData.email &&
			formData.subject &&
			formData.message
		) {
			if (isValidEmail(formData.email)) {
				alert('Message sent successfully');
				setFormData({
					name: '',
					email: '',
					subject: '',
					message: '',
				});
			} else {
				alert('Please enter a valid email address');
			}
		} else {
			alert('Please fill all the fields');
		}
	};

	return (
		<>
			<div className='flex-1 w-full'>
				<section className='flex max-w-4xl gap-8 px-8 py-12 mx-auto '>
					<div className='bg-[#e9e9e9] flex-1 sm:flex flex-col items-center text-center gap-4 justify-center hidden  px-4'>
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
					<div className='flex-1 max-w-sm mx-auto'>
						<div className='flex items-center gap-3 mb-4'>
							<h2 className='text-3xl font-bold sm:text-xl'>CONTACT US</h2>
							<img className='w-8' src={Logo} alt='' />
						</div>
						<form onSubmit={handleSubmit} className='flex flex-col gap-4'>
							<input
								value={formData.name}
								onChange={(e) =>
									setFormData({ ...formData, name: e.target.value })
								}
								placeholder='Your name'
								className='px-4 py-2 border rounded outline-none focus:ring-1 focus:ring-gold focus:ring-opacity-40 '
								type='text'
								autoComplete='off'
							/>
							<input
								value={formData.email}
								onChange={(e) =>
									setFormData({ ...formData, email: e.target.value })
								}
								placeholder='Email'
								className='px-4 py-2 border rounded outline-none focus:ring-1 focus:ring-gold focus:ring-opacity-40 '
								type='text'
							/>
							<input
								value={formData.subject}
								onChange={(e) =>
									setFormData({ ...formData, subject: e.target.value })
								}
								placeholder='Subject'
								className='px-4 py-2 border rounded outline-none focus:ring-1 focus:ring-gold focus:ring-opacity-40 '
								type='text'
								autoComplete='off'
							/>
							<textarea
								onChange={(e) =>
									setFormData({ ...formData, message: e.target.value })
								}
								value={formData.message}
								placeholder='Write something'
								className='px-4 py-2 border rounded outline-none resize-none focus:ring-1 focus:ring-gold focus:ring-opacity-40 '
								name=''
								autoComplete='off'
								rows={5}
							></textarea>
							<button
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
