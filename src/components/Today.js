import Header from "./common/Header";
import dayjs from 'dayjs';
import { useContext, useEffect, useState } from 'react';
import UserContext from '../contexts/UserContext';
import Footer from "./common/Footer";
import Container from "./common/Container";
import styled from "styled-components";

export default function Today () {
    
return (
<>
<Header/>
<Container>  
    <Showdate />
    <Description>Nenhum hábito foi concluído ainda</Description>
</Container>
<Footer/>
</>   
)
}
function Showdate() {
    const {date, setDate}=useContext(UserContext); 
    const {day, setDay}=useContext(UserContext); 
    const [diaConvertido, setDiaConvertido]=useState('testando');
    useEffect(()=>{
        setDay(dayjs().format('dddd'));
        setDate(dayjs().format('DD/MM'));
        console.log(day);
        console.log(date);
        if (day==='Monday'){
            setDiaConvertido('Segunda');   
            console.log(day);
            console.log(diaConvertido)
        }
        if (day==='Tuesday'){
            setDiaConvertido('Terça');
        }
        if (day==='Wednesday'){
            setDiaConvertido('Quarta');
        }
        if (day==='Thursday'){
            setDiaConvertido('Quinta');
        }
        if (day==='Friday'){
            setDiaConvertido('Sexta');
        }
        if (day==='Saturday'){
            setDiaConvertido('Sábado');
            console.log(day);
            console.log(diaConvertido)
        }
        if (day==='Sunday'){
            setDiaConvertido('Domingo');
        }
    }, [day, diaConvertido])

    console.log(day);
    console.log(diaConvertido)
    return (    
        <h4>{diaConvertido}, {date}</h4>  
    )
}

const Description= styled.div`
color: #666666;
`



