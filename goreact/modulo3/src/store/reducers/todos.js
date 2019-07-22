const INITIAL_STATE = [
	{ id: 1, text: 'Mock Fazer café' },
	{ id: 2, text: 'Mock Estudar React' }
];

const todos = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return [...state, {
					id: Math.random(),
					text: action.payload.text
				}
			];
		default:
			return state;
	}
};

export default todos;
