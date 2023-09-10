import { useCart } from '../context/cart';
import { CartIcon, HamburguerIcon, XMarkIcon } from '../icons/Icons';
import { useState } from 'react';
import { Cart } from './Cart';
import { Link, NavLink } from 'react-router-dom';

export function NavBar() {
	const { cartItems } = useCart();

	const [showCart, setShowCart] = useState(false);
	const [showMobileMenu, setShowMobileMenu] = useState(false);

	const toggleMobileMenu = () => {
		setShowMobileMenu(!showMobileMenu);
	};

	return (
		<header className='overflow-hidden  bg-[#fcfcfc] border-b border-b-[#e9e9e9] text-darkText sticky top-0 z-50'>
			<section className='flex items-center justify-between max-w-4xl px-8 py-4 mx-auto '>
				<div className='text-2xl font-bold'>
					<Link to='/'>
						<h2>
							Furna<span className='text-gold '>.</span>
						</h2>
					</Link>
				</div>
				<div className='sm:block hidden gap-6 text-[1rem] space-x-4'>
					<NavLink
						to='/'
						className={({ isActive, isPending }) =>
							isPending ? 'hover:opacity-70' : isActive ? 'font-semibold' : ''
						}
					>
						Home
					</NavLink>
					<NavLink
						to='products'
						className={({ isActive, isPending }) =>
							isPending ? 'hover:opacity-70' : isActive ? 'font-semibold' : ''
						}
					>
						Products
					</NavLink>
					<NavLink
						to='about'
						className={({ isActive, isPending }) =>
							isPending ? 'hover:opacity-70' : isActive ? 'font-semibold' : ''
						}
					>
						About
					</NavLink>
					<NavLink
						to='contact'
						className={({ isActive, isPending }) =>
							isPending ? 'hover:opacity-70' : isActive ? 'font-semibold' : ''
						}
					>
						Contact
					</NavLink>
				</div>
				<div className='flex gap-2'>
					{' '}
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
					<button className='block ml-4 sm:hidden' onClick={toggleMobileMenu}>
						<HamburguerIcon />
					</button>
				</div>
			</section>
			<div
				className={`fixed ${
					showMobileMenu ? ' translate-x-0 ' : '  -translate-x-full '
				} transition top-0   flex  items-center justify-center w-full h-screen opacity-95 bg-[#fcfcfc] `}
			>
				<button
					className='absolute w-10 h-10 top-5 right-5 hover:opacity-70 '
					onClick={toggleMobileMenu}
				>
					<XMarkIcon />
				</button>
				<ul className='flex flex-col items-center gap-8 text-gold'>
					<li>
						<Link
							onClick={toggleMobileMenu}
							to='/'
							className='text-2xl font-semibold hover:opacity-70 '
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							onClick={toggleMobileMenu}
							to='/products'
							className='text-2xl font-semibold hover:opacity-70 '
						>
							Products
						</Link>
					</li>
					<li>
						<Link
							onClick={toggleMobileMenu}
							to='/about'
							className='text-2xl font-semibold hover:opacity-70 '
						>
							About
						</Link>
					</li>
					<li>
						<Link
							onClick={toggleMobileMenu}
							to='/contact'
							className='text-2xl font-semibold hover:opacity-70 '
						>
							Contact
						</Link>
					</li>
				</ul>
			</div>

			<Cart showCart={showCart} setShowCart={setShowCart} />
		</header>
	);
}
