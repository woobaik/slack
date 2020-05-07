import { combineReducers } from "redux"

import userAuth from "./users/reducer/reducer"

export default combineReducers({
	user: userAuth,
})
