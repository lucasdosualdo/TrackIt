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
min-width: 270px;
min-height: 45px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 5px;
border: none;
cursor: pointer;
h3 {
    color: white;
    font-weight: 400;
font-size: 22px;
}

`