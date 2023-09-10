import { useEffect, useState } from 'react';
import { Newsletter } from '../components/Newsletter';
import { items } from '../data/products';
import { ProductCard } from '../components/ProductCard';

type category =
	| 'furniture'
	| 'lamp'
	| 'chair'
	| 'kitchen'
	| 'electronic'
	| 'skin-care'
	| null;

export function Products() {
	const [category, setCategory] = useState<category>(null);

	useEffect(() => {
		const savedCategory = JSON.parse(
			localStorage.getItem('category') || 'null'
		);
		console.log(savedCategory);

		setCategory(savedCategory);
	}, []);

	const filteredProducts = (category: category) =>
		category === null
			? items
			: items.filter((item) => item.category === category);

	useEffect(() => {
		localStorage.setItem('category', JSON.stringify(category));
	}, [category]);

	return (
		<>
			<div className='flex-1 w-full '>
				<section className='max-w-4xl px-8 py-12 mx-auto'>
					<h1 className='mb-10 text-4xl font-semibold text-center text-gold'>
						Furniture Solutions for Every Taste
					</h1>
					<div className='flex flex-wrap justify-center gap-8'>
						<div
							onClick={() => setCategory(null)}
							className={`
              flex flex-col transition-all items-center opacity-60 cursor-pointer hover:opacity-100 ${
								category === null && 'opacity-100 scale-110  text-gold'
							}`}
						>
							<i className='text-4xl fa-solid fa-border-all'></i>
							<span className={`${category === null && 'font-bold'}`}>All</span>
						</div>
						<div
							onClick={() => setCategory('furniture')}
							className={`
              flex flex-col transition-all items-center opacity-60 cursor-pointer hover:opacity-100 ${
								category === 'furniture' && 'opacity-100 scale-110  text-gold'
							}`}
						>
							<i className='text-4xl fa-solid fa-couch'></i>
							<span className={`${category === 'furniture' && 'font-bold'}`}>
								Furnitures
							</span>
						</div>
						<div
							onClick={() => setCategory('lamp')}
							className={`
              flex flex-col transition-all items-center opacity-60 cursor-pointer hover:opacity-100 ${
								category === 'lamp' && 'opacity-100 scale-110  text-gold'
							}`}
						>
							<i className='text-4xl fa-solid fa-lightbulb'></i>
							<span className={`${category === 'lamp' && 'font-bold'}`}>
								Lamps
							</span>
						</div>
						<div
							onClick={() => setCategory('chair')}
							className={`
              flex flex-col transition-all items-center opacity-60 cursor-pointer hover:opacity-100 ${
								category === 'chair' && 'opacity-100 scale-110  text-gold'
							}`}
						>
							<i className='text-4xl fa-solid fa-chair'></i>
							<span className={`${category === 'chair' && 'font-bold'}`}>
								Chairs
							</span>
						</div>
						<div
							onClick={() => setCategory('kitchen')}
							className={`
              flex flex-col transition-all items-center opacity-60 cursor-pointer hover:opacity-100 ${
								category === 'kitchen' && 'opacity-100 scale-110  text-gold'
							}`}
						>
							<i className='text-4xl fa-solid fa-kitchen-set'></i>
							<span className={`${category === 'kitchen' && 'font-bold'}`}>
								Kitchen
							</span>
						</div>
						<div
							onClick={() => setCategory('electronic')}
							className={`
              flex flex-col transition-all items-center opacity-60 cursor-pointer hover:opacity-100 ${
								category === 'electronic' && 'opacity-100 scale-110  text-gold'
							}`}
						>
							<i className='text-4xl fa-solid fa-plug-circle-bolt'></i>
							<span className={`${category === 'electronic' && 'font-bold'}`}>
								Electronics
							</span>
						</div>
						<div
							onClick={() => setCategory('skin-care')}
							className={`
              flex flex-col transition-all items-center opacity-60 cursor-pointer hover:opacity-100 ${
								category === 'skin-care' && 'opacity-100 scale-110  text-gold'
							}`}
						>
							<i className='text-4xl fa-solid fa-hand-dots'></i>
							<span className={`${category === 'skin-care' && 'font-bold'}`}>
								Skin Care
							</span>
						</div>
					</div>
					<hr className='mt-4 mb-6' />
					<div className='grid justify-center gap-4 min-[540px]:grid-cols-2 sm:justify-normal  md:grid-cols-3 mb-8'>
						{filteredProducts(category).map((product) => {
							return <ProductCard key={product.id} product={product} />;
						})}
					</div>
				</section>
			</div>
			<Newsletter />
		</>
	);
}
