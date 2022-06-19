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

function MultipleReducers() {
  // 1. create useReducers 
  const [count, dispatch] = useReducer(reducer, initialState)
  // 1b. SECOND useReducer
  const [secondCount, secondDispatch] = useReducer(reducer, initialState)
  return ( 
    <>
      <h3>Multiple reducers</h3>
      {/* 4. add to buttons dispatch functions */}
      <button onClick={()=> {dispatch('INCREMENT')}}>INCREMENT</button>
      <button onClick={()=> {dispatch('DECREMENT')}}>INCREMENT</button>
      <button onClick={()=> {dispatch('RESET')}}>RESET</button>
      <h4>State value:</h4>
      {count}
      {/* 4b. add to buttons SECOND dispatch functions */}
      <button onClick={()=> {secondDispatch('INCREMENT')}}>INCREMENT</button>
          <button onClick={()=> {secondDispatch('DECREMENT')}}>INCREMENT</button>
          <button onClick={()=> {secondDispatch('RESET')}}>RESET</button>
          <h4>State value:</h4>
          {/* 4c.display SECOND count value */}
          {secondCount}

    </>
   );
}

export default MultipleReducers;