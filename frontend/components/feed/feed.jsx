import React from "react"
import { Redirect } from "react-router-dom"

export class Feed extends React.Component{

    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault()
        this.props.logout()
    }

    render(){

        let id = this.props.session.id

        if (id === null){
            return <Redirect to="/" />
        } else {
            if (id) {
                let user = this.props.entities.users[id]
                return (
                    <form onSubmit={this.handleSubmit}>
                        <h1>{ user.username }</h1>
                        <button>Logout</button>
                    </form>
                )
            }
        }
    }

}