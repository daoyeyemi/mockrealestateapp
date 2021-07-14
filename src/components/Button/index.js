import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const Button = styled(Link)`
    background: ${({ primary }) => (primary ? '#000d1a' : 'CD853F')}
`;

export default Button