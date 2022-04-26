import React from "react"

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
            window.location.reload(false)
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