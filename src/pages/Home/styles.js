import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color: pink;
    height: 100vh;
    width: auto;
    position: relative;
    overflow: hidden;
    z-index: -1;

    &::after{
        content: '';
        position: absolute;
        border-radius: 100%;
        background-color: #FFF;
        width: 5000px;
        height: 5000px;
        bottom: 500px;
        z-index: -1;
    }
`;

export const Title = styled.h1`
    font-size: 34px;
    font-weight: bold;
`;