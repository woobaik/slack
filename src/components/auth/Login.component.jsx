import React, { useState } from "react"
import firebase from "../../firebase"
import { connect } from "react-redux"
import { Link, Redirect } from "react-router-dom"
import { loginUser } from "../../redux/users/actions/Actions"

import {
	Grid,
	Form,
	Segment,
	Header,
	Image,
	Button,
	Message,
} from "semantic-ui-react"

const Login = (props) => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [errors, setErrors] = useState([])
	const { isLoggingIn, isAuthenticated, loginError } = props

	const handleSubmit = (event) => {
		event.preventDefault()
		props.dispatch(loginUser(email, password))
	}

	if (isAuthenticated) {
		return <Redirect to="/" />
	} else {
		return (
			<Grid
				className="Register"
				textAlign="center"
				style={{ height: "100vh" }}
				verticalAlign="middle">
				<Grid.Column style={{ maxWidth: 450 }}>
					<Header size="large" as="h2" color="violet" textAlign="center">
						<Image src={process.env.PUBLIC_URL + "/images/logo.svg"} />
						Log In
					</Header>
					<Form size="large" onSubmit={handleSubmit}>
						<Segment stacked>
							<Form.Input
								name="email"
								onChange={(event) => setEmail(event.target.value)}
								icon="at"
								iconPosition="left"
								placeholder="Enter email..."
								value={email}
							/>

							<Form.Input
								fluid
								name="password"
								onChange={(event) => setPassword(event.target.value)}
								icon="lock"
								iconPosition="left"
								value={password}
								type="password"
								placeholder="Enter password"
							/>

							<Button color="violet" fluid size="large">
								Log In
							</Button>
						</Segment>
					</Form>
					{errors.length > 0 ? <Message></Message> : <div></div>}
					<Message>
						Don't have account yet? <Link to="/register">Sign Up</Link>
					</Message>
				</Grid.Column>
			</Grid>
		)
	}
}

const mapStateToProps = (state) => {
	console.log(state)
	return {
		isLoggingIn: state.user.isLoggingIn,
		loginError: state.user.loginError,
		isAuthenticated: state.user.isAuthenticated,
	}
}

export default connect(mapStateToProps)(Login)
