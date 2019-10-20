export const addToCart = product => ({
	type: '@cart/ADD',
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