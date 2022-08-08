import styled from "styled-components"
import { Button } from "./common"
import Container from "./common/Container"
import Footer from "./common/Footer"
import Header from "./common/Header"
import CreateHabit from "./CreateHabit"
import { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext"
import Habit from "./Habit"
import axios from "axios"

export default function Habits () {
    
    const [clicked, setClicked]=useState(false);
    const [habitsList, setHabitsList]=useState([]);
    const [refresh, setRefresh]=useState(false);
    const {user} = useContext(UserContext);
    const {config} = useContext(UserContext);
    const [habit, setHabit] = useState({
        name: "",
        days: [],
    });

    useEffect(() => {
        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config);
        promise.then(response=>{
            setHabitsList(response.data);
        })
    }, [user, refresh])

    function deleteHabit(habit) {
        let resultado = window.confirm("Você tem certeza que deseja excluir este hábito?");
        if (resultado === true) {
            const promise = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}`, config)
            promise.then(() => {
                setRefresh(!refresh);
            });
        }
    }

    return (
        <>
        <Header/>
        <Container>
            <AddHabits>
            <h4>Meus hábitos</h4>
            <Button tiny onClick={()=>setClicked(true)}>
               <h3>+</h3>
            </Button>
            </AddHabits>
            {clicked ?
            <CreateHabit 
            setClicked={setClicked}
            refresh = {refresh}
            setRefresh={setRefresh}
            habit={habit} 
            setHabit={setHabit}
            /> :
              ''
            }
            {habitsList.length===0 ?
            <Description>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
            </Description> :
            habitsList.map((habit, index)=> 
            <Habit 
            key={index} 
            index={index} 
            habit={habit}
            deleteHabit={() => deleteHabit(habit)}/>)}
                                 
        </Container>
        <Footer/>
        </>
    )
}



const AddHabits = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`

const Description= styled.div`
color: #666666;
line-height: 18px;
margin-top: 30px;
`

