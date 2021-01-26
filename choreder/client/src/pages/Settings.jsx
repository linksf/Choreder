import React from 'react'
import styled from 'styled-components'
import NewChoreForm from '../components/NewChoreForm'
import NewUserForm from '../components/NewUserForm'

function Settings() {
  const SettingsWrapper = styled.div `
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
    `
  return (
    <SettingsWrapper>
      <NewChoreForm/>
      <NewUserForm/>
    </SettingsWrapper>
  )
}

export default Settings