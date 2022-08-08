import styled from "styled-components";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import axios from 'axios';

export default function TodayHabit ({habit, refresh, setRefresh}) {
    const { config } = useContext(UserContext);

    function checkHabit () {
        if (habit.done) {
            const promise=axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/uncheck`, {}, config);
            promise.then(()=>{
                setRefresh(!refresh);
            });
            promise.catch(()=>{
                alert('Erro 400.');
            });
        } else {
            const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/check`, {}, config);
            promise.then(()=>{
                setRefresh(!refresh);
            });
            promise.catch(()=>{
                alert('Erro 400.');
            });
        }
    }

    return (
        <>
        <Box>
            <div>
            <h5>{habit.name}</h5>
        <p>
            {`Sequência atual: `}
            
            <CurrentSequency done={habit.done}>
                {habit.currentSequence} dias
            </CurrentSequency>
        </p>
        
        <p>
           {`Seu recorde: `}
            <HighestSequency 
            currentSequence={habit.currentSequence}
            highestSequence={habit.highestSequence}>
                {habit.highestSequence} dias
            </HighestSequency>
        </p>
            </div>
        
        <CheckedButton done ={habit.done} onClick={checkHabit}>
            <ion-icon name="checkmark"></ion-icon>
        </CheckedButton>
        </Box>
        
        </>
    )
}

const Box = styled.form`
    width: 100%;
    background-color: white;
    border-radius: 5px;
    height: auto;
    padding: 15px;
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
        font-size: 13px;
        color: #666666;
        margin-bottom: 5px;
    }
    h5 {
        margin-bottom: 10px;
    }
    `

const CurrentSequency=styled.span`
color: ${props => props.done ? "#8FC549" : "#666666"}`

const HighestSequency=styled.span`
color: #666666;
${props=>{
    if ((props.currentSequence===props.highestSequence) && (props.highestSequence!==0)) {
        return `
        color: #8FC549;
        `
    }
}}
`

const CheckedButton = styled.div`
cursor: pointer;
width: 70px;
height: 70px;
background-color: ${props => props.done ? "#8FC549" : "#EBEBEB"};
border: 1px solid #E7E7E7;
border-radius: 5px;
display: flex;
justify-content: center;
align-items: center;
ion-icon {
    width: 40px;
    height: 40px;
    color: white;
    --ionicon-stroke-width: 85px;
}
` 