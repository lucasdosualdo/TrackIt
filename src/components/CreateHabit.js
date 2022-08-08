import { useContext, useState } from 'react';
import UserContext from '../contexts/UserContext';
import styled from "styled-components"
import { Button } from './common'
import Weekdays from './Weekdays'
import axios from 'axios'
import { ThreeDots } from "react-loader-spinner"


export default function CreateHabit ({habit, setHabit, setClicked, refresh, setRefresh}) {
    const {config} = useContext(UserContext);
    const [disabled, setDisabled] = useState(false);
    
    function habitSubmit(e){
        e.preventDefault();
        setDisabled(true);
        const promise=axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', habit, config);
        promise.then(()=>{

            setClicked(false);
            setDisabled(false);
            setRefresh(!refresh);
            setHabit({
                name: '',
                days: []
            });

            promise.catch(()=>{
            setDisabled(false);
            alert('Houve algum erro em adicionar o hábito.');
        })
        });
    }

    function Cancel () {
        setClicked(false);
        setHabit({...habit})
    }

        return (
            <>
            <Box onSubmit = {habitSubmit}>   
                <input 
                type='text'
                placeholder='nome do hábito'
                onChange={(e) => setHabit({ ...habit, name: e.target.value })}
                disabled={disabled}
                value={habit.name}
                required
                /> 
                <Weekdays 
                habit={habit} 
                setHabit={setHabit} 
                disabled={disabled} 
                nonEditable={false}/>
                <Save>
                    <button type='submit' disabled={disabled} onClick={Cancel}>Cancelar</button>
                    <Button medium disabled={disabled}>
                        {disabled ?
                        <ThreeDots
                        type="ThreeDots"
                        color="#FFFFFF"
                        height={10}
                        width={43}
                        timeout={0}
                        />  :
                        <h3>Salvar</h3>
                        }
                    </Button>
                </Save>                           
            </Box>
            </>
        )
    }
   
    const Box = styled.form`
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
    button {
        margin-right: 22px;
        color: #52B6FF;
        font-size: 16px;
        border: none;
        border-radius: 5px;
        background-color: #FFFFFF;
    }
    `