import styled from "styled-components";

export default function Button ({children, ...otherProps}){
    return (
<Wrapper {...otherProps}>
{children}
</Wrapper>
    )
}

const Wrapper=styled.button`
background-color: ${(props)=> (props.disabled ? '#86CCFF' : '#52B6FF')};
width: 270px;
height: 45px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 5px;
border: none;
cursor: pointer;
h3 {
    color: white;
    font-weight: 400;
font-size: ${(props)=>(props.medium ? '16px' : '25px')};
}
${(props)=>{
    if (props.tiny) {
        return `
        width: 40px;
        height: 35px;
        `
    }
    if (props.medium) {
        return `
        width: 85px;
        height: 35px;
        font-size: 16px;
        color: white;
        `
    }
}}
`