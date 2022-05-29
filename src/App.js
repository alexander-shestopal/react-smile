import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Learn from './components/Hello';
import Learning from './components/Learning';
import Hook from './components/Hook';
import Check from './components/Check';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        {/* <Learn name='Mango'  weight="20g"/>
        <Learn name='Orange' weight="30g"/>
        <Learn name='Apple'  weight="40g"/> */}
        <Learning/>
      {/* <Hook/> */}
      {/* <Check/> */}
      </header>
    </div>

  );
}

export default App;
