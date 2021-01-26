import React, {useContext, useEffect, useState} from 'react'
import styled, {withTheme} from 'styled-components'
import {UserContext} from '../context/UserContext'
import {ChoreContext} from '../context/ChoreContext'
import UserCard from './UserCard'

const Wrapper = styled.div `
display: flex;
flex-direction: column;
width: max-content;
`
const Header = styled.h1`
text-align: center;
grid-column: 1/3;
color: ${props=>props.theme.dark};
justify-content: center;
align-items: center;
`
const UserPicker = props => {
  const {users, setUsers} = useContext(UserContext)
  const {chores} = useContext(ChoreContext)
  const userCards = users
    .all
    .map((user) =>< UserCard userName = {
      user.userName
    }
    key={user._id}
    _id = {user._id}
    chores = {
      chores.filter(chore=>chore.user === user._id)
    }
    points = {
      user.points 
    } />)
  return (
    <Wrapper>
        <Header>Who Are You?</Header>
      {userCards}
    </Wrapper>
  )
}

export default UserPicker