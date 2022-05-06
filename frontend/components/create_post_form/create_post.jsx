import React from "react";

export class CreatePostForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {description: "", poster_id: this.props.session.id, photoFile: null, photoUrl: null}
        this.createPost = this.createPost.bind(this)
        this.update = this.update.bind(this)
        this.handleFile = this.handleFile.bind(this)
    }

    async createPost(e){
        e.preventDefault()
        const formData = new FormData()
        formData.append('post[description]', this.state.description)
        formData.append('post[poster_id]', this.state.poster_id)
        formData.append('post[photo]', this.state.photoFile)
        this.props.createPost(formData)
    }

    update(e){
        this.setState( { [e.target.name]: e.target.value } )
    }

    handleFile(e){
        e.preventDefault()
        const file = e.currentTarget.files[0]
        const fileReader = new FileReader
        fileReader.onloadend = () => {
            this.setState({ photoFile: file, photoUrl: fileReader.result})
        }
        if (file) { fileReader.readAsDataURL(file)}
    }

    render(){
        let preview = this.state.photoUrl ? <img src={this.state.photoUrl} alt="preview" /> : null
        return (
            <div className="createPostForm">
                {preview}
                <form onSubmit={this.createPost}>
                    <input type="text" name="description" value={this.state.description} onChange={this.update} />
                    <input type="file" onChange={this.handleFile} />
                    <button>Create</button>
                </form>
            </div>
        )
    }
        
}