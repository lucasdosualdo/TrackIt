import styled from 'styled-components';

export default function Container ({children}) {
    return (
        <ContainerStyle>{children}</ContainerStyle>
    )
}

const ContainerStyle = styled.div`
padding: 100px 18px 0 18px;
background-color: #F2F2F2;
width: 100%;
height: 100vh;
h4 {
    margin-bottom: 5px;
}
p {
    color: #BABABA;
}
`