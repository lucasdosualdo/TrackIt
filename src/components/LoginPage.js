import logo from '../assets/images/logo-trackit.svg';
import styled from 'styled-components';
import { useState } from 'react';
import { Button } from './common';
import {Link} from 'react-router-dom'

export default function LoginPage () {
    return (
        <>
        <Image>
        <img src={logo}/>
        </Image>                      
        <Login>
            <input
            type='text'
            placeholder='email'
            required
            />
            <input
            type='password'
            placeholder='senha'
            required
            />
            <Button>
                <h3>Entrar</h3>
            </Button>           
        </Login>            
        <div className='question'>
            <Link to ='/cadastro'>
            <h6>Não tem uma conta? Cadastra-se!</h6>   
            </Link>          
        </div>                                
        </>
    )
}

const Image = styled.div`
width: 100%;
height: auto;
padding-top: 70px;
display: flex;
justify-content: center;

img {
width: 180px;
height: auto;
}
`
const Login = styled.form`
width: 100%;
height: auto;
padding: 10px 35px;
display: flex;
flex-direction: column;
align-items: center;

input {
    border: 1px solid #D5D5D5;
border-radius: 5px;
margin-bottom: 5px;
min-width: 270px;
min-height: 45px;
font-weight: 400;
font-size: 20px;
padding-left: 7px;
&::placeholder{
    color: #DBDBDB;
    
}
}
`
