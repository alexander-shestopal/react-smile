import React, { Component } from "react";
import axios from "axios";


export default class writepost extends Component {
  state={
    title:'',
    body:''
  }
  formSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/user", {
        title: this.state.title,
        body: this.state.body,
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <center>
          <div className="h-100 p-5 bg-light border rounded-3 col-lg-4">
            <form onSubmit={this.formSubmit}>
              <div className="form-group">
                <label for="exampleInputEmail1">Title {this.state.title}</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  required
                  onChange={(event) => {
                    this.setState({ title: event.target.value });
                  }}
                />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Details{this.state.body}</label>
                <textarea
                  className="form-control"
                  name="body"
                  onChange={(event) => {
                    this.setState({ body: event.target.value });
                  }}
                >
                  {this.state.body}
                </textarea>
              </div>

              <button type="submit" className="btn btn-primary m-3">
                Publish
              </button>
            </form>
          </div>
        </center>
      </div>
    );
  }
}
