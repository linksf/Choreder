import React, {useContext} from 'react'
import styled from 'styled-components'
import {UserContext} from '../context/UserContext'
import ChorePicker from '../components/ChorePicker'
import UserPicker from '../components/UserPicker'
import UserChores from '../components/UserChores'

const ProfileWrapper = styled.div `
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow-y: hidden;
        `
const Row = styled.div `
                height: 1rem;
        `
function Profile() {
  const {users} = useContext(UserContext)
  return (
    <ProfileWrapper>
      {users.current === null
        ? <UserPicker/>
        : <> <UserChores/> < ChorePicker /> </>
}

    </ProfileWrapper>
  )
}

export default Profile