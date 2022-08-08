import styled from 'styled-components';
import UserContext from '../../contexts/UserContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";

export default function Footer () {
    const { percentage } = useContext(UserContext);
    return (
        <FooterStyle>
            <Link to ='/habitos'>
            <p>Hábitos</p>
            </Link>
            <div>
            <CircularProgressbarWithChildren
            background
            backgroundPadding={6}
            value={percentage}
            styles={buildStyles({
            backgroundColor: "#52B6FF",
            textColor: "#fff",
            pathColor: "#fff",
            trailColor: "transparent",
            strokeLinecap: "round",
            })}>
            <Link to = '/hoje'>
            <p>Hoje</p>
            </Link>
            </CircularProgressbarWithChildren>
            </div>
            <Link to ='/historico'>
            <p>Histórico</p>
            </Link>
        </FooterStyle>
    )
}

const FooterStyle=styled.div`
background-color: #FFFFFF;
width: 100%;
height: 70px;
position: fixed;
bottom: 0;
left: auto;
right: auto;
display: flex;
justify-content: space-around;
align-items: center;
a{ 
    text-decoration: none;
}
p{
    color: #52B6FF;
font-size: 18px;
}
div {
    width: 90px;
    height: 90px;
    margin-bottom: 40px;
   
    p{
        color: #FFFFFF;
    }
    
}
`