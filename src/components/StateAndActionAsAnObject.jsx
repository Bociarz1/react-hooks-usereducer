import { useReducer } from "react";

// 2. declare initialState value AS AN OBJECT
const initialState = {
  firstInitialStateValue:0,
  secondInitialStateValue:10
}

// 3. create reducer, ACTION, STATE TREAT LIKE AN OBJECT 
const reducer = (state, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return {...state, firstInitialStateValue:state.firstInitialStateValue+action.value}
    case 'DECREMENT':
      return {...state, firstInitialStateValue:state.firstInitialStateValue-action.value}
    case 'RESET':
      return {...state, firstInitialStateValue:initialState.firstInitialStateValue}
    case 'INCREMENT2':
      return {...state, secondInitialStateValue:state.secondInitialStateValue+action.value}
    case 'DECREMENT2':
      return {...state, secondInitialStateValue:state.secondInitialStateValue-action.value}
    case 'RESET2':
      return {...state, secondInitialStateValue:initialState.secondInitialStateValue}
  }
}

function StateAndActionAsAnObject() {
  // 1. create useReducer 
  const [count, dispatch] = useReducer(reducer, initialState)
  return ( 
    <>
      <h3>Counter with State and Action as an Object</h3>
      {/* 4. add to buttons dispatch functions WITH TYPE AND VALUE ARGUMENTS*/}
      <h5>with initialState of 0</h5>
      <button onClick={()=> {dispatch({type: 'INCREMENT', value:2})}}>INCREMENT 2</button>
      <button onClick={()=> {dispatch({type: 'DECREMENT', value:2})}}>DECREMENT 2</button>
      <button onClick={()=> {dispatch({type: 'RESET'})}}>RESET</button>
      First state value:{count.firstInitialStateValue}

      <h5>with initialState of 10</h5>
      <button onClick={()=> {dispatch({type: 'INCREMENT2', value:5})}}>INCREMENT 5</button>
      <button onClick={()=> {dispatch({type: 'DECREMENT2', value:5})}}>DECREMENT 5</button>
      <button onClick={()=> {dispatch({type: 'RESET2'})}}>RESET</button>
      Second state value:{count.secondInitialStateValue}
    </>
   );
}

export default StateAndActionAsAnObject;