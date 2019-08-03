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
		case 'REMOVE_TODO':
			return state.filter(todo => todo.id !== action.payload.id);
		default:
			return state;
	}
};

export default todos;
