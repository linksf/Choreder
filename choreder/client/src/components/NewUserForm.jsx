// This is the form for adding a new user to the household, accessible via the
// settings page
import React, {useState, useContext} from 'react'
import {UserContext} from '../context/UserContext'
import styled from 'styled-components'
import axios from 'axios'

//styled components / CSS in JS
const FormWrapper = styled.form `
       background-color: ${props => props.theme.tertiary};
      padding: 0 15px;
        display: grid;
        grid-template-columns: auto 1fr;
         
        box-shadow: 2px 2px 2px 2px rgba(35, 35, 35, .5);
        place-content: center;
        justify-content: center;
        align-items: center;
        `
const Label = styled.label `
        padding: 0 15px;
        grid-column: 1/2;
        font-size: 1.2rem;
        line-height: 1.2rem;
        color: ${props => props.theme.primary};
        `
const Option = styled.option `
        margin: 0 15px;
        //grid-column: 2/3;
        font-size: 1rem;
        line-height: 1rem;
        background-color: ${props => props.theme.highlight};
    color:  ${props => props.theme.select};
        `
const Header = styled.h1 `
    grid-column: 1/3;
    color: ${props => props.theme.primary};
    text-align: center;
    `
const Select = styled.select `
   background-color: ${props => props.theme.primary};
    color:  ${props => props.theme.light};
    outline-color: ${props => props.theme.highlight};
    margin: 0 5px;
    padding: 3px;
    grid-column: 2/3;
    `
const Subheader = styled.h3 `
    grid-column: ${props => props.column};
    grid-row: ${props => props.row};
    `
const Input = styled.input `
    padding: 3px;
    grid-column: 2/3;
    outline-color: ${props => props.theme.highlight};
    color: ${props => props.theme.light};
    background-color: ${props => props.theme.primary};
    margin:5px;
    padding: 5px;
    
    `
const Row = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    grid-column: 1/3; 
    grid-row: ${props => props.row};
    `
const Button = styled.button `
    padding: 3px;
    font-size: 1.2rem;
    background-color: ${props => props.theme.highlight};
    color:  ${props => props.theme.primary};
    grid-column: 2/3;
    font-weight: 500;
    margin:5px;
    outline-color: ${props => props.theme.light};
    max-width: 30%;
    `
const Radio = styled.input `
   margin: 0 10px;
   `
const TextArea = styled.textarea `
    grid-column: 2/3;
    margin: 10px 5px;
    padding: 5px;
    box-sizing: border-box;
    font-size: .75rem;
    line-height: 1rem;
    background-color: ${props => props.theme.primary};
    color:  ${props => props.theme.light};
    outline-color: ${props => props.theme.highlight};
    resize: vertical;
    
    `
    
function NewUserForm(props) {
  //Form control
  const [state,
    setState] = useState({userName: "", age: 0})
  const handleChange = (e) => {
    const {name, value} = e.target
    setState(prev => ({
      ...prev,
      [name]: value
    }))
  }
  //add new user via UserContext triggered by form submit
  const {addUser} = useContext(UserContext)
  const handleSubmit = (e) => {
    e.preventDefault()
    addUser(state)
    setState({userName: "", age: 0})
  }

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <Header>Add New User</Header>
      <Header></Header>
      <Label htmlFor="userName">Name</Label>
      <Input
        name="userName"
        id="userName"
        value={state.userName}
        onChange={handleChange}/>
      <Label htmlFor="age">Age</Label>
      <Input
        type="number"
        name="age"
        id="age"
        value={state.age}
        onChange={handleChange}/>
      <Button type="submit">Submit</Button>
    </FormWrapper>
  )
}

export default NewUserForm