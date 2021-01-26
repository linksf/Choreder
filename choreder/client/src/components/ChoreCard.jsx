//Representation of a chore, both for selecting a chore and as your todo list
import React, {useContext, useState} from 'react'
import styled, {withTheme} from 'styled-components'
import {UserContext} from '../context/UserContext'
import {ChoreContext} from '../context/ChoreContext'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faWindowClose, faPlusCircle, faCaretDown, faCaretUp} from '@fortawesome/free-solid-svg-icons'

//styled components - notice the ${props =>props.theme....}, that is a callback function inside a template litteral ands is how you access props you pass to the element through attributes in the JSX or through the theme context
const CardWrapper = styled.div `
    display: flex;
    flex-direction:  column;
    border-radius: 5px;
    width: auto;
    height: auto;
    padding: 20px;
    margin: 10px;
    background-color: ${props => props.theme.light};
    color: ${props => props.theme.colors.dark};
    position: relative;
 
`
const Close = styled(FontAwesomeIcon)`
  color: ${props=>props.theme.colors.red};
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  text-shadow: 2px 2px 5px #000;
  transition: .2s ease all;
  cursor: pointer;
  &:hover{
    color: ${props=>props.theme.colors.red_light};
  }
`
const Add = styled(FontAwesomeIcon)`
  font-size: 32px;
  color: ${props=>props.theme.colors.green};
  position: absolute;
  top: 10px;
  right: 10px;
  transition: .2s ease all;
  cursor: pointer;
  &:hover{
    color: ${props=>props.theme.colors.green_light};
  }
`
const Toggle = styled(FontAwesomeIcon)`
font-size: 24px;
color: ${props=>props.theme.blue};
`
const Row = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`
const Checkbox = styled.input`
width: 24px;
height: 24px;
margin-right: 15px;
@media (max-width: 768px) {
  width: 18px;
  height: 18px;
}
`
const Header = styled.h1 `
    text-transform: capitalize;
    text-decoration: ${props=>{return props.completed ? "line-through red" : "none"}};
    @media (max-width: 768px) {
      font-size: 1rem;
    }
`
const SubHeader = styled.h3 `
    text-transform: capitalize;
    margin: 0 25px;
    text-decoration: ${props=>{return props.completed ? "line-through red" : "none"}};
    @media (max-width: 768px) {
      font-size: .8rem;
      margin: 0 5px;
      }
`
const Paragraph = styled.p `
    transition: 2s ease all;
    text-decoration: ${props=>{return props.completed ? "line-through red" : "none"}};
    @media (max-width: 768px) {
      font-size: .7rem;
      margin: 5px;
      
      }
`

const Chore = props => {
  //access the methods and data passed through context - used to give functionality to the buttons, checkmark, etc
  const {users} = useContext(UserContext)
  const {assignChore, unAssignChore, markCompleted, updateChores, updateOneChore} = useContext(ChoreContext)
  
  //give funtion to the arrow that toggles the amount of detail being shown
  const [expanded,
    setExpanded] = useState(false)
    const toggleExpanded = (e) => {
      e.preventDefault()
      setExpanded(prev => !prev)
    }
  

    //When checkbox is checked, the chore is marked as completed in the database and the current timestamp 
    //is added to its history and all chores are updated on the client side, which triggers css to show the 
    //checkbox as checked and adding a line-through to the text. Also reverses the process if unchecked
    //***todo: add validation on the model to block multiple timestamps added oer day***
    const handleCheckbox = (e)=>{
    if (props.completed === false) {
      const now= new Date()
      updateOneChore(props._id, {completed: true, history: [...props.history, now ]})
      console.log(props.history.length)
      updateChores()
    }
    else {
      console.log(props.history.length)
      props.history.splice(-1,1)
      console.log(`props.history: ${props.history.length}`)
      updateOneChore(props._id, {completed: false, history: props.history})
      updateChores()
    }
  }

  return (
    <CardWrapper>
        {props.user === null ? <Add icon={faPlusCircle} onClick={(e)=>assignChore(props._id, users.current._id)}/> : <Close icon={faWindowClose} onClick={(e)=>unAssignChore(props._id)} />}
      <Row>
        <Checkbox type="checkbox" onChange={handleCheckbox} checked={props.completed} name="completed"/>
        <Header completed={props.completed}>{props.name}</Header>
        <SubHeader completed={props.completed}>{props.frequency}</SubHeader>
        <SubHeader completed={props.completed}>{`${props.pointValue} Points`}</SubHeader>
        {props.minage
          ? <SubHeader completed={props.completed}>{`Ages ${props.minage} and up`}</SubHeader>
          : null}
        </Row>
        
      
      <Row>
        {expanded
          ? <Paragraph>{props.details}</Paragraph>
          : null}
      </Row>
      <Toggle onClick={toggleExpanded} icon={expanded ? faCaretUp : faCaretDown}/>
      
    </CardWrapper>

  )
}

export default Chore