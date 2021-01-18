import { useState } from "react";
import { Link } from "react-router-dom";

const colors = ['red','blue','#fff']

function ExerciseTwo() {
  const [color, setColor] = useState('#fff')
  const buttonStyle ={
    height: '30px',
    width: '30px',
    borderRadius: '100%',
    cursor: 'pointer',
    margin: '8px',
  };

  return (
    <div style={{backgroundColor: color,height: '100vh'}}>
        {colors.map((color, i)=>(
            <button key={i} style={{...buttonStyle , backgroundColor: color}} onClick={()=>{setColor(color)}}></button>
        ))}
        <br/><Link to='/'>Home</Link>
    </div>
  );
}

export default ExerciseTwo;
