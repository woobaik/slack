import { applyMiddleware, createStore } from "redux"
import thunkMiddleWare from "redux-thunk"

import { verifyAuth } from "./redux/users/actions/Actions"
import rootReducer from "./redux/index"

const configureStore = (persistedState) => {
	const store = createStore(
		rootReducer,
		persistedState,
		applyMiddleware(thunkMiddleWare)
	)

	store.dispatch(verifyAuth())
	return store
}

export default configureStore
