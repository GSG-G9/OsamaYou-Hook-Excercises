import { useState } from "react";
import { Link } from "react-router-dom";

function ExerciseOne() {
  const [currentValue, setCurrentValue] = useState(0)

  return (
    <>
      <button onClick={()=> setCurrentValue(currentValue+1)}>+</button>
      <h1>{currentValue}</h1>
      <button onClick={()=> setCurrentValue(currentValue-1)}>-</button>
      <br/>
      <br/>
      <button onClick={()=> setCurrentValue(0)}>reset</button>
      <br/><Link to='/'>Home</Link>
    </>
  );
}

export default ExerciseOne;
