import { Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Home } from './pages/Home';
import { Footer } from './components/Footer';
import CartContextProvider from './context/cart';
import { NotFound } from './pages/NotFound';
import { Product } from './pages/Product';
import { Products } from './pages/Products';

function App() {
	return (
		<div className='min-h-[100svh] flex  flex-col'>
			<CartContextProvider>
				<NavBar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/products' element={<Products />} />
					<Route path='products/:id' element={<Product />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
				<Footer />
			</CartContextProvider>
		</div>
	);
}

export default App;
