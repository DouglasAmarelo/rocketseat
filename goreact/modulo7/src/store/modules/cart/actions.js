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

export const updateAmountRequest = (id, amount) => ({
	type: '@cart/UPDATE_AMOUNT_REQUEST',
	id: id,
	amount
});

export const updateAmountSuccess = (id, amount) => ({
	type: '@cart/UPDATE_AMOUNT_SUCCESS',
	id: id,
	amount
});
