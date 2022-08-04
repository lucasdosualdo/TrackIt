import logo from '../assets/images/logo-trackit.svg';
import styled from 'styled-components';
import { useState } from 'react';
import { Button } from './common';
import {Link} from 'react-router-dom'

export default function SignUpPage () {
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
            <input
            type='text'
            placeholder='nome'
            required
            />
            <input
            type='url'
            placeholder='foto'
            required
            />           
            <Button>
                <h3>Cadastrar</h3>
            </Button>           
        </Login>            
        <div className='question'>
            <Link to ='/'>
            <h6>Já tem uma conta? Faça login!</h6>   
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
&::placeholder{
    color: #DBDBDB;
}
}
`