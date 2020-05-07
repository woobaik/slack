import * as firebase from "firebase/app"

import "firebase/auth"
import "firebase/firestore"

const config = {
	apiKey: "AIzaSyA9MXwhKKzkFMWlwHPJaqHF-Q3-08pm12k",
	authDomain: "slack-clone-8850d.firebaseapp.com",
	databaseURL: "https://slack-clone-8850d.firebaseio.com",
	projectId: "slack-clone-8850d",
	storageBucket: "slack-clone-8850d.appspot.com",
	messagingSenderId: "605480570290",
	appId: "1:605480570290:web:fda935d5cfcba1f78ea8ab",
	measurementId: "G-CQGDMYHTWL",
}

firebase.initializeApp(config)
export const baseDb = firebase.firestore()
export default firebase
