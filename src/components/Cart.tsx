import { CartIcon } from '../icons/Icons';
import { useCart } from '../context/cart';

export function Cart({
	showCart,
	setShowCart,
}: {
	showCart: boolean;
	setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	const { cartItems, addToCart, decreaseQuantity, removeFromCart } = useCart();

	return (
		<>
			{showCart && (
				<div
					onClick={() => setShowCart(false)}
					className=' fixed top-0 w-full h-[100svh] bg-[#222] bg-opacity-60'
				></div>
			)}
			<div
				className={` ${
					showCart ? 'translate-x-0' : 'translate-x-full'
				} absolute transform transition-transform duration-200 ease-out  top-0 right-0 w-[320px]    h-[100svh] bg-[#fcfcfc] `}
			>
				<div className='h-full p-6 mx-auto'>
					<div className='flex items-center justify-between pr-2 mb-2'>
						<div className='flex gap-2 font-semibold'>
							<CartIcon />
							Your Cart (0)
						</div>
						<i
							onClick={() => setShowCart(false)}
							className='text-2xl cursor-pointer fas fa-times hover:opacity-75'
						></i>
					</div>
					<hr />
					<div className='py-8 overflow-hidden overflow-y-auto h-4/5'>
						{cartItems.map((product) => {
							return (
								<div className='flex items-center justify-between pr-2 mb-6'>
									<div className='flex items-center w-3/5 gap-4 '>
										<img
											className='w-16 '
											src={product.img}
											alt={product.description}
										/>
										<div className='flex flex-col gap-2'>
											<span className='text-xs'>{product.description}</span>
											<span className='font-semibold text-slate-700'>
												${' '}
												{Number.isInteger(product.price)
													? product.price.toFixed(2)
													: Math.floor(product.price * 100) / 100}
											</span>
										</div>
									</div>
									<div className='text-xl'>
										<button
											onClick={() => decreaseQuantity(product)}
											className='px-2 text-2xl opacity-70 hover:opacity-100'
										>
											-
										</button>
										<span className='font-bold'>{product.quantity}</span>
										<button
											onClick={() => addToCart(product)}
											className='px-2 text-2xl opacity-70 hover:opacity-100'
										>
											+
										</button>
									</div>
									<div>
										<button
											onClick={() => removeFromCart(product)}
											className=' opacity-60 hover:opacity-100'
										>
											<i className='fa-solid fa-trash-can'></i>
										</button>
									</div>
								</div>
							);
						})}
					</div>
					<hr />
					<div>
						<div className='flex justify-between my-8'>
							<span className='text-xl'>Total</span>
							<span className='text-xl font-bold'>$ 0.00</span>
						</div>
						<div className='flex items-center justify-end gap-4'>
							<button
								onClick={() => setShowCart(false)}
								className='underline hover:opacity-70'
							>
								Continue shopping
							</button>
							<button className='p-2 text-white rounded font-regular bg-gold opacity-90 hover:opacity-100'>
								Checkout
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
