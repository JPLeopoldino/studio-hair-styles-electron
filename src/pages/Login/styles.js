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
    width:92%;
    margin-left: 5px;
    margin-top: 20px;
    /*@media(max-width: 690px) {
    width:90%;
  }*/
    display: flex;
    flex-direction: column;
`;

export const BgForm = styled.div`
    background: white;
    margin:auto;
    max-width: 35%;
    min-height: 40vh;
    padding: 2rem;
    box-shadow: 5px 5px 15px rgba(0,0,0,0.2);
    border-radius: 4px;
`;

export const Input = styled.input`
    width:100%;
    padding:10px;
    margin:5px;
    border:none;
    border-radius:6px;
    font-size:1.1rem;
    color:#5E21AB;
    box-shadow: 0px 0px 5px black;
`;

export const Button = styled.button`
    width: 105.8%;
    height: 38px;
    background-color: ${colors.pink};
    border-radius: 5px;
    border: none;
    color: white;
    font-weight: bold;
`;

export const Miss = styled.a`
    margin-left: 130px;
    text-align: center;
    font-size: 18px;
`;

export const Label = styled.label`
    font-size: 30px;
    font-family: sans-serif;
    margin-left: 5px;
    font-weight: 300;
    font-style: normal;
    color: #5E21AB;
`;

export const Img = styled.img`

`;

export const ImgContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
