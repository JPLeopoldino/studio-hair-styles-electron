import styled from 'styled-components';

export const Container = styled.div`
    height:700px;
    color:white;padding:5px;
    font-size:1.7rem;font-weight:300;
    background-color:#5E21AB;
`;

export const FormDiv = styled.form`
    width:50%;margin:auto;
    
    @media(max-width: 690px) {
    width:90%;
  }
`;

export const InputStyles = styled.input`
    width:100%;padding:10px;margin:4px;
    border:none;border-radius:6px;
    font-size:1.1rem;color:#5E21AB;
`;

export const Button = styled.button`
    padding:8px;background-color:#1495BE;
    border:none;color:white;
    font-size:1rem;
    margin-top:5px;margin-left:5px;
`;