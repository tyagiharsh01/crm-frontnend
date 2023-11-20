
import React, { useState } from 'react'
import './Entry.css'
import LoginForm from '../Login/Login'
import ResetPassowrd from '../Password-reset/password-reset';




const Entry = () => {
  const [input, setinput] = useState({
    email: "",
    password: ""
  });
  const [form, setform] = useState('login');
  const handleOnChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target;
    console.log("Harsh Tyagi");
    setinput({ ...input, [name]: value })

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
  }
  const handleResetSubmit = (e) => {
    e.preventDefault();
    if(!input.email){
      alert("please enter a email")
    }
    else{
      console.log(input.email);
    }
   
   
  }
  const formtype =(frmtype)=>{
    setform(frmtype);
  }
  return (
    <div className='entry-info bg-info '>
      {form==='login'&&
      <div className='jumbotron bg-light rounded-0 text Center box-form  '>
        <LoginForm handleOnChange={handleOnChange} email={input.email} pass={input.password} handleSubmit={handleSubmit} frmtype={formtype} />
      </div>
}
{form === 'reset'&&
      <div className='jumbotron bg-light rounded-0 text Center box-form  '>
        <ResetPassowrd handleOnChange={handleOnChange} email={input.email} handleResetSubmit={handleResetSubmit} frmtype={formtype} />
      </div>
}
    </div>
  )
}

export default Entry
