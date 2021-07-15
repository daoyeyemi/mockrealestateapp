import React from 'react'
import styled from 'styled-components'
import dataMenu from '../../data/dataMenu'
import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import Button from '../Button'
const DropdownContainer = styled.div`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #cd853f;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: 1;
    top: 0;
`

const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

const CloseIcon = styled(FaTimes)`
    color: #000d1a
`

const DropdownWrapper = styled.div``

const DropdownMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 80px);
    text-align: center;
    margin-bottom: 4rem;
`
const DropdownLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
`

const BtnWrap = styled.div``

const Dropdown = () => {
    return (
        <DropdownContainer>
            <Icon>
                <CloseIcon />
            </Icon>
            <DropdownWrapper>
                <DropdownMenu>
                    {dataMenu.map((item, index) => {
                        <DropdownLink to={item.link} key={index}>
                            {item.title}
                        </DropdownLink>
                    })}
                </DropdownMenu>
                <BtnWrap>
                    <Button primary="true" round="true" big="true" to="/contact">
                        Contact Us
                    </Button>
                </BtnWrap>
            </DropdownWrapper>
            <h1>Dropdown, drop, drop</h1>
        </DropdownContainer>
    )
}

export default Dropdown;