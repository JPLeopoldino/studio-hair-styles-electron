import styled from 'styled-components';

export const Title = styled.h1`
    margin-bottom: 15px;
    margin-top: 10px;
    color:#7031BF;
    font-weight: 400;
`;

export const HistoryContainer = styled.div`
    height:700px;
    color:white;padding:10px;
    font-size:1.8rem;font-weight:300;
    background-color:white;


    @media(max-width: 400px) {
        font-size:1.4rem;
    }
`;

export const List = styled.li`
    background-color:#7F3FD0;
    margin-top:8px;color:whitesmoke;
    width:90%;padding:10px;
    list-style-type: none;
`;

export const Button = styled.button`
    padding:8px;background-color:#ff4dff;
    border:none;color:white;
    font-size:1rem;margin-top:10px;
`;
