import styled from 'styled-components';
import UserContext from '../../contexts/UserContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

export default function Footer () {
    return (
        <FooterStyle>

            <p>Hábitos</p>
            <div>Hoje</div>
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
color: #52B6FF;
font-size: 18px;
div {
    width: 90px;
    height: 90px;
    border-radius: 100%;
    background-color: #52B6FF;
    margin-bottom: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
}
`