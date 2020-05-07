import React from "react"
import "./App.css"
import "semantic-ui-css/semantic.min.css"
import { connect } from "react-redux"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import NavBar from "./header/Header.component"
import Login from "./auth/Login.component"
import Register from "./auth/Register.component"
import Home from "./Home"
import ProtectedRoute from "./tools/authentication/ProtectedRoute.component"

function App(props) {
	const { isAuthenticated, isVerifying } = props
	return (
		<Router>
			<div className="App">
				<NavBar />
				<Switch>
					<ProtectedRoute
						exact
						path="/"
						component={Home}
						isAuthenticated={isAuthenticated}
						isVerifying={isVerifying}
					/>
					<Route exact path="/login" component={Login} />
					<Route exact path="/register" component={Register} />
				</Switch>
			</div>
		</Router>
	)
}

const mapStateToProps = (state) => {
	return {
		isAuthenticated: state.user.isAuthenticated,
		isVerifying: state.user.isVerifying,
	}
}
export default connect(mapStateToProps)(App)
