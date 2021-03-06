import styled from 'styled-components';
import colors from '../../styles/colors';


export const ContainerProfile = styled.div`
    color:white;font-size:1.7rem;
`;

export const Header = styled.div`
    background-color: ${colors.pink};
    padding:6px;height:300px;
    width:100%;

    @media(max-width: 690px) {
    height: 500px;
  }
`;

export const ImgProfile = styled.img`
    background-color:whitesmoke;
    width:22%;float:left;
    height:250px;border-radius:13px;
    margin-top:25px;margin-left:50px;


    @media(max-width: 690px) {
    width:52%;margin-left:0;
  }
`;

export const UserInfo = styled.div`
    width:65%;float:right;
    font-weight:300;

    @media(max-width: 690px) {
    font-size:1.4rem;width:100%;
  }
`;

export const MainText = styled.h1`
    margin-top:15px; font-weight:300;color:white;
    text-transform: capitalize;
`;

export const Buttons = styled.div`
    background-color: ${colors.dark_pink};
    padding:10px;text-align:center;
    width:100%;height:54px;
   
    @media(max-width: 690px) {
    height:100px;
  }
`;

export const Edit = styled.div`
    width:50%;float:left;margin-top:12px;color:white;

    @media(max-width: 690px) {
    width:100%;
  }
`;

export const History = styled.div`
    width:50%;float:right;margin-top:12px;color:white;

    @media(max-width: 690px) {
    width:100%;
  }
`;