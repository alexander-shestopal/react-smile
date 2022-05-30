import React, { Component } from 'react';

class App extends Component {

  state = {
    email:"",
    details:""
  }

  formSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    return(
      <div className="App">
        <h1 style={{marginLeft:200}}>Login panel</h1>
        <div>
          <form onSubmit={this.formSubmit}>
            <div className="form-group" style={{marginLeft:200}}>
              <label>E-mail:</label><br></br>
              <input type="email" name="email" onChange={(e)=>{this.setState({email:e.target.value})}}></input><br></br>
              <strong style={{color:'red'}}>{this.state.emailError}</strong><br></br>
              <label>Details:</label><br></br>
              <textarea onChange={(e)=>{this.setState({details:e.target.value})}}>Write on Here</textarea>
              <h6>{this.state.details}</h6>


              <button type="submit">Submit</button>
            </div>
          </form>

        </div>

      </div>
    )
  }

}

export default App;
