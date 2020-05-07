import React, { useState } from "react"
import firebase from "../../firebase"
import { Link, useHistory } from "react-router-dom"

import {
	Grid,
	Form,
	Segment,
	Header,
	Image,
	Button,
	Message,
} from "semantic-ui-react"

const Login = () => {
	let history = useHistory()
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [errors, setErrors] = useState([])

	const handleSubmit = (event) => {
		event.preventDefault()
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(() => {
				console.log("hello")
			})
			.catch((error) => {
				let errorCode = error.code
				let errorMessage = error.message
				errors.setErrors(errors.concat(error))
				console.log(errorCode, errorMessage)
			})
	}

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

export default Login
