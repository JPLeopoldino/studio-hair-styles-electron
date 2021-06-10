import React from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';


export const Container = styled.div`
    width: 100vw;
`;

export const Button = styled.button`
    background-color: ${colors.pink};
    width: 8vw;    
    color: #FFF;
    font-size: 14px;
    border-radius: 5px;
    border: none;
    font-weight: bold;
`;
