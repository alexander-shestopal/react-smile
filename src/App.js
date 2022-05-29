import React, { Component } from 'react';

class App extends Component {

  state = {
    name:""
  }

  CangeData =  (e) => {
    let val = e.target.value;
    this.setState({name:val});

  }

  render() {
    return(
      <div className="App">
        <h1 style={{marginLeft:200}}> Hello {this.state.name}</h1>
        <div>
          <form>
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
