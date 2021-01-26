import React, {useContext} from 'react'
import styled from 'styled-components'
import UserPicker from '../components/UserPicker'
import {UserContext} from '../context/UserContext'
const HomeWrapper = styled.div `
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    //background-color: ${props => props.theme.colors.white};
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(6, 1fr);
    place-content: center;
    `
function Home() {
  const {users, setUsers} = useContext(UserContext)
  return (
    <HomeWrapper>
      {users.current
        ? null : <UserPicker/>
        }
    </HomeWrapper>
  )
}

export default Home