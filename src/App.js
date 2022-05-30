import React, { Component } from 'react';

class App extends Component {

  state = {
    username:""
  }

  CangeData =  (e) => {
    let val = e.target.name; // Username
    let myvalue = e.target.value; // Getting value
    this.setState({[val]:myvalue}); // value set on the state

  }

  formSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.username);
  }

  render() {
    return(
      <div className="App">
        <h1 style={{marginLeft:200}}> Hello {this.state.username}</h1>
        <div>
          <form onSubmit={this.formSubmit}>
            <div className="form-group" style={{marginLeft:200}}>
              <label>User name:</label><br></br>
              <input type="text" name="username" onChange={this.CangeData}></input><br></br>
              <button type="submit">Submit</button>
            </div>
          </form>

        </div>

      </div>
    )
  }

}

export default App;
