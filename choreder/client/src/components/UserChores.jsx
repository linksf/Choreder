import React, {useContext, useEffect} from 'react'
import styled from 'styled-components'
import {UserContext} from '../context/UserContext'
import {ChoreContext} from '../context/ChoreContext'
import ChoreCard from './ChoreCard'

const Wrapper = styled.div `
display: flex;
flex-direction: column;
padding: 10px 0px ;
background-color: ${props => props.theme.dark};
width: 100vw;
`
const Header = styled.h1 `
background-color: ${props => props.theme.secondary_highlight};
  color: ${props => props.theme.dark};
  width: 100%;
  text-align: center;
`
const Row = styled.div `

display: flex;
place-content: center;
`
const Paragraph = styled.p `
display: block;
color: ${props => props.theme.light};
`
const UserChores = (props) => {
  const {users} = useContext(UserContext)
  const {chores} = useContext(ChoreContext)

  let usersChores = chores.filter((chore) => chore.user === users.current._id)
  return (
    <Wrapper>
      <Header>
        {users.current.userName}'s Chores
      </Header>
      {usersChores.length
        ? usersChores.map(
        chore =>< ChoreCard key = {
          chore._id
        }
        {
          ...chore
        } />)
        : <Paragraph>{`${users.current.userName} has no current chores assigned.`}</Paragraph>}
    </Wrapper>
  )
}

export default UserChores
