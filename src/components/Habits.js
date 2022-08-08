import styled from "styled-components"
import { Button } from "./common"
import Container from "./common/Container"
import Footer from "./common/Footer"
import Header from "./common/Header"
import CreateHabit from "./CreateHabit"
import { useContext, useState } from "react";
import UserContext from "../contexts/UserContext"

export default function Habits () {
    const {clicked, setClicked}=useContext(UserContext);
    const {habit, setHabit}= useContext(UserContext);
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
            <CreateHabit/> :
              ''
            }                                 
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

