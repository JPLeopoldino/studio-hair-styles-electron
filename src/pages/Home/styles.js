import styled from 'styled-components';
import colors from '../../styles/colors';

export const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 100vh;
    width: 100vw;
`;

export const ImageContainer = styled.div`
    width: 200px;
    height: 200px;
    overflow: hidden;
    border-radius: 100%;
    border: 4px solid #7B206F;
    margin-top: 80px;
    margin-bottom: 30px;
`

export const Image = styled.img`
    width: 100%;
    height: auto;
`

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Title = styled.h1`
    font-size: 34px;
    font-weight: bold;
    margin-right: 5px;
`;

export const TitleUsername = styled.h1`
    font-size: 48px;
    font-weight: bold;
    text-transform: capitalize;
`