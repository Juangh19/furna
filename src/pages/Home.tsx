import { Hero } from '../components/Hero';
import { Trending } from '../components/Trending';
import { ShopBanner } from '../components/ShopBanner';
import { Season } from '../components/Season';
import { AboutBanner } from '../components/AboutBanner';
import { Newsletter } from '../components/Newsletter';

export function Home() {
	return (
		<main className=' text-darkText'>
			<Hero />
			<Trending />
			<ShopBanner />
			<Season />
			<AboutBanner />
			<Newsletter />
		</main>
	);
}
