import styled from 'styled-components';


export const Container = styled.div`
    height:685px;
    color:white;padding:5px;
    font-size:1.7rem;font-weight:200;
    background-image: linear-gradient(#5E21AB, #b478ed);
    align-items: center;
    justify-content: center;
`;

export const Form = styled.form`
    width:50%;
    margin-left: 21%;
    @media(max-width: 690px) {
    width:90%;
  }
    display: flex;
    flex-direction: column;
`;

export const BgForm = styled.div`
    background: white;
    margin:auto;
    max-width: 50%;
    min-height: 40vh;
    padding: 1rem;
    box-shadow: 5px 5px 15px rgba(0,0,0,0.2);
    border-radius: 8px;
`;

export const Input = styled.input`
    width:100%;
    padding:10px;
    margin:4px;
    border:none;
    border-radius:6px;
    font-size:1.1rem;
    color:#5E21AB;
    box-shadow: 0px 0px 5px black;
    margin-top: 5px;
    margin-bottom: 10px;
`;

export const Label = styled.label`
    width: 100%;    
    font-style: normal;
    font-variant: normal;
    font-weight: bold;
    color: black;
    font-size: 1.2rem;
    margin-bottom: 0px;
    margin-left: 10px;

`;

export const Button = styled.button`
    padding:8px;background-color:#ff4dff;
    border:none;color:white;
    font-size:1rem;
    margin-top:5px;margin-left:5px;
`;