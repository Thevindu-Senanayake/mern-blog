import React, { Component } from "react";
import axios from "axios";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
        };
    }
    componentDidMount() {
        this.retrievePosts();
    }

    retrievePosts() {
        axios.get("http://localhost:8000/posts").then((res) => {
            if (res.data.success) {
                this.setState({
                    posts: res.data.existingPost,
                });
                console.log(this.state.posts);
            }
        });
    }
    render() {
        return (
            <div className="container mt-5">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Topic</th>
                            <th scope="col">Description</th>
                            <th scope="col">Category</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.posts.map(posts => (
                            <tr>
                                <th scope="row">1</th>
                                <td>
                                    {/* {{`/post/${posts._id}`}} */}
                                    <a href="#" style={{ textDecoration: "none" }}>{posts.topic}</a>
                                </td>
                                <td>{posts.description}</td>
                                <td>{posts.category}</td>
                                <td>
                                    <a href="#" className="btn btn-warning">
                                        <i className="fa fa-edit"></i>&nbsp;Edit
                                    </a>
                                    &nbsp;
                                    <a href="#" className="btn btn-danger">
                                        <i className="fa fa-trash"></i>&nbsp;Delete
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <button className="btn btn-success btn-sm">
                    <a href='/add' style={{ textDecoration: "none", color: "white" }}>New Post</a>
                </button>
            </div>
        )
    }
}
