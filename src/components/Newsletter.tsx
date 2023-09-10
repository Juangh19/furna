export function Newsletter() {
	const isValidEmail = (email: string) => {
		// Regex para validar un correo electrónico
		const re = /\S+@\S+\.\S+/;
		return re.test(email);
	};

	return (
		<div className='w-full bg-[#FBEAC7]'>
			<section className='flex flex-col min-[500px]:flex-row max-w-4xl gap-8 px-8 py-12 mx-auto'>
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
							type='email'
							id='newsletterInput'
							placeholder='Your email'
							className='w-full p-2 font-semibold bg-transparent border-b outline-none text-slate-500 border-darkText'
						/>
						<button
							onClick={(e) => {
								e.preventDefault();

								const inputElement = document.getElementById(
									'newsletterInput'
								) as HTMLInputElement;

								if (isValidEmail(inputElement.value)) {
									// Si es un correo electrónico válido, muestra la alerta de suscripción exitosa
									alert('Subscribed successfully');
									//clear form
									inputElement.value = '';
								} else {
									// Si no es un correo electrónico válido, muestra una alerta de error
									alert('Please enter a valid email address');
								}
							}}
							className='p-3 text-[#fcfcfc] bg-darkText w-fit'
						>
							Subscribe
						</button>
					</form>
				</div>
			</section>
		</div>
	);
}
