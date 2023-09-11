import { Link } from 'react-router-dom';

export function NotFound() {
	return (
		<div className='flex flex-col items-center justify-center flex-1 px-12 text-center '>
			<h1 className='mb-4 text-5xl font-bold opacity-60'>404 :(</h1>
			<h2 className='mb-4 text-2xl font-semibold'>
				Oops! The page you are looking for does not exist. It might have been
				moved or deleted.
			</h2>
			<Link
				to='/'
				className='text-lg  hover:bg-transparent hover:text-[#141414] bg-[#141414] text-[#fcfcfc] font-semibold px-8 py-[0.6rem] border-2 border-[#141414]'
			>
				GO BACK HOME
			</Link>
		</div>
	);
}
