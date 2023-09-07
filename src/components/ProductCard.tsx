type ProductCardProps = {
	img: string;
	description: string;
	price: number;
};

export function ProductCard({ img, description, price }: ProductCardProps) {
	return (
		<div className='flex flex-1 flex-col gap-2 px-6 py-4 border rounded-lg border-gold min-w-[14rem] items-center max-w-xs  '>
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
			<div className='flex items-center justify-between w-full gap-2 '>
				<span className='font-bold'>
					$
					{Number.isInteger(price)
						? price.toFixed(2)
						: Math.floor(price * 100) / 100}
				</span>
				<button className='p-3 text-xs text-white rounded-md bg-gold'>
					Add to cart
				</button>
			</div>
		</div>
	);
}
