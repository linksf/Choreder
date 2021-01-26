import React, {useState, useEffect} from 'react'
import axios from 'axios'

const UserContext = React.createContext(null)

const UserContextProvider = ({children}) => {
  const [users,
    setUsers] = useState({all: [], current: null})
  
  const addUser = (info) => {
    axios
      .post("/users", info)
      .then(resp => {
        console.log("user added")
      })
      .catch(err => console.log(`${info.userName} user in use`))
  }

    const updateUsers = ()=>{
    axios
    .get("/users")
    .then(resp => {
        console.log(resp)
      setUsers(prev => ({
        ...prev,
        all: resp.data
      }))
    })
    .catch(err => console.log(err))
  }
  useEffect(() => {
   updateUsers()
  }, [])

  const signIn = (info) => {
    axios.get("/users")
  }
  return (
    <UserContext.Provider value={{
      users,
      setUsers,
      updateUsers,
      addUser
    }}>
      {children}
    </UserContext.Provider>
  )
}

export {UserContext, UserContextProvider}