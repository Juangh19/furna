/* eslint-disable no-case-declarations */
export const initialCartState: Product[] = [];

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
	| { type: CartActionTypes.ADD_TO_CART; payload: Product }
	| { type: CartActionTypes.CLEAR_CART }
	| { type: CartActionTypes.REMOVE_FROM_CART; payload: Product };

export const cartReducer = (state: Product[], action: CartAction) => {
	switch (action.type) {
		case CartActionTypes.ADD_TO_CART:
			const existingItem = state.find((item) => item.id === action.payload.id);

			if (existingItem) {
				return state.map((item) => {
					return item.id === action.payload.id
						? { ...item, quantity: (item.quantity || 0) + 1 }
						: item;
				});
			} else {
				return [...state, { ...action.payload, quantity: 1 }];
			}

		case CartActionTypes.DECREASE_FROM_CART:
			const existingItem2 = state.find((item) => item.id === action.payload.id);

			if (existingItem2) {
				if (existingItem2.quantity === 1) {
					return state.filter((item) => item.id !== action.payload.id);
				} else {
					return state.map((item) => {
						return item.id === action.payload.id
							? { ...item, quantity: (item.quantity || 1) - 1 }
							: item;
					});
				}
			} else {
				return state;
			}

		case CartActionTypes.REMOVE_FROM_CART:
			return state.filter((item) => item.id !== action.payload.id);

		case CartActionTypes.CLEAR_CART:
			return [];

		default:
			return state;
	}
};
