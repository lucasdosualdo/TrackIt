import styled from "styled-components"
import { Button } from "./common"
import Container from "./common/Container"
import Footer from "./common/Footer"
import Header from "./common/Header"
import CreateHabit from "./CreateHabit"

export default function Habits () {
    return (
        <>
        <Header/>
        <Container>
            <AddHabits>
            <h4>Meus hábitos</h4>
            <Button tiny>
               <h3>+</h3>
            </Button>
            </AddHabits>
            <CreateHabit/>
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

