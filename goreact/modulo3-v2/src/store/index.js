import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reduces from './reducers';
import sagas from './sagas';

const sagaMiddlewares = createSagaMiddleware();
const middlewares = [sagaMiddlewares];

const composer = process.env.NODE_ENV === 'development'
	? compose(
		applyMiddleware(...middlewares),
		console.tron.createEnhancer()
	)
	: applyMiddleware(...middlewares);

const store = createStore(reduces, composer);

sagaMiddlewares.run(sagas);

export default store;