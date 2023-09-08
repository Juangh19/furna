import { useCart } from '../context/cart';
import { Product } from '../reducers/cart';

type ProductCardProps = {
	product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
	const { addToCart, cartItems, decreaseQuantity } = useCart();

	const { img, description, price } = product;

	const itemInCart = cartItems.find((item) => item.id === product.id);

	return (
		<div className='flex flex-1 flex-col gap-2 px-6 py-4 border rounded-lg border-gold border-opacity-50 min-w-[14rem] items-center max-w-xs relative  '>
			{itemInCart && (
				<div className='absolute grid w-6 h-6 bg-red-500 rounded-full right-1 top-1 rotate-[5deg] place-items-center'>
					<span className='text-white'>{itemInCart.quantity}</span>
				</div>
			)}
			<a href=''>
				<img className='w-full max-w-[11.5rem]  ' src={img} alt={description} />
			</a>
			<div className='w-full'>
				<a href=''>
					<span className='font-semibold '>
						{description.length < 18
							? description
							: description.slice(0, 18) + '...'}
					</span>
				</a>
			</div>
			<div className='flex items-center justify-between w-full h-10 gap-2 '>
				<span className='font-bold'>
					$
					{Number.isInteger(price)
						? price.toFixed(2)
						: Math.floor(price * 100) / 100}
				</span>
				{itemInCart ? (
					<div className='flex gap-5 text-2xl text-gold'>
						<i
							onClick={() => addToCart(product)}
							className='cursor-pointer fa-solid fa-cart-plus opacity-80 hover:opacity-100'
						></i>
						<i
							onClick={() => decreaseQuantity(product)}
							className='cursor-pointer fa-solid fa-cart-arrow-down opacity-80 hover:opacity-100'
						></i>
					</div>
				) : (
					<button
						onClick={() => addToCart(product)}
						className='p-3 text-xs text-white rounded-md hover:opacity-75 bg-gold'
					>
						Add to cart
					</button>
				)}
			</div>
		</div>
	);
}
