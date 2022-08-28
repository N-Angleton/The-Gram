import React from "react";

export class EditPic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      poster_id: this.props.session.id,
      photoFile: null,
      photoUrl: null,
    };
    this.createPost = this.createPost.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  escape(e){
    if (e.key === "Escape") {
      const form = document.getElementById("editPicForm")
      form.reset()
      this.setState({
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
    formData.append("user[id]", this.state.poster_id);
    formData.append("user[photo]", this.state.photoFile);
    this.props.updateAccount(formData)
      .then( () => {
        const form = document.getElementById("editPicForm")
        form.reset()
        this.setState({
          poster_id: this.props.session.id,
          photoFile: null,
          photoUrl: null,
        })
        this.props.closePost()
      });
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
    ) : (
      <img
            className="profilePhoto"
            src={this.props.entities.users[this.props.session.id].photo_url ? this.props.entities.users[this.props.session.id].photo_url : window.defaultPhoto}
            alt="profile photo"
          />);
    return (
      <div className="editPicForm">
        {preview}
        <form onSubmit={this.createPost} id="editPicForm" method="dialog">
          <input type="file" id="postFile" onChange={this.handleFile} />
          <button type="submit">Create</button>
        </form>
      </div>
    );
  }
}
