import React, { Component } from "react";


export default class writepost extends Component {
  render() {
    return (
      <div>
        <center>
          <div className="h-100 p-5 bg-light border rounded-3 col-lg-4">
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>

              <button type="submit" className="btn btn-primary m-3">
                Submit
              </button>
            </form>
          </div>
        </center>
      </div>
    );
  }
}
