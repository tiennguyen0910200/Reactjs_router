import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Post.css';
class Post extends Component {
    constructor() {
        super();
    }
    render() {
        let id = this.props.match.params.id;
        let pos = JSON.parse(localStorage.getItem("abc"));
        let oldItem = pos.find((element) => element.id == id);
        return (
            <div className="post">
                <h1>Detail for post</h1>
                <h5>Id: {id}</h5>
                <h5>Title: {oldItem.title}</h5>
                <h5>Content: {oldItem.content}</h5>
            </div>
        )
    }
}
export default withRouter(Post);