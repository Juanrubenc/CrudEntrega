import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import CardUser from '../components/CardUser'
import Form from '../components/Form'
import { useForm } from 'react-hook-form'

const URL = 'https://users-crud1.herokuapp.com/users/'

function App() {

  const {handleSubmit, register, reset} = useForm()

  const [users, setUsers] = useState()
  const [isShowForm, setIsShowForm] = useState(false)
  const [objectUpdate, setObjectUpdate] = useState()

  const getAllUsers = () => {
    axios.get(URL)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getAllUsers()
  }, [])

  const deleteUser = id => {
    axios.delete(`${URL}${id}/`)
      .then(res => {
        console.log(res.data)
        getAllUsers()
      })
      .catch(err => console.log(err))
  }

  const createUser = newUser => {
    axios.post(URL, newUser)
      .then(res => {
        console.log(res.data)
        getAllUsers()
      })
      .catch(err => console.log(err))
  }

  const updateUserById = (id, updateUser) => {

    axios.patch(`${URL}${id}/`, updateUser)
      .then(res => {
        console.log(res.data)
        getAllUsers()
        setObjectUpdate()
        setIsShowForm(false)
      })
      .catch(err => console.log(err))
  }

  const showForm = () => {
    const obj = {
      first_name:"",
      last_name:"",
      email:"",
      password:"",
      birthday: "",
    }
    reset(obj)
    setIsShowForm(!isShowForm)
  }



  return (
    <div className="App">
      <header> 
        <h1>Users</h1>
      </header>
      <div className='buttons'>
      <a className="btnNewUser" onClick={showForm}><i className="fa-solid fa-user-plus"></i><span> New User</span></a>
      </div>
      <div className='formcontainer'>
                {
          isShowForm && 
          <Form 
            createUser={createUser}
            updateUserById={updateUserById}
            objectUpdate={objectUpdate}
            handleSubmit={handleSubmit}
            reset={reset}
            register={register}
            showForm={showForm}
          />
        }
      </div>
      <div className='card-container'>
      {
        users?.map(user => (
          <CardUser
            key={user.id}
            user={user}
            getAllUsers={getAllUsers}
            setObjectUpdate={setObjectUpdate}
            setIsShowForm={setIsShowForm}
            deleteUser={deleteUser}
            reset={reset}
          />
        ))
      }
      </div>
    </div>
    
  )
}

export default App
