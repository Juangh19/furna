/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from 'react';
import {
	CartActionTypes,
	Product,
	cartReducer,
	initialCartState,
} from '../reducers/cart';
import React from 'react';

type CartContextProviderProps = {
	children: React.ReactNode;
};

type CartContextType = {
	cartItems: Product[];
	addToCart: (product: Product, quantity?: number) => void;
	decreaseQuantity: (product: Product) => void;
	removeFromCart: (product: Product) => void;
	clearCart: () => void;
};

export const CartContext = createContext<CartContextType | null>(null);

export default function CartContextProvider({
	children,
}: CartContextProviderProps) {
	const [cartItems, dispatch] = useReducer(cartReducer, initialCartState);

	const addToCart = (product: Product, quantity?: number) => {
		dispatch({
			type: CartActionTypes.ADD_TO_CART,
			payload: product,
			quantity: quantity,
		});
	};

	const decreaseQuantity = (product: Product) => {
		dispatch({ type: CartActionTypes.DECREASE_FROM_CART, payload: product });
	};

	const removeFromCart = (product: Product) => {
		dispatch({ type: CartActionTypes.REMOVE_FROM_CART, payload: product });
	};

	const clearCart = () => {
		dispatch({ type: CartActionTypes.CLEAR_CART });
	};

	return (
		<CartContext.Provider
			value={{
				cartItems,
				decreaseQuantity,
				addToCart,
				removeFromCart,
				clearCart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}

export function useCart() {
	const context = useContext(CartContext);
	if (context === null) {
		throw new Error('useCart must be used within a CartContextProvider');
	}
	return context;
}
