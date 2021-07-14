import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Navigation = styled.nav`
    background: red;
    height: 60px;
    `;

const Logo = styled(Link)`
    color: #fff
`

const MenuBars = styled.i``;

const NavigationMenu = styled.div``;

export default function Navbar() {
    return (
        <Navigation>
            <Logo>Living</Logo>
            <MenuBars />
            <NavigationMenu />
        </Navigation>
    )
}
