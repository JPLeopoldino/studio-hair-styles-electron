import styled from 'styled-components';
import colors from '../../styles/colors';

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color: #FFF;
    height: 100vh;
    width: 15vw;
`;

export const HeaderContainer = styled.div`
    height: 15vh;
    padding-bottom: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.h1`
    font-size: 20px;
    font-weight: bold;
    color: ${colors.pink};
`;

export const DividerLine = styled.span`
    background-color: ${colors.light_pink};
    width: 80%;
    height: 2px;
    border-radius: 100%;
`;

export const LinkContainer = styled.div`
    height: 75vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

export const Button = styled.button`
    background-color: ${colors.pink};
    width: 10vw;
    padding: 10px;
    color: #FFF;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    outline: none;
    font-size: 14px;
    font-weight: bold;

    &:hover{
        background-color: ${colors.dark_pink};
        transition: 0.15s ease-in;
    }
`;

export const LogoffContainer = styled.div`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Logoff = styled.p`
    font-weight: bold;
    color: #FFF;
    background-color: ${colors.pink};
    padding: 10px 40px;
    border-radius: 10px;

    &:hover{
        background-color: ${colors.dark_pink};
        transition: 0.15s ease-in;
    }
`;