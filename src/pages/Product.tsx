import { useParams } from 'react-router-dom';
import { Newsletter } from '../components/Newsletter';
import { Product } from '../reducers/cart';
import { useEffect, useState } from 'react';
import { items } from '../data/products';
import { Trending } from '../components/Trending';
import { useCart } from '../context/cart';

export function Product() {
	const [product, setProduct] = useState<Product | undefined>(undefined);
	const [mainImg, setMainImg] = useState<string | undefined>(undefined);
	const [quantity, setQuantity] = useState<number>(1);

	const { addToCart } = useCart();

	const { id } = useParams<{ id: string }>();

	useEffect(() => {
		const product = items.find((item) => item.id === Number(id));
		setProduct(product);
		setMainImg(product?.img);
		setQuantity(product?.quantity || 1);
	}, [id]);

	return (
		<>
			{product ? (
				<div className=' flex-1 bg-[#e9e9e9] w-full text-darkText'>
					<section className='flex items-center justify-center max-w-4xl gap-4 px-8 pt-8 pb-12 mx-auto sm:py-12 '>
						<div className='flex-col items-center flex-1 hidden sm:flex '>
							<div className='max-w-[16rem] bg-[#fcfcfc]  '>
								<img className='w-full aspect-square ' src={mainImg} alt='' />
							</div>
							<div className='flex gap-4 mt-4 '>
								<div
									onMouseEnter={() => setMainImg(product?.img)}
									className='w-16 h-16 bg-[#fcfcfc]'
								>
									<img
										className='object-cover w-full h-full'
										src={product?.img}
										alt=''
									/>
								</div>
								<div
									onMouseEnter={() => setMainImg(product?.otherImgs[0])}
									className='w-16 h-16 bg-[#fcfcfc]'
								>
									<img
										className='object-cover w-full h-full'
										src={product?.otherImgs[0]}
										alt=''
									/>
								</div>
								<div
									onMouseEnter={() => setMainImg(product?.otherImgs[1])}
									className='w-16 h-16 bg-[#fcfcfc]'
								>
									<img
										className='object-cover w-full h-full'
										src={product?.otherImgs[1]}
										alt=''
									/>
								</div>
							</div>
						</div>
						<div className='flex flex-col flex-1 gap-2'>
							<div className='text-center sm:text-left'>
								<h2 className='mb-1 text-4xl font-semibold'>
									{product?.description}
								</h2>
								<span className='text-xl font-semibold'>
									$
									{Number.isInteger(product?.price)
										? product?.price.toFixed(2)
										: Math.floor(product?.price * 100) / 100}
								</span>
							</div>
							<div className='flex flex-col items-center flex-1 mb-6 sm:hidden '>
								<div className='max-w-[16rem] bg-[#fcfcfc]  '>
									<img className='w-full aspect-square ' src={mainImg} alt='' />
								</div>
								<div className='flex gap-4 mt-4 '>
									<div
										onMouseEnter={() => setMainImg(product?.img)}
										className='w-16 h-16 bg-[#fcfcfc]'
									>
										<img
											className='object-cover w-full h-full'
											src={product?.img}
											alt=''
										/>
									</div>
									<div
										onMouseEnter={() => setMainImg(product?.otherImgs[0])}
										className='w-16 h-16 bg-[#fcfcfc]'
									>
										<img
											className='object-cover w-full h-full'
											src={product?.otherImgs[0]}
											alt=''
										/>
									</div>
									<div
										onMouseEnter={() => setMainImg(product?.otherImgs[1])}
										className='w-16 h-16 bg-[#fcfcfc]'
									>
										<img
											className='object-cover w-full h-full'
											src={product?.otherImgs[1]}
											alt=''
										/>
									</div>
								</div>
							</div>
							<p className='text-sm opacity-90'>{product?.specs}</p>
							<span className='text-xl font-semibold'>Details</span>
							<ul className='flex flex-col gap-1 px-6 text-sm font-semibold list-disc'>
								<li>
									Size: <span className='font-normal '>{product?.size}</span>
								</li>
								<li>
									Weight:{' '}
									<span className='font-normal '>{product?.weight}</span>
								</li>
								<li>
									Texture:{' '}
									<span className='font-normal '>{product?.texture}</span>
								</li>
							</ul>
							<div className='flex justify-center gap-4 mt-2 sm:justify-start'>
								<div className='flex items-center gap-3 px-3 py-1 font-semibold border-2 w-fit border-gold text-gold '>
									<button
										onClick={() => {
											quantity > 1 && setQuantity(quantity - 1);
										}}
										className='opacity-70 hover:opacity-100'
									>
										-
									</button>
									<span className='px-2'>{quantity}</span>
									<button
										onClick={() => setQuantity(quantity + 1)}
										className='opacity-70 hover:opacity-100'
									>
										+
									</button>
								</div>
								<button
									onClick={() => {
										addToCart(product, quantity);
									}}
									className='text-xs  hover:bg-transparent hover:text-gold bg-gold text-[#fcfcfc] font-semibold px-8 py-[0.6rem] border-2 border-gold'
								>
									ADD TO CART
								</button>
							</div>
						</div>
					</section>
				</div>
			) : (
				<div className='flex-1 text-center py-52'>
					<h2 className='text-6xl font-semibold text-gold opacity-80'>
						Product not found :(
					</h2>
				</div>
			)}
			<Trending />
			<Newsletter />
		</>
	);
}
