import styled from 'styled-components';


export const HistoryContainer = styled.div`
    height:700px;
    color:white;padding:5px;
    font-size:1.7rem;font-weight:300;
    background-image: linear-gradient(#5E21AB, #b478ed);


    @media(max-width: 400px) {
        font-size:1.4rem;
    }
`;

export const List = styled.li`
    background-color:white;
    margin-top:3px;color:#5E21AB;
    width:90%;padding:10px;
    list-style-type: none;
`;

export const Button = styled.button`
    padding:8px;background-color:#ff4dff;
    border:none;color:white;
    font-size:1rem;
`;
