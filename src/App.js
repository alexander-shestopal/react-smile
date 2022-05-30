import React, { Component } from 'react';

class App extends Component {

  state = {
    email:"",
    password:""  
  }

  formSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.email, this.state.password);
  }

  render() {
    return(
      <div className="App">
        <h1 style={{marginLeft:200}}> {this.state.email}</h1>
        <h1 style={{marginLeft:200}}> {this.state.password}</h1>
        <div>
          <form onSubmit={this.formSubmit}>
            <div className="form-group" style={{marginLeft:200}}>
              <label>User name:</label><br></br>
              <input type="email" name="email" onChange={(e)=>{this.setState({email:e.target.value})}}></input><br></br>
              <input type="password" name="password" onChange={(e)=>{this.setState({password:e.target.value})}}></input><br></br>
              <button type="submit">Submit</button>
            </div>
          </form>

        </div>

      </div>
    )
  }

}

export default App;
