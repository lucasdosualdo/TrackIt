import { useContext, useEffect, useState } from 'react';
import UserContext from '../contexts/UserContext';
import styled from "styled-components"
import { Button } from './common';

export default function CreateHabit () {

    function MapArray () {    
        return (
            <>
            {arrayDays.map((day, index)=>
               <WeekdayBox key = {index}>
                {day.sigla}
               </WeekdayBox> )}          
            </>          
        )
    }
    const {weekday, setWeekday}=useContext(UserContext);   
    const arrayDays=[
        {
        day: 'Domingo',
        sigla: 'D',
        index: 0   
    },
    {
        day: 'Segunda',
        sigla: 'S',
        index: 1   
    },
    {
        day: 'Terça',
        sigla: 'T',
        index: 2   
    },
    {
        day: 'Quarta',
        sigla: 'Q',
        index: 3   
    },
    {
        day: 'Quinta',
        sigla: 'Q',
        index: 4   
    },
    {
        day: 'Sexta',
        sigla: 'S',
        index: 5   
    },
    {
        day: 'Sábado',
        sigla: 'S',
        index: 6   
    }
    ]   
        return (
            <>
            <Box>   
                <input 
                type='text'
                placeholder='nome do hábito'
                required
                />
                <div>
                <MapArray/>
                </div>   
                
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
    const WeekdayBox = styled.div`
    width: 30px;
    height: 30px;
    background-color: white;
    color: #CFCFCF;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin-right: 5px;
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