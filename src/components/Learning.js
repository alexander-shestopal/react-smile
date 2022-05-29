import React, { Component } from "react";
import './Learning.css';

class Learning extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fruits: [
                {name:'Mango', weight:'120gm'},
                {name:'Apple', weight:'20gm'},
                {name:'Orange', weight:'60gm'},
            ]
        }
    }

    clickHandler = () => {
        // console.log('Hello message');
        // alert('Welcome UDEMY');
        this.setState({
            fruits: [
                {name:'Samsung -> Mango', weight:'120gm'},
                {name:'Apple', weight:'20gm'},
                {name:'Nokia -> Orange', weight:'60gm'},
            ]

        });      
    }
    render(){
        const style = {
            backgroundColor:'orange',
            font:'inherin',
            border:'2px solid maroon',
            padding:'10px',
            cursor: 'pointer'
        };

        return(
        <>
        <button style={style} onClick={this.clickHandler}> Click Me</button>
        <h1 className="Card"> Hello Udemy {this.state.fruits[0].name}</h1>
        <h1 className="Card"> Hello Udemy {this.state.fruits[1].name}</h1>
        <h1 className="Card"> Hello Udemy {this.state.fruits[2].name}</h1>
        </> 
        )
    }

}

export default Learning;