import { useState, useEffect } from 'react';
import { items } from '../data/products';
import { ProductCard } from './ProductCard';

type SeasonProduct = {
	description: string;
	price: number;
	img: string;
};

export function Season() {
	const [seasonProducts, setSeasonProducts] = useState<SeasonProduct[]>([]);

	useEffect(() => {
		const seasonProducts = items.filter(
			(item) => item.seasonal === true
		) as SeasonProduct[];

		setSeasonProducts(seasonProducts);
	}, []);

	return (
		<div className='w-full'>
			<section className='max-w-4xl px-8 py-12 mx-auto'>
				<h2 className='mb-6 text-4xl font-semibold'>Products of the season</h2>

				<div className='grid justify-center gap-4 min-[540px]:grid-cols-2 sm:justify-normal  md:grid-cols-3 mb-8'>
					{seasonProducts.map((product) => {
						return (
							<ProductCard
								description={product.description}
								price={product.price}
								img={product.img}
							/>
						);
					})}
				</div>
				<div className='mx-auto w-fit'>
					<a
						href=''
						className='p-2 text-xl font-semibold border rounded border-gold text-gold'
					>
						View all
					</a>
				</div>
			</section>
		</div>
	);
}
