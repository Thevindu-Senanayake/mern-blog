import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreatePost from "./components/CreatePost";
import EditPost from "./components/EditPost";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import PostDetails from "./components/PostDetails";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <NavBar />
          <Route path="/" exact component={Home}></Route>
          <Route path="/add" component={CreatePost}></Route>
          <Route path="/edit/:id" component={EditPost}></Route>
          <Route path="/post/:id" component={PostDetails}></Route>
        </div>
      </BrowserRouter>
    );
  }
}
