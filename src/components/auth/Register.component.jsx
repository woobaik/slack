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
	const [errors, setErrors] = useState([])
	const [loading, setLoading] = useState(false)

	const handleSubmit = (event) => {
		event.preventDefault()
		setErrors(() => [])
		console.log("everytimesubmit", errors)
		if (isFormValid()) {
			setLoading(true)
			firebase
				.auth()
				.createUserWithEmailAndPassword(email, password)
				.then((user) => {
					console.log("Firebase User", user)
					setLoading(false)
				})
				.catch((error) => {
					setErrors([error.message])
					console.log(errors)
					setLoading(false)
				})
		}
	}

	const isFormValid = () => {
		if (!isAllFilled()) {
			setErrors(["Please fill all fields"])
			return false
		} else if (!ispasswordValid()) {
			setErrors(["password is invalid"])
			return false
		}
		return true
	}

	const isAllFilled = () => {
		return email || password || passwordConfirmation
	}

	const ispasswordValid = () => {
		if (password.length < 6 || passwordConfirmation.length < 6) {
			return false
		} else if (password !== passwordConfirmation) {
			return false
		}

		return true
	}

	const displayErrorInput = (inputName) => {
		console.log("c8 its me", errors)
		if (
			errors.length > 0 &&
			errors.some((error) => error.toLowerCase().includes(inputName))
		) {
			return "error"
		}
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
							className={displayErrorInput("email")}
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
							className={displayErrorInput("password")}
						/>

						<Form.Input
							name="passwordConfirmation"
							icon="lock"
							iconPosition="left"
							onChange={(event) => setPasswordConfirmation(event.target.value)}
							value={passwordConfirmation}
							type="password"
							placeholder="Enter password again"
							className={displayErrorInput("password")}
						/>

						<Button
							className={loading ? "loading" : ""}
							disabled={loading}
							color="violet"
							fluid
							size="large">
							Register
						</Button>
					</Segment>
				</Form>
				{errors.length > 0 && (
					<Message>
						<Message.Header>Please Check your entry</Message.Header>
						{errors.map((error, i) => (
							<p key={i}>{error}</p>
						))}
					</Message>
				)}
				<Message>
					Alreay have account? <Link to="/login">Log in</Link>
				</Message>
			</Grid.Column>
		</Grid>
	)
}

export default Register
