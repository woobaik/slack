import React from "react"
import "./App.css"
import "semantic-ui-css/semantic.min.css"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from "./auth/Login.component"
import Register from "./auth/Register.component"
import Home from "./Home"

function App() {
	return (
		<Router>
			<div className="App">
				<header>Hello its header</header>
				<Switch>
					<Route exact path="/login" component={Login} />
					<Route exact path="/register" component={Register} />
					<Route exact path="/" component={Home} />
				</Switch>
			</div>
		</Router>
	)
}

export default App
