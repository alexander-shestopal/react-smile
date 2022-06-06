import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class blog extends Component {

  state = {
    posts: [],
  };




  componentDidMount(){
    // let thisvariable = this;
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        // handle success
        // thisvariable.setState({ posts: response.data });
        this.setState({ posts: response.data });
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  render() {
      const posts = this.state.posts;
      const allposts = posts.map((post,idx) => {
        return (
          <div>
            <a href="/" key={idx}>{post.title}</a><br></br>
            <p>{post.body}</p>
          </div>
        )

      });


    return (
        <div>
          <h1> Tis is Blog Component</h1>
          <Link to="/writepost">Add New Post</Link>
          <div className="media">
            <div className="media-body text-center">{allposts}</div>
          </div>
        </div>
    );
  }
}
