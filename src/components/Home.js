import React from "react"
import SideBar from "./mainChatScreen/sideBar/SideBar.component"
import Chat from "./mainChatScreen/chat/Chat.component"
import Meta from "./mainChatScreen/meta/MetaPage.compoent"

import { Grid, Image } from "semantic-ui-react"
const Home = () => {
	return (
		<Grid columns={3} celled>
			<Grid.Column
				width={3}
				style={{ backgroundColor: "#3f0e40", height: "94vh" }}
				stretched>
				<SideBar />
			</Grid.Column>
			<Grid.Column width={10}>
				<Chat />
			</Grid.Column>
			<Grid.Column width={3}>
				<Meta />
			</Grid.Column>
		</Grid>
	)
}

export default Home
