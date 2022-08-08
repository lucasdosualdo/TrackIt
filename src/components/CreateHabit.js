import { useContext } from 'react';
import UserContext from '../contexts/UserContext';
import styled from "styled-components"
import { Button } from './common'
import Weekdays from './Weekdays'

export default function CreateHabit () {
    const {clicked, setClicked}=useContext(UserContext);
    const {habit, setHabit}= useContext(UserContext);
        return (
            <>
            <Box>   
                <input 
                type='text'
                placeholder='nome do hábito'
                required
                /> 
                <Weekdays/>
                <Save>
                    <p>Cancelar</p>
                    <Button medium>Salvar</Button>
                </Save>                           
            </Box>
            </>
        )
    }
   
    const Box = styled.div`
    width: 100%;
    background-color: white;
    border-radius: 5px;
    height: 180px;
    padding: 15px;
    margin-top: 20px;
    position: relative;
    input {
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin-bottom: 5px;
    width: 100%;
    height: 45px;
    font-weight: 400;
    font-size: 20px;
    padding-left: 7px;
    background-color: white;
    &::placeholder{
        color: #DBDBDB;  
    }
    }
    div {
        display: flex; 
    }
    `
    
    const Save = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 15px;
    right: 15px;
    p {
        margin-right: 22px;
        color: #52B6FF;
        font-size: 16px;
    }
    `