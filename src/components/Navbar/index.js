import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import menuData from '../../data/dataMenu'

const Navigation = styled.nav`
    background: black;
    height: 60px;
    display: flex;
    `;

const Logo = styled(Link)`
    color: #fff
`

const MenuBars = styled.i``;

const NavigationMenu = styled.div``;

const NavLinks = styled(Link)`
    color: #fff; 
`;

export default function Navbar() {
    return (
        <Navigation>
            <Logo to="/">Living</Logo>
            <MenuBars />
            <NavigationMenu>
                {menuData.map((item, index) => (
                    <NavLinks to={item.link} key={index}>{item.title}</NavLinks>
                ))}
            </NavigationMenu>
        </Navigation>
    )
}
