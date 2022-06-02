import React, { Component } from 'react';

class App extends Component {


  render() {

    const names = ['AA', 'BB', 'CC', 'DD', 'EE'];
    const items = names.map((item, idx) => {
      return <li key={idx}>{idx} - {item}</li>
    });
    return(
      <div className="App">
        <h1>Student list</h1>
        {items}
        <div>
    

        </div>

      </div>
    )
  }

}

export default App;
