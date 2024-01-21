// import React from 'react'
// import { useState } from 'react'
import React, { Component } from 'react'

class StateCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    down = () => {
        this.setState({count: this.state.count - 1})
    }
    up = () => {
        this.setState({count: this.state.count + 1})
    }


render() {
    return (

        <div className='statecard'>
            <button onClick={this.up}>+</button>
            <p>{this.state.count}</p>
            <button onClick={this.down}>-</button>

        </div>
    )
}

}


// const StateCard = () => {
//     const [count,setCount] = useState (0);
//     const upper =() =>{
//         setCount((prev) => prev+1)
//     }
//     const down =() =>{
//         setCount((prev) => prev-1)
//     }


// }

export default StateCard
