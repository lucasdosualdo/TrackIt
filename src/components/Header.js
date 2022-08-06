import styled from 'styled-components';
import UserContext from '../contexts/UserContext';
import { useContext } from 'react';


export default function Header () {
    const {image, setImage}=useContext(UserContext); 
    return (
        <HeaderStyle>
           <h1>TrackIt</h1>
           <img src={image}/>
        </HeaderStyle>
    )
}

const HeaderStyle = styled.div`
width: 100%;
height: 70px;
font-family: 'Playball';
font-weight: 400;
font-size: 40px;
background-color: #126BA5;
position: fixed;
top: 0;
left: auto;
right: auto;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 20px;
img {
    width: 51px;
    height: auto;
    border-radius: 100%;
}
`
