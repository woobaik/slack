import React, { useState } from "react"
import { Visibility, Menu, Container, Dropdown, Image } from "semantic-ui-react"
import { NavLink } from "react-router-dom"
import { connect } from "react-redux"

const Header = (props) => {
	const fixedMenuStyle = {
		backgroundColor: "#fff",
		border: "1px solid #ddd",
		boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.2)",
	}
	const menuStyle = {
		border: "none",
		borderRadius: 0,
		boxShadow: "none",
		marginBottom: "1em",
		marginTop: "4em",
		transition: "box-shadow 0.5s ease, padding 0.5s ease",
	}
	console.log("멋살", props)
	return (
		<Menu borderless fixed={true} style={fixedMenuStyle}>
			<Container text>
				<Menu.Item>
					<Image size="mini" src="/logo.png" />
				</Menu.Item>
				<Menu.Item header>SLACK</Menu.Item>
				<NavLink to="/register">
					<Menu.Item as="a">Register</Menu.Item>
				</NavLink>
				<NavLink to="/login">
					<Menu.Item as="a">Log in</Menu.Item>
				</NavLink>

				<Menu.Menu position="right">
					<Dropdown text="Dropdown" pointing className="link item">
						<Dropdown.Menu>
							<Dropdown.Item>List Item</Dropdown.Item>
							<Dropdown.Item>List Item</Dropdown.Item>
							<Dropdown.Divider />
							<Dropdown.Header>Header Item</Dropdown.Header>
							<Dropdown.Item>
								<i className="dropdown icon" />
								<span className="text">Submenu</span>
								<Dropdown.Menu>
									<Dropdown.Item>List Item</Dropdown.Item>
									<Dropdown.Item>List Item</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown.Item>
							<Dropdown.Item>Sign out</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</Menu.Menu>
			</Container>
		</Menu>
	)
}

const mapStateToProps = (state) => {
	return {
		isAuthenticated: state.user.isAuthenticated,
	}
}

export default connect(mapStateToProps)(Header)
