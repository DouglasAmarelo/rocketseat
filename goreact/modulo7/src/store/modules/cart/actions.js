export const addToCartRequest = id => ({
	type: '@cart/ADD__REQUEST',
	id
});

export const addToCartSuccess = product => ({
	type: '@cart/ADD_SUCCESS',
	product
});

export const removeFromCart = id => ({
	type: '@cart/REMOVE',
	id: id
});

export const updateAmount = (id, amount) => ({
	type: '@cart/UPDATE_AMOUNT',
	id: id,
	amount
});