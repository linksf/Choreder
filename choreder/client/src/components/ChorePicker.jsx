//container for collection of available chores that a user can select
import React, {useContext, useEffect, useState} from 'react'
import styled, {withTheme} from 'styled-components'
import {ChoreContext} from '../context/ChoreContext'
import ChoreCard from './ChoreCard'

//styled components
const Wrapper = styled.div `
display: flex;
flex-direction:column;
width: 100vw;
@media (min-width: 1000) {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
@media (max-width: 768) {
  display:grid;
grid-template-columns: 1fr 1fr;
}`
const Header = styled.h1 `
background-color: ${props=>props.theme.secondary_highlight};
  color: ${props => props.theme.dark};
  width: 100%;
  text-align: center;


`
const Row = styled.div `

display: flex;
place-content: center;
margin: 10px 0;
`

const ChorePicker = props => {
  //gets list of chores from server via context
  const {chores} = useContext(ChoreContext)
  //filter out the ones that are not currently available 
  let availableChores
  const [available,
    setAvailable] = useState([])
  useEffect(() => {
    availableChores = chores.filter(chore => chore.user === null)
    setAvailable(availableChores)
  }, [chores])
//create ChoreCard component for each available chore, passing in all the chore's properties as props
  const choreCards = available.map(
  (chore) =>< ChoreCard key = {
    chore._id
  }
  {
    ...chore
  } />)
  return (
    <Wrapper>
      <Header>Available Chores</Header>
      {choreCards}
    </Wrapper>
  )
}

export default ChorePicker