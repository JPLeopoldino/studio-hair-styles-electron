import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color:white;
    font-size:1.7rem;
    font-weight:300;
    background-image: linear-gradient(#7B206F, #E19AE1);
`;

export const FormDiv = styled.form`
    width:50%;
    margin: 0;
    
    @media(max-width: 690px) {
    width:90%;
  }
`;

export const InputStyles = styled.input`
    width:100%;padding:10px;margin:4px;
    border:none;border-radius:6px;
    font-size:1.1rem;color:#7B206F;
`;

export const Button = styled.button`
    padding:8px;background-color:#ff4dff;
    border:none;color:white;
    font-size:1rem;
    margin-top:5px;margin-left:5px;
`;

export const TitleStyle = styled.h1`
    text-align: center;
    color:white;
    font-weight:400;
    margin-bottom: 80px;
`;