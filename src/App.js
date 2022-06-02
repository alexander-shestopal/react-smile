import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
  this.state = {
    age:'',
  }
  }



  formSubmit = (e) => {
    e.preventDefault();

  }

  render() {
    return(
      <div className="App">
        <h1 style={{marginLeft:200}}>Select Option</h1>
        <div>
          <form onSubmit={this.formSubmit}>
            <div className="form-group" style={{marginLeft:200}}>
              <label>Your Age:</label><br></br>
              <select onChange={(e)=>{this.setState({age:e.target.value})}}>
                <option value="" selected disabled> Select Your Age</option>
                <option value="15-20"> 15 -20 </option>
                <option value="21-30"> 21 -30 </option>
                <option value="31-40"> 31 -40 </option>
              </select><br></br>
              <h6>My Age : {this.state.age}</h6>



              <button type="submit">Submit</button>
            </div>
          </form>

        </div>

      </div>
    )
  }

}

export default App;
