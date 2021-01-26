import React, {useState, useEffect} from 'react'
import axios from 'axios'

const ChoreContext = React.createContext(null)

const ChoreContextProvider = ({children}) => {
  const [chores,
    setChores] = useState([])

  const updateOneChore = (choreId, body)=>{
    axios.put(`chores/updateOne/${choreId}`, body).then(resp=>{
      updateChores()
    }).catch(err=>console.log(err))
  }
  
  const updateChores = () => {
    axios
      .get("/chores")
      .then(resp => {
        console.log(resp)
        console.log(`setting Chores from: ${chores}`)
        const orderedChores = resp.data.sort((a, b)=> a.completed - b.completed)
        setChores(orderedChores )
        console.log(`to: ${chores}`)
      })
      .catch(err => console.log(err))
  }
  useEffect(() => {
    updateChores()
  }, [])
  const assignChore = (choreId, userId) => {
    axios
      .put(`/chores/updateOne/${choreId}`, {
      user: userId,
      available: false
    })
      .then(resp => {
        console.log(resp)
        updateChores()
      })
      .catch(err => console.log(err))
  }

  const unAssignChore = (choreId) => {
    axios
      .put(`chores/updateOne/${choreId}`, {
      user: null,
      completed: false,
      available: true
    })
      .then(res => {
        updateChores()
      })
      .catch(err => console.log(err))
  }
  const markCompleted = choreId => {
    console.log("marking completed")
    axios.put(`chores/updateOne/${choreId}`, {
      completed: `${Date.now()}`
      })
      .then(resp => updateChores())
      .catch(err => console.log(err))

  }
  const resetChores = (weekly = true, monthly = true, asneeded = true) => {
    axios
      .get(`/resetAll/?weekly=${weekly}&monthly=${monthly}&asneeded=${asneeded}`)
      .then((res) => {
        updateChores()
      })
      .catch(err => console.log(err))
  }

  return (
    <ChoreContext.Provider
      value={{
      chores,
      setChores,
      unAssignChore,
      assignChore,
      updateChores,
      updateOneChore,
      markCompleted
    }}>
      {children}
    </ChoreContext.Provider>
  )
}

export {ChoreContext, ChoreContextProvider}