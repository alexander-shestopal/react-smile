import React, { useState } from "react";

const Hook = props =>  {
    const [fruiteState, setFruiteState] = useState({
        fruits: [
            {name:'Mango', weight:'120gm'},
            {name:'Apple', weight:'20gm'},
            {name:'Orange', weight:'60gm'},
        ]
    });
    
    const clickHandler = () => {
       setFruiteState({
            fruits: [
                {name:'Samsung -> Mango', weight:'120gm'},
                {name:'Apple', weight:'20gm'},
                {name:'Nokia -> Orange', weight:'60gm'},
            ]

        });
        
    }

    return(
    <>
    <button onClick={clickHandler}> Change Me</button>
    <h1> Hello Udemy {fruiteState.fruits[0].name}</h1>
    <h1> Hello Udemy {fruiteState.fruits[1].name}</h1>
    <h1> Hello Udemy {fruiteState.fruits[2].name}</h1>
    </> 
    )
}

export default Hook;