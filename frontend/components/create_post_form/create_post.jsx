import React from "react";

export class CreatePostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      poster_id: this.props.session.id,
      photoFile: null,
      photoUrl: null,
    };
    this.createPost = this.createPost.bind(this);
    this.update = this.update.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  escape(e){
    if (e.key === "Escape") {
      const form = document.getElementById("createPostForm")
      form.reset()
      this.setState({
          description: "",
          poster_id: this.props.session.id,
          photoFile: null,
          photoUrl: null,
        })
      this.props.closePost()
    }
  }
  componentDidMount(){
    document.addEventListener("keydown", this.escape.bind(this), false);
  }
  componentWillUnmount(){
    document.removeEventListener("keydown", this.escape.bind(this), false);
  }

  async createPost(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("post[description]", this.state.description);
    formData.append("post[poster_id]", this.state.poster_id);
    formData.append("post[photo]", this.state.photoFile);
    this.props
      .createPost(formData)
      .then( () => {
        const form = document.getElementById("createPostForm")
        form.reset()
        this.setState({
          description: "",
          poster_id: this.props.session.id,
          photoFile: null,
          photoUrl: null,
        })
        this.props.closePost()
      });
  }

  update(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleFile(e) {
    e.preventDefault();
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ photoFile: file, photoUrl: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  render() {
    let preview = this.state.photoUrl ? (
      <img className="previewImg" src={this.state.photoUrl} alt="preview" />
    ) : null;
    return (
      <div className="createPostForm">
        {preview}
        <form onSubmit={this.createPost} id="createPostForm" method="dialog">
          <input
            type="text"
            name="description"
            placeholder="Description..."
            value={this.state.description}
            onChange={this.update}
          />
          <input type="file" id="postFile" onChange={this.handleFile} />
          <button type="submit">Create</button>
        </form>
      </div>
    );
  }
}
