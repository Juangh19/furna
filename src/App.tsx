import { Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Home } from './pages/Home';
import { Footer } from './components/Footer';
import CartContextProvider from './context/cart';
import { NotFound } from './pages/NotFound';
import { Product } from './pages/Product';
import { Products } from './pages/Products';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import ScrollToTop from './components/ScrollToTop';

function App() {
	return (
		<div className='min-h-[100svh] bg-[#fff] flex  flex-col'>
			<CartContextProvider>
				<NavBar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/products' element={<Products />} />
					<Route path='/products/:id' element={<Product />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/about' element={<About />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
				<Footer />
			</CartContextProvider>
			<ScrollToTop />
		</div>
	);
}

export default App;
