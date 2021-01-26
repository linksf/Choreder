import React, {useState} from 'react'
import styled from 'styled-components'

//styled components - CSS in JavaScript
const FormWrapper = styled.form `
        background-color: ${props => props.theme.grey_medium};
        grid-column: 3/11;
        grid-row: 2/4;
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: repeat(6, 1fr);           
        box-shadow: 2px 2px 2px 2px rgba(35, 35, 35, .5);
        place-content: center;
        
        `
const Label = styled.label `
        padding: 15px 0;
        grid-column: 2/3;
        font-size: 1.2rem;
        line-height: 1.2rem;
        color: ${props => props.theme.primary};
        `
const Header = styled.h1 `
    grid-column: 2/6;
    color: ${props => props.theme.primary};
    text-align: center;
    `
const Input = styled.input `
        padding: 3px;
        grid-column: 3/6;
        outline-color: ${props => props.theme.primary};
        color: ${props => props.theme.primary};
        background-color: ${props => props.theme.secondary};
        margin:5px;
        
        `
const Row = styled.div `
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        grid-column: 1/6; 
        grid-row: ${props => props.row};
        `
const Button = styled.button `
  padding: 3px;
  font-size: 1.2rem;
  background-color: ${props => props.theme.primary};
  color:  ${props => props.theme.secondary};
  grid-column: 3/5;
  font-weight: 500;
  margin:5px;
  `

function AddUserForm(props) {
  //state for the controled component form
  const [state,
    setState] = useState({name: "", email: ""})
  //form control
  const handleChange = (e) => {
    const {name, value} = e.target
    setState(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setState({name: "", email: ""})
  }
  return (
    <FormWrapper onSubmit={handleSubmit}>
      <Row row="1/2"/>
      <Header>
        Sign in
      </Header>

      <Label htmlFor="name">Name</Label>
      <Input
        id="userName"
        onChange={handleChange}
        placeholder="First Last"
        name="userName"
        value={state.userName}/>

      <Label htmlFor="age">Age</Label>
      <Input
        id="age"
        placeholder="optional"
        name="age"
        value={state.age}
        onChange={handleChange}/>

      <Button type="Submit">Sign In</Button>

    </FormWrapper>
  )
}

export default AddUserForm