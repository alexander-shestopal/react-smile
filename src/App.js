import React, { Component } from 'react';

class App extends Component {

  state = {
    email:"",
    password:"",
    emailError:'',
    passwordError:''  
  }

  validate() {
    if(!this.state.email>0 && !this.state.password>0){
      this.setState({emailError:"Email and Password Required"});
    } else if(!this.state.email>0 ) {
      this.setState({emailError:"Email Required"});
    } else if(!this.state.password>0 ) {
      this.setState({emailError:"Password Required"});
    }
     else {
      return true;
    }
  }

  formSubmit = (e) => {
    e.preventDefault();
    if(this.validate()) {
        alert("Form Submit Done");
    }
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
              <label>Password:</label><br></br>
              <input type="password" name="password" onChange={(e)=>{this.setState({password:e.target.value})}}></input><br></br>
              <strong style={{color:'red'}}>{this.state.passwordError}</strong><br></br>
              <button type="submit">Submit</button>
            </div>
          </form>

        </div>

      </div>
    )
  }

}

export default App;
