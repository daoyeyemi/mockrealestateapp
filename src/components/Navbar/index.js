import React from 'react'
import styled,{css} from 'styled-components/macro'
import { Link } from 'react-router-dom'
import menuData from '../../data/dataMenu'
import Button from '../Button';
import { FaBars } from 'react-icons/fa'

const Navigation = styled.nav`
    background: black;
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
    position: fixed;
    width: 100%;
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
    ;
`

const NavigationBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`
const MenuBars = styled(FaBars)`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        height: 40px;
        width: 40px;
        cursor: pointer;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-50%, 25%);
        color: white;
    }
`;

const NavigationMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -48px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const NavMenuLinks = styled(Link)`
    ${NavLink} 
`;

export default function Navbar({ toggle }) {
    return (
        <Navigation>
            <Logo to="/">Living</Logo>
            <MenuBars onClick={toggle} />
            <NavigationMenu>
                {menuData.map((item, index) => (
                    <NavMenuLinks to={item.link} key={index}>{item.title}</NavMenuLinks>
                ))}
            </NavigationMenu>
            <NavigationBtn>
                <Button to="/contact" primary="true">Contact Us</Button>
            </NavigationBtn>
        </Navigation>
    )
}
