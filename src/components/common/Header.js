import styled from 'styled-components';
import UserContext from '../../contexts/UserContext';
import { useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom";


export default function Header () {
    const navigate = useNavigate();
    const {user} = useContext(UserContext);

    useEffect(()=>{
        if (user === "") {
            navigate("/");
        }
    }, [user, navigate])
    return (
        <HeaderStyle>
           <h1>TrackIt</h1>
           <img src={user.image}/>
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
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
img {
    width: 51px;
    height: 51px;
    object-fit: cover;
    border-radius: 100%;
}
`
