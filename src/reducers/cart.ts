/* eslint-disable no-case-declarations */

type CartFromStorage = Product[] | null;

const cartFromStorage: CartFromStorage = JSON.parse(
	localStorage.getItem('cart') || '[]'
);

export const initialCartState: Product[] = cartFromStorage || [];

export interface Product {
	id: number;
	category: string;
	img: string;
	description: string;
	price: number;
	otherImgs: string[];
	specs: string;
	texture: string;
	weight: string;
	size: string;
	trending?: boolean;
	seasonal?: boolean;
	quantity?: number;
}

export enum CartActionTypes {
	ADD_TO_CART = 'ADD_TO_CART',
	REMOVE_FROM_CART = 'REMOVE_FROM_CART',
	CLEAR_CART = 'CLEAR_CART',
	DECREASE_FROM_CART = 'DECREASE_FROM_CART',
}

type CartAction =
	| { type: CartActionTypes.DECREASE_FROM_CART; payload: Product }
	| { type: CartActionTypes.ADD_TO_CART; payload: Product; quantity?: number }
	| { type: CartActionTypes.CLEAR_CART }
	| { type: CartActionTypes.REMOVE_FROM_CART; payload: Product };

export const cartReducer = (state: Product[], action: CartAction) => {
	switch (action.type) {
		case CartActionTypes.ADD_TO_CART:
			const existingItem = state.find((item) => item.id === action.payload.id);

			if (existingItem) {
				const updatedState = state.map((item) => {
					if (item.id === action.payload.id) {
						if (action.quantity) {
							return { ...item, quantity: action.quantity };
						} else {
							return { ...item, quantity: (item.quantity || 1) + 1 };
						}
					} else {
						return item;
					}
				});
				localStorage.setItem('cart', JSON.stringify(updatedState));
				return updatedState;
			} else {
				const updatedState = [
					...state,
					{ ...action.payload, quantity: action.quantity || 1 },
				];
				localStorage.setItem('cart', JSON.stringify(updatedState));
				return updatedState;
			}

		case CartActionTypes.DECREASE_FROM_CART:
			const existingItem2 = state.find((item) => item.id === action.payload.id);

			if (existingItem2) {
				if (existingItem2.quantity === 1) {
					const updatedState = state.filter(
						(item) => item.id !== action.payload.id
					);
					localStorage.setItem('cart', JSON.stringify(updatedState));
					return updatedState;
				} else {
					const updatedState = state.map((item) => {
						return item.id === action.payload.id
							? { ...item, quantity: (item.quantity || 1) - 1 }
							: item;
					});
					localStorage.setItem('cart', JSON.stringify(updatedState));
					return updatedState;
				}
			} else {
				return state;
			}

		case CartActionTypes.REMOVE_FROM_CART:
			const updatedState = state.filter(
				(item) => item.id !== action.payload.id
			);
			localStorage.setItem('cart', JSON.stringify(updatedState));
			return updatedState;

		case CartActionTypes.CLEAR_CART:
			localStorage.setItem('cart', JSON.stringify([]));
			return [];

		default:
			return state;
	}
};
