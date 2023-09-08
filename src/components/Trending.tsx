import { ProductCard } from './ProductCard';
import { useState, useEffect } from 'react';
import { items } from '../data/products';
import { Product } from '../reducers/cart';

type TrendingProduct = Product & {
	trending: true;
};

export function Trending() {
	const [trendingProducts, setTrendingProducts] = useState<TrendingProduct[]>(
		[]
	);

	useEffect(() => {
		const trendingProducts = items.filter(
			(item) => item.trending === true
		) as TrendingProduct[];

		setTrendingProducts(trendingProducts);
	}, []);

	return (
		<div className='w-full'>
			<section className='max-w-4xl px-8 py-12 mx-auto'>
				<h2 className='mb-6 text-4xl font-semibold'>Trending now</h2>
				<div className='w-full overflow-hidden overflow-x-auto'>
					<div className='flex justify-between gap-4 min-w-[40rem]'>
						{trendingProducts.map((product) => {
							return <ProductCard key={product.id} product={product} />;
						})}
					</div>
				</div>
			</section>
		</div>
	);
}
