import React, { useState } from "react"
import "./Register.style.css"
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

const Register = () => {
	let history = useHistory()

	const [user, setUser] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [passwordConfirmation, setPasswordConfirmation] = useState("")

	const handleSubmit = (event) => {
		event.preventDefault()
		console.log(email, password, passwordConfirmation)

		if (password === passwordConfirmation) {
			firebase
				.auth()
				.createUserWithEmailAndPassword(email, password)
				.catch((error) => {
					console.log("Error Code", error.code)
					console.log("Error Msg", error.message)
				})
		} else {
			console.log("Password is not matching please try again")
		}

		firebase.auth().onAuthStateChanged((user) => {
			console.log("what the fckkk", user)
			if (user) {
				setUser(user)
				history.push("/")
			} else {
				return
			}
		})
	}

	return (
		<Grid
			className="Register"
			textAlign="center"
			style={{ height: "100vh" }}
			verticalAlign="middle">
			<Grid.Column style={{ maxWidth: 450 }}>
				<Header
					size="large"
					as="h2"
					color="violet"
					textAlign="center"
					verticalAlign="justified">
					<Image src={process.env.PUBLIC_URL + "/images/logo.svg"} />
					Get Started!
				</Header>
				<Form size="large" onSubmit={handleSubmit}>
					<Segment stacked>
						<Form.Input
							name="email"
							onChange={(event) => setEmail(event.target.value)}
							icon="at"
							iconPosition="left"
							placeholder="Enter email..."
							type="email"
							fluid
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

						<Form.Input
							name="passwordConfirmation"
							icon="lock"
							iconPosition="left"
							onChange={(event) => setPasswordConfirmation(event.target.value)}
							value={passwordConfirmation}
							type="password"
							placeholder="Enter password again"
						/>

						<Button color="violet" fluid size="large">
							Register
						</Button>
					</Segment>
				</Form>
				<Message>
					Alreay have account? <Link to="/login">Log in</Link>
				</Message>
			</Grid.Column>
		</Grid>
	)
}

export default Register
