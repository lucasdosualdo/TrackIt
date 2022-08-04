import logo from '../assets/images/logo-trackit.svg';
import styled from 'styled-components';
import { useState } from 'react';

export default function Login () {
    return (
        <>
        <Image>
        <img src={logo}/>
        </Image>
       
    
        <Logins>
            
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
            
            
        </Logins>
        
        </>
    )
}

const Image = styled.div`
width: 700px;
height: auto;
padding-top: 70px;
display: flex;
justify-content: center;


`
const Logins = styled.div`
padding: 10px 35px;


`
