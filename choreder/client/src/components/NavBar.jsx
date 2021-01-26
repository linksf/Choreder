import React, {useContext} from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import {UserContext} from '../context/UserContext'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome, faClipboard, faUserCog, faSignInAlt, faSignOutAlt} from '@fortawesome/free-solid-svg-icons'

const Icon = styled(FontAwesomeIcon)`

`
const Header = styled.h1`
display: inline;
align-self: flex-start;
color: ${props=>props.theme.dark};
width: 100%;
margin: 0 20px;
font-size: 2rem;
`
const Nav = styled.nav `
    grid-column: 1/2;
    grid-row: 1/2;
    width: 100%;
    //: absolute;
    height: 3rem;
    display: flex;
    justify-content: flex-end;
    padding: 0;
    align-items: center;
    background-color: ${props => props.theme.highlight};
    `
   
const StyledNavLink = styled(NavLink)`
      padding: 0 35px;
      margin: 0;
      font-size: 1.5rem;
      line-height: 1.2rem;
      //place-content: center;
      display:inline-flex;
      justify-content: center;
    align-items: center;
    height:100%;
    color: ${props => props.theme.dark};
    transition: all 100ms ease;
    `
function NavBar(props) {
  const users = useContext(UserContext)
  return (
    <Nav>
      <Header>Chorderly</Header>
      <StyledNavLink
        activeStyle={{
        background: "#313133",
        color: "#66aacc"
      }}
        to="/" exact><Icon icon={faClipboard}/></StyledNavLink>
      <StyledNavLink
        activeStyle={{
        background: "#313133",
        color: "#66aacc"
      }}
        to="/settings"><Icon icon={faUserCog}/></StyledNavLink>
    </Nav>
  )
}

export default NavBar