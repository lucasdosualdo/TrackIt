import Header from "./common/Header";
import dayjs from 'dayjs';
import { useContext, useEffect, useState } from 'react';
import UserContext from '../contexts/UserContext';
import Footer from "./common/Footer";
import Container from "./common/Container";
import styled from "styled-components";
import axios from 'axios';
import TodayHabit from "./TodayHabit";

export default function Today () {
    const { user } = useContext(UserContext);
    const { config } = useContext(UserContext);
    const {percentage, setPercentage} = useContext(UserContext);
    const [refresh, setRefresh] = useState(false);
    const [currentHabits, setCurrentHabits] = useState([]);
    useEffect(()=>{
        const promise=axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config);
        promise.then(response=>{
            setCurrentHabits(response.data);
        });
        promise.catch(()=>{
            alert('Não foi possível mostrar os hábitos de hoje.')
        })
    }, [refresh, user.token]);

    const concluidHabits = currentHabits.filter(habit => habit.done);
    useEffect(()=>{
        setPercentage(Math.round((concluidHabits.length/currentHabits.length)*100));
    }, [currentHabits, concluidHabits]);
return (
<>
<Header/>
<Container>  
    <Showdate />
    <Description concluidHabits={concluidHabits.length}>
        {concluidHabits.length===0 ?
        'Nenhum hábito concluído ainda' :
        `${percentage}% dos hábitos concluídos`    
    }      
    </Description>
    {currentHabits.length !== 0 ?
    currentHabits.map((habit, index)=>(
        <TodayHabit
        habit={habit}
        refresh={refresh}
        setRefresh={setRefresh}
        key={index}
        />
    )):
    ''}
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

    return (    
        <h4>{diaConvertido}, {date}</h4>  
    )
}

const Description= styled.div`
color: ${props => props.concluidHabits !==0 ? '#8FC549' : '#666666'};
`



