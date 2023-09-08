import { Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Home } from './pages/Home';
import { Footer } from './components/Footer';
import CartContextProvider from './context/cart';

function App() {
	return (
		<div className=''>
			<CartContextProvider>
				<NavBar />
				<Routes>
					<Route path='/' element={<Home />} />
				</Routes>
				<Footer />
			</CartContextProvider>
		</div>
	);
}

export default App;
