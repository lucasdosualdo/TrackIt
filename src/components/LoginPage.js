import logo from '../assets/images/logo-trackit.svg';
import styled from 'styled-components';
import { useState, useContext } from 'react';
import { Button } from './common';
import {Link, useNavigate} from 'react-router-dom'
import UserContext from '../contexts/UserContext';
import { ThreeDots } from "react-loader-spinner";
import axios from 'axios';

export default function LoginPage () {
    const {email, setEmail}=useContext(UserContext);
    const {password, setPassword}=useContext(UserContext);
    const {image, setImage}=useContext(UserContext); 
    const [required, setRequired] = useState(true);
    const [disabled, setDisabled] = useState(false);
    let navigate= useNavigate();

    function LoginForm(e){
        setRequired(false);
        setDisabled(true);
        e.preventDefault();
        const body = {
            email,
            password
        }
        console.log(body);
        const request = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', body);
        request.then(answer => {
            setEmail('');
            setPassword('');
            console.log(answer.data);
            localStorage.setItem('trackit', answer.data.token);
            console.log(localStorage.getItem('trackit'));
            setImage(answer.data.image);
            console.log(image);
            navigate('/hoje');
        });
            
            
        request.catch(()=>{
            setRequired(true);
            setDisabled(false);
            setEmail('');
            setPassword('');
            alert('Falha ao realizar o login.')
        });
    }

    return (
        <>
        <Image>
        <img src={logo}/>
        </Image>                      
        <Login onSubmit={LoginForm}>
            <input
            type='text'
            placeholder='email'
            onChange={((e)=>setEmail(e.target.value))}
            value={email}
            required={required}
            disabled={disabled}
            />
            <input
            type='password'
            placeholder='senha'
            onChange={((e)=>setPassword(e.target.value))}
            value={password}
            required={required}
            disabled={disabled}
            />
            <Button disabled={disabled}>
            {required ? (
                    <h3>Entrar</h3>
                ) : (
                <ThreeDots
                    type="ThreeDots"
                    color="rgb(250, 250, 250)"
                    height={13}
                    width={51}
                    timeout={0}
                />               
                )}   
                
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
background-color: ${(props)=> (props.disabled ? '#F2F2F2' : '#FFFFFF')};
&::placeholder{
    color: #DBDBDB;  
}
}
`
