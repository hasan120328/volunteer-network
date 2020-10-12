import React from 'react';
import { useForm } from 'react-hook-form';
import  volunteerLogo from '../../logos/group1.png';

 const RegisterForm=()=> {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  const handleSubmitForm= () => {
          
  }
  
  return (
    <div>
    <div>
      <img style={{width:200}} src={volunteerLogo } alt=""/>
    </div>
    
    <div>
        <h1>Register as a volunteer</h1>
        <form onSubmit={handleSubmitForm}>
      <input type="text" placeholder="your full name" name="name" ref={register({required: true, maxLength: 80})} /><br/>
      <input type="text" placeholder="userName or Email" name="Email" ref={register({required: true, pattern: /^\S+@\S+$/i})} /><br/>
     <input type="text" required placeholder="Date"/><br/>
     <input type="text" placeholder="Description"/><br/>
     <input type="text" placeholder="organize books at the library"/><br/>
     <input type="submit" value="Registration"/>
    </form>
    </div>
    </div>
  );
}

export default RegisterForm;