import React from "react"
import { HeaderContainer } from "../header/header_container"
import { FeedContainer } from "../feed/feed_container"
import { CreatePostContainer } from "../create_post_form/create_post_container"
import { LogoutButtonContainer } from "../logout_button/logout_button_container"

export class Home extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return (
            <main>
                <HeaderContainer />
                <FeedContainer />
                <CreatePostContainer />
                <LogoutButtonContainer />
            </main>
        )
    }

}