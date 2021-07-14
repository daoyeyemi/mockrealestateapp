import React from 'react'
import styled,{css} from 'styled-components/macro'
import { Link } from 'react-router-dom'
import menuData from '../../data/dataMenu'
import Button from '../Button';

const Navigation = styled.nav`
    background: black;
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
    position: fixed;
    width: 100%;
    background: #000;
    `;
const NavLink = css`
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%
    cursor: pointer;
    text-decoration: none;
`

const Logo = styled(Link)`
    ${NavLink}
    font-style: italic;
`

const NavigationBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;
`
const MenuBars = styled.i``;

const NavigationMenu = styled.div`
display: flex;
align-items: center;
`;

const NavMenuLinks = styled(Link)`
    ${NavLink} 
`;

export default function Navbar() {
    return (
        <Navigation>
            <Logo to="/">Living</Logo>
            <MenuBars />
            <NavigationMenu>
                {menuData.map((item, index) => (
                    <NavMenuLinks to={item.link} key={index}>{item.title}</NavMenuLinks>
                ))}
            </NavigationMenu>
            <NavigationBtn>
                <Button to="/contact">Contact Us</Button>
            </NavigationBtn>
        </Navigation>
    )
}
