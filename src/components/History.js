import Header from "./common/Header";
import Container from "./common/Container";
import Footer from "./common/Footer";
import styled from "styled-components";


export default function History () {
    return (
        <>
        <Header/>
        <Container>
            <h4>Histórico</h4>
            <Description>Em breve você poderá ver o histórico dos seus hábitos aqui!</Description>
        </Container>
        <Footer/>
        </>       
    )
}

const Description= styled.div`
color: #666666;
margin-top: 20px;
`
