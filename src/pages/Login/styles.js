import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
    height: 100vh;
    color:white;
    font-size:1.7rem;
    font-weight:300;
    background-image: linear-gradient(#5E21AB, #b478ed);
    align-items: center;
    justify-content: center;
`;

export const Form = styled.form`
    width:100%;
    margin-left: 5px;
    margin-top: 20px;
`;

export const BgForm = styled.div`
    min-height: 400px;
    width: 500px;
    background-color: #ffffff;
    box-sizing: border-box;
    padding: 32px;
    border-radius: 8px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Input = styled.input`
    width: 95%;
    padding: 10px;
    margin-top: 30px;
    border: none;
    border-radius: 6px;
    font-size: 1.1rem;
    color: #5E21AB;
    box-shadow: 0px 1px 0.5px black;
`;

/* export const Button = styled.button`
    width: 100%;
    height: 40px;
    margin-top: 20px;
    background-color: ${colors.pink};
    border-radius: 5px;
    border: none;
    color: white;
    font-weight: bold;
    transition: background-color 0.3s;
    &:hover{
        background-color: #5E21AB;
    }
`; */

export const Miss = styled.a`
    font-size: 18px;
    margin: 10px;
    color: #929292;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: color 1s;
    &:hover{
        color: red;
    }
`;

export const Label = styled.label`
    font-size: 30px;
    font-family: sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 300;
    color: #303030 ;
`;

export const Img = styled.img`
    width: 150px;
    height: 150px;
    background-color: linear-gradient(#5E21AB, #b478ed);
    transition: width 2s, height 2s, transform 2s;
    &:hover{
        width: 200px;
        height: 200px;
        transform: rotate(360deg);
    }
`;

export const ImgContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
