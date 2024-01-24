import { useState } from 'react'
import './Counter.css'

const Counter = () => {
    const [count,setCount] = useState(0);
    return (
  <div className='main'>
              <div className='container'>
                  <button onClick={() => setCount(count+1)}> + </button>
                  <p> {count} </p>
                  <button onClick={() => setCount(count-1)}> - </button>
              </div>
              <button className='reset' onClick={() => setCount(count-count)}></button>
  
          </div>
    )
  }
  
  export default Counter