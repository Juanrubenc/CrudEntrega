import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'


const Form = ({createUser, updateUserById, objectUpdate, handleSubmit, reset, register,showForm}) => {

  const defaultValuesForm = {
    first_name:"",
    last_name:"",
    email:"",
    password:"",
    birthday: "",
  }

  const submit = data => {
    if(objectUpdate !== undefined){
      updateUserById(objectUpdate.id, data)
      reset(defaultValuesForm)
    } else {
      createUser(data)
    }
    reset(defaultValuesForm)
  }

  return (
    <form className='formstyle' onSubmit={handleSubmit(submit)}>
      <span><i className="fa-solid fa-x" onClick={showForm}></i></span>       
        <h2>User Info</h2>
        <div>
          <label htmlFor="first_name">Name</label>
          <div>
          <input type="text" id='first_name' {...register('first_name')} />
          </div>
        </div>
        <div>
          <label htmlFor="last_name">Last name</label>
          <div>
          <input type="text" id='last_name' {...register('last_name')} />
          </div>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <div>
          <input type="text" id='email' {...register('email')} />
          </div>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <div>
          <input type="text" id='password' {...register('password')} />
          </div>
        </div>
        <div>
          <label htmlFor="birthday">Birthday</label>
          <input type="date" id='birthday' {...register('birthday')} />
        </div>
        <button className='submitbtn'>Submit</button>
      </form>
  )
}

export default Form