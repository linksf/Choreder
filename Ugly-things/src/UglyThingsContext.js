import Form2 from "./Form2"
import React from "react"
import axios from "axios"
const {Provider, Consumer} = React.createContext()

class UglyThingsProvider extends React.Component {
  constructor() {
    super()
    this.state = {
      uglyThingsList: []
    }
    this.uglyListVariable = "https://api.vschool.io/MayaPurcell/thing"
  }
  submitData = (inputs) => {
    axios
      .post(this.uglyListVariable, inputs)
      .then(res => {
        this.setState(prevState => {
          return {
            uglyThingsList: [
              ...prevState.uglyThingsList,
              res.data
            ]
          }
        })
      })
      .catch(err => console.log(err))
  }
  // deleted inputs from line 15 since get requests don't need a request body
  // retrieveInfo=()=>{     axios.get(this.uglyListVariable)     .then(res =>
  // this.setState({uglythingsList: res.data})) }
  getDataRequest = () => {
    console.log('hello')
    axios
      .get(this.uglyListVariable)
      .then(res => this.setState({uglythingsList: res.data}))
      .catch(err => console.log(err))
  }
  editB = (thingId) => {
    const newObj = {
      title: this.state.title,
      description: this.state.description
    }
    console.log("newArr", newObj)
    axios
      .put(`https://api.vschool.io/MayaPurcell/thing/${thingId}`, newObj)
      .then(res => this.setState(prevState => ({
        ...prevState.uglyThingsList,
        newObj
      }))
      // this.setState(prevState => ({...prevState, uglyThingsList: newArr}))
      )
  }

  deleteB = (thingId) => {
    console.log("deleteButton")
    console.log(thingId)
    axios.delete(`https://api.vschool.io/MayaPurcell/thing/${thingId}`)
    let newArray = this
      .state
      .uglyThingsList
      .filter(thing => thingId !== thing._id)
    this.setState(prevState => ({
      ...prevState,
      uglyThingsList: newArray
    }))
  }

  render() {
    return (
      <Provider
        value={{
        uglythings: this.state.uglyThingsList,
        submission: this.submitData,
        getInfo: this.getDataRequest,
        deleteB: this.deleteB,
        editB: this.editB
      }}>
        {this.props.children}
      </Provider>
    )
  }
}

export {UglyThingsProvider, Consumer as UglyThingsConsumer}

// getDataRequest method in UglyThings Component , needs to be appropriately
// passed into MappedUglyThings Component. Unsure editB = (passedThing, title,
// description) => {     console.log("EDIT BUTTON IS WORKING")
// axios.put(`url${id}`, newArr)      let newArr =
// this.state.uglyThingsList.map(thing => {          if(passedThing.id ===
// thing.id){              // passedThing.title = title              //
// passedThing.description = description              return (
// <Form2                  idOne= {passedThing.id}                  passedThing
// = {passedThing}                  />              )              }      })
//  this.setState(prevState => ({...prevState, uglyThingsList: newArr}))  }