import { useState } from "react";
import { Link } from "react-router-dom";

function ExerciseFour() {
  const [data, setData] = useState({
    email:"",
    password:"",
    confirmPassword:"",
  })

  const [isShow, setIsShow] = useState({0:false, 1:false})
  const [isSubmit , setIsSubmit ] = useState(false)
  const [error , setError ] = useState(null)

  const onChangeForm = (target, e) => setData({...data, [target]:e.target.value})

  return (
    <div>
      <label>Email</label>
      <input 
        type='email' 
        value={data.email} 
        onChange={(e)=>onChangeForm('email', e)}
      /><br/>

      <label>password</label>
      <input 
        type={(isShow[0])?'text':'password'} 
        value={data.password}  
        onChange={(e)=>onChangeForm('password', e)} 
      />
      <input
       type="checkbox"
       onClick={(e)=> setIsShow({...isShow, 0:e.target.checked})}
      /><br/>

      <label>Email</label>
      <input 
        type={(isShow[1])?'text':'password'} 
        value={data.confirmPassword}  
        onChange={(e)=>onChangeForm('confirmPassword', e)}
      />
      <input 
        type="checkbox" 
        onClick={(e)=> setIsShow({...isShow, 1:e.target.checked})} 
      /><br/>
     
      <button 
        onClick={()=>{
          const {email , password, confirmPassword} = data
          if(!email || !password || !confirmPassword){
            return setError('All entries must be submitted')
          }
          if(password !== confirmPassword){
            return setError('Passwords must be identical')
          }
          setError(false)
          setIsSubmit(true)
        }}
      >
        Submit
      </button>

      {error && <p>{error}</p> }

      {(isSubmit)&&(
        <div>
        <p>
          {JSON.stringify(data)}
        </p>
        <button onClick={()=>setIsSubmit(false)}>Delete</button>
        </div>
      )}
      <br/><Link to='/'>Home</Link>
    </div>
  );
}

export default ExerciseFour;
