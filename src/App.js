import React, { Component } from 'react';

class App extends Component {


  render() {

    const names = [
        {name:'Kazi', age:20, grade:3.50},
        {name:'Aryian', age:25, grade:3.55},
        {name:'Khan', age:30, grade:3.60},
    ];
    const items = names.map((item, idx) => {
      return <li class="list-item" key={idx}>
        Name : {item.name}, Age : {item.age}, Grade : {item.grade}
        <button class="btn btn-sm btn-info">Edit</button> | 
        <button class="btn btn-sm btn-danger">Delete</button>
        </li>
    });
    return(
      <div className="App">
        <h1>Student list</h1>
        <ul class="list">
        {items}
        </ul>

        <div>
    

        </div>

      </div>
    )
  }

}

export default App;
