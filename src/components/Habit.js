import styled from "styled-components"
import WeekDays from "./Weekdays";

export default function Habit({habit, deleteHabit}){

    return(
        <Box>
            <h4>{habit.name}</h4>
            <WeekDays habit = {habit} nonEditable={true}/>
            <div onClick={deleteHabit}><ion-icon name="trash-outline"></ion-icon></div>
        </Box>
    )
}

const Box = styled.form`
    width: 100%;
    background-color: white;
    border-radius: 5px;
    height: 180px;
    padding: 15px;
    margin-top: 20px;
    `