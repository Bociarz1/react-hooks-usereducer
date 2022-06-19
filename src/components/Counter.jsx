import { useReducer } from "react";

// 2. declare initialState value
const initialState = 0

// 3. create reducer
const reducer = (state, action) => {
  switch(action) {
    case 'INCREMENT':
      return state+1
    case 'DECREMENT':
      return state-1
    case 'RESET':
      return initialState
  }
}

function Counter() {
  // 1. create useReducer 
  const [count, dispatch] = useReducer(reducer, initialState)
  return ( 
    <>
      <h3>Counter</h3>
      {/* 4. add to buttons dispatch functions */}
      <button onClick={()=> {dispatch('INCREMENT')}}>INCREMENT</button>
      <button onClick={()=> {dispatch('DECREMENT')}}>INCREMENT</button>
      <button onClick={()=> {dispatch('RESET')}}>RESET</button>
      <h4>State value:</h4>
      {count}


    </>
   );
}

export default Counter;