import React, {useState} from 'react'
import { TestButton } from '../Button'

const ToDoList = () => {

let [num , setNum] = useState(0);

const incNum = () => {
    setNum(num+1);
    console.log('button pressed');
}
const decNum = () => {
    setNum(num--);
    console.log('button pressed');
}

    return (
        <div>
            <TestButton onClick={decNum}>Decrement</TestButton>
            <h1>{num}</h1>
            <TestButton onClick={incNum}>Increment</TestButton>
          
            
        </div>
    )
}

export default ToDoList
