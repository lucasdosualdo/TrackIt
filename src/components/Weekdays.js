import styled from "styled-components"

export default function WeekDays ({nonEditable, disabled, habit, setHabit}) {
    const days=['D','S','T','Q','Q','S','S'];

    function selectDay(index){
        if (habit.days.includes(index)) {
            setHabit({...habit, days: habit.days.filter(value => value!==index)})
        } else {
            setHabit({...habit, days: [...habit.days, index]})
        }
    }

return (
    <WeekdayBox >
    {days.map((day, index) => <Weekday 
    onClick={()=>selectDay(index)} 
    habit={habit} 
    key = {index} 
    index={index} 
    disable = {disabled && nonEditable}>
            {day}
            </Weekday>)}
    </WeekdayBox>
)
}

function ChangeBGColor(index, habit) {
    if (habit.days.includes(index)) {
        return "#DBDBDB";
    } else {
        return "#FFFFFF";
    }
}

function ChangeColor(index, habit) {
    if (habit.days.includes(index)) {
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