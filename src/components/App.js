
import React, { useState } from "react";
import './../styles/App.css';

const Child = ({todos, setTodos})=>{
  function markAsComplete(i){
    let newTodos = [...todos]
    newTodos[i].completeStatus = true
    setTodos(newTodos)
  }
  return (
    <div className="child">
      <h2>Child Component</h2>
        <ul>
          {
            todos.map((el,i)=>{
              return <li>{el.todo} {!el.completeStatus && <button onClick={()=>markAsComplete(i)}>Complete</button>}</li>
            })
          }
        </ul>
    </div>
  )
}


const App = () => {
  const [todos, setTodos] = useState([
    {
      todo: "Learn React",
      completeStatus : false
    },
    {
      todo: "Create a React App",
      completeStatus : false
    },
    {
      todo: "Deploy the React App",
      completeStatus : false
    },
  ])
  return (
    <div>
        {/* Do not remove the main div */}
        <div className="parent">
          <h1>Parent Component</h1>
          <Child todos={todos} setTodos={setTodos} />
        </div>
    </div>
  )
}

export default App
