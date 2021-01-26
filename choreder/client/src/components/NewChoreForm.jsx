//form used to add a new chore to the database
import React, {useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'

//styled components
const FormWrapper = styled.form `
       background-color: ${props => props.theme.tertiary};
      padding: 0 15px;
        display: grid;
        grid-template-columns: auto 1fr;
         
        box-shadow: 2px 2px 2px 2px rgba(35, 35, 35, .5);
        place-content: center;
        justify-content: center;
        align-items: center;
        margin: 15px 0;
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


function NewChoreForm(props) {

  //standard controlled component form-handling
  const [state,
    setState] = useState({name: "", details: "", pointValue: 0, frequency: "", minage: 0})
  const handleChange = (e) => {
    const {name, value} = e.target
    setState(prev => ({
      ...prev,
      [name]: value
    }))
  }
  //When form is submitted we make a new 
  const handleSubmit = (e) => {
    e.preventDefault()
    const newChore = {
      ...state,
      user: null,
      available: true
    }
    axios
      .post("/chores", newChore)
      .then(resp => {
        console.log("chore added")
      })
      .catch(err => console.log(err))
    }
    

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <Row>
        <Header>
          Add New Chore
        </Header>
      </Row>
      <Label htmlFor="name">Title</Label>
      <Input id="name" name="name" value={state.name} onChange={handleChange}/>
      <Label htmlFor="details">Description</Label>
      <TextArea
        id="details"
        name="details"
        value={state.details}
        onChange={handleChange}
        rows="3"/>
      <Label>Frequency</Label>
      <Select value={state.frequency} onChange={handleChange} name="frequency">
        <Option value="">
          Select One
        </Option>
        <Option value="daily">
          Daily
        </Option>
        <Option value="weekly">
          Weekly
        </Option>
        <Option value="as needed">
          As Needed
        </Option>
      </Select>
      <Label htmlFor="pointvalue">Points</Label>
      <Input
        min="0"
        id="pointvalue"
        type="number"
        name="pointValue"
        value={state.pointValue}
        onChange={handleChange}/>
      <Label htmlFor="minage">Min Age</Label>
      <Input
        type="number"
        name="minage"
        id="minage"
        value={state.minage}
        onChange={handleChange}/>
      <Button type="submit">Add</Button>
    </FormWrapper>
  )
}

export default NewChoreForm