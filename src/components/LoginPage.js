import logo from '../assets/images/logo-trackit.svg';
import styled from 'styled-components';
import { useState, useContext } from 'react';
import { Button } from './common';
import {Link, useNavigate} from 'react-router-dom'
import UserContext from '../contexts/UserContext';
import { ThreeDots } from "react-loader-spinner";
import axios from 'axios';

export default function LoginPage () {
    const {user, setUser} = useContext(UserContext);
    const [required, setRequired] = useState(true);
    const [disabled, setDisabled] = useState(false);
    const [loginUser, setLoginUser] = useState({
        email: "",
        password: "",
    })
    let navigate= useNavigate();

    function LoginForm(e){
        setRequired(false);
        setDisabled(true);
        e.preventDefault();
        const request = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', loginUser);
        request.then(answer => {
            localStorage.setItem('trackit', answer.data.token);
            setUser(answer.data);
            navigate('/hoje');
        });      
            
        request.catch(()=>{
            setRequired(true);
            setDisabled(false);
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
            onChange={((e)=>setLoginUser({...loginUser, email: e.target.value}))}
            value={loginUser.email}
            required={required}
            disabled={disabled}
            />
            <input
            type='password'
            placeholder='senha'
            onChange={((e)=>setLoginUser({...loginUser, password: e.target.value}))}
            value={loginUser.password}
            required={required}
            disabled={disabled}
            />
            <Button disabled={disabled} large>
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
