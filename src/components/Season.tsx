import { useState, useEffect } from 'react';
import { items } from '../data/products';
import { ProductCard } from './ProductCard';
import { Product } from '../reducers/cart';
import { Link } from 'react-router-dom';

type SeasonProduct = Product & {
	seasonal: true;
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
						return <ProductCard key={product.id} product={product} />;
					})}
				</div>
				<div className='mx-auto w-fit'>
					<Link
						to='/products'
						className='p-2 text-xl font-semibold border rounded border-gold text-gold'
					>
						View all
					</Link>
				</div>
			</section>
		</div>
	);
}
