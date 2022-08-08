import styled from 'styled-components';

export default function Container ({children}) {
    return (
        <ContainerStyle>{children}</ContainerStyle>
    )
}

const ContainerStyle = styled.div`
padding: 100px 30px 0 30px;
background-color: #F2F2F2;
width: 100%;
display: flex;
flex-direction: column;
h4 {
    margin-bottom: 5px;
}
`