import { Link } from "react-router-dom";
import { useState } from "react";

function ExerciseThree() {
  const [todo, setTodo] = useState([])
  return (
    <>
      <input type='text'></input>
      <button onClick={(e)=>setTodo([...todo, {id:((todo[0])?todo[todo.length-1].id+1:0), description:e.target.parentNode.children[0].value}])}>add Todo</button>
      <ul>
        {todo.map((item)=>(
            <li key={item.id} id={item.id}>
              {item.description}
              <button style={{marginLeft:'20px'}} onClick={(e)=>setTodo(todo.filter((i)=>i.id !== parseInt(e.target.parentNode.id)))}>Remove</button>
            </li>
        ))}
      </ul>
      <br/><Link to='/'>Home</Link>
    </>
  );
}

export default ExerciseThree;
