import { useCart } from '../context/cart';
import { CartIcon } from '../icons/Icons';
import { useState } from 'react';
import { Cart } from './Cart';
import { Link } from 'react-router-dom';

export function NavBar() {
	const { cartItems } = useCart();

	const [showCart, setShowCart] = useState(false);

	return (
		<header className='overflow-hidden bg-[#fcfcfc] border-b border-b-[#e9e9e9] text-darkText sticky top-0 z-50'>
			<section className='flex items-center justify-between max-w-4xl px-8 py-4 mx-auto '>
				<div className='text-2xl font-bold'>
					<Link to='/'>
						<h2>
							Furna<span className='text-gold '>.</span>
						</h2>
					</Link>
				</div>
				<div className='flex gap-6 text-[1rem]'>
					<Link to='/' className=' hover:opacity-75'>
						Home
					</Link>
					<Link to='products' className=' hover:opacity-75'>
						Products
					</Link>
					<a href='' className=' hover:opacity-75'>
						About
					</a>
					<a href='' className=' hover:opacity-75'>
						Contact
					</a>
				</div>
				<div
					className='relative w-6 h-6 cursor-pointer '
					onClick={() => setShowCart(true)}
				>
					{cartItems.length > 0 && (
						<div className='absolute grid w-4 h-4 bg-red-500 rounded-full -top-1 rotate-6 -right-1 place-items-center'>
							<span className='text-xs text-white'>{cartItems.length}</span>
						</div>
					)}
					<CartIcon />
				</div>
			</section>

			<Cart showCart={showCart} setShowCart={setShowCart} />
		</header>
	);
}
