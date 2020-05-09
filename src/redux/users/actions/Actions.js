import firebase from "../../../firebase"

import {
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	LOGOUT_REQUEST,
	LOGOUT_FAILURE,
	LOGOUT_SUCCESS,
	VERIFY_REQUEST,
	VERIFY_SUCCESS,
	SIGNUP_FAILURE,
	SIGNUP_REQUEST,
	SIGNUP_SUCCESS,
} from "./ActionTypes"

const requestLogin = () => {
	return {
		type: LOGIN_REQUEST,
	}
}

const receiveLogin = (user) => {
	return {
		type: LOGIN_SUCCESS,
		payload: user,
	}
}

const loginError = (error) => {
	return {
		type: LOGIN_FAILURE,
		payload: error,
	}
}

const requestLogout = () => {
	return {
		type: LOGOUT_REQUEST,
	}
}

const receiveLogout = () => {
	return {
		type: LOGOUT_SUCCESS,
	}
}

const logoutError = () => {
	return {
		type: LOGOUT_FAILURE,
	}
}

const verifyRequest = () => {
	return {
		type: VERIFY_REQUEST,
	}
}

const verifySuccess = () => {
	return {
		type: VERIFY_SUCCESS,
	}
}

const signupRequest = () => {
	return {
		type: SIGNUP_REQUEST,
	}
}

const signupFailure = (error) => {
	return {
		type: SIGNUP_FAILURE,
		payload: error,
	}
}

const signupSuccess = (user) => {
	return {
		type: SIGNUP_SUCCESS,
		payload: user,
	}
}

export const loginUser = (email, password) => (dispatch) => {
	dispatch(requestLogin())

	firebase
		.auth()
		.signInWithEmailAndPassword(email, password)
		.then((user) => {
			dispatch(receiveLogin(user))
			console.log("user logged in")
		})
		.catch((error) => {
			console.log("There was error with sign in")
			console.log(error)
			dispatch(loginError())
		})
}

export const logoutUser = () => (dispatch) => {
	dispatch(requestLogout())
	firebase
		.auth()
		.signOut()
		.then(() => {
			dispatch(receiveLogout())
		})
		.catch((error) => {
			console.log("something wrong with logging out")
			dispatch(loginError(error))
		})
}

export const verifyAuth = () => (dispatch) => {
	dispatch(verifyRequest())

	firebase.auth().onAuthStateChanged((user) => {
		if (user !== null) {
			dispatch(receiveLogin(user))
		}
		dispatch(verifySuccess())
	})
}

export const signupUser = (email, password) => (dispatch) => {
	dispatch(signupRequest)

	firebase
		.auth()
		.createUserWithEmailAndPassword(email, password)
		.then((user) => {
			dispatch(signupSuccess(user))
			console.log("this is sign up success from user action")
		})
		.catch((error) => {
			dispatch(signupFailure(error))
			console.log("this is sign up fail from user action")
		})
}
