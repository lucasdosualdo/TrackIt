import styled from "styled-components"
import { useContext, useState } from 'react';
import UserContext from "../contexts/UserContext";

export default function Weekdays () {
    const {habit, setHabit}=useContext(UserContext);
    const days=['D','S','T','Q','Q','S','S'];

    function selectDay(index){
        if (habit.weekDays.includes(index)) {
            setHabit({...habit, weekDays: habit.weekDays.filter(value => value!==index)})
        } else {
            setHabit({...habit, weekDays: [...habit.weekDays, index]})
        }
    }

return (
    <WeekdayBox >
    {days.map((day, index) => <Weekday habit={habit} index={index} onClick={()=>selectDay(index)}>
            {day}
            </Weekday>)}
    </WeekdayBox>
)
}

function ChangeBGColor(index, habit) {
    if (habit.weekDays.includes(index)) {
        return "#DBDBDB";
    } else {
        return "#FFFFFF";
    }
}

function ChangeColor(index, habit) {
    if (habit.weekDays.includes(index)) {
        return "#FFFFFF";
    } else {
        return "#DBDBDB";
    }
}

const WeekdayBox = styled.div`
display: flex;
 `

 const Weekday = styled.div`
 width: 30px;
    height: 30px;
    background-color: ${props => ChangeBGColor(props.index, props.habit)};
    color: ${props => ChangeColor(props.index, props.habit)};
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin-right: 5px;
    cursor: pointer;
 `