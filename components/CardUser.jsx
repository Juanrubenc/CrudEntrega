import axios from 'axios'
import React from 'react'


const CardUser = ({user,deleteUser,setObjectUpdate, setIsShowForm, reset}) => {


  const updateUser = () => {
    setIsShowForm(true)
    const obj = {
      birthday: user.birthday,
      email: user.email,
      first_name: user.first_name,
      last_name: user.last_name,
      password: user.password,
    }

    reset(obj)
    setObjectUpdate(user)
  }

  return (
    <div className='card'>
      <h2><i className="fa-solid fa-user-tie"></i>   {user.first_name} {user.last_name}</h2>
      <hr className='hr1'/>
      <article>
            <p><b>Email: <br /> <i className="fa-solid fa-at"></i> {user.email}</b></p>
            {/* <p><b>Password:{user.password}</b></p> */}
            <p><b>Birthday: <br /> <i className="fa-solid fa-cake-candles"></i>  {user.birthday}</b></p>
            </article>
            <hr />
            <div className='buttons'>
            <a className="btn2" onClick={updateUser}><i className="fa-solid fa-pen"></i></a>
            <a className="btn" onClick={() => deleteUser(user.id)} ><i className="fa-solid fa-trash-can"></i></a>
            </div>
    </div>
  )
}

export default CardUser