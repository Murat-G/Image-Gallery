import styled from "styled-components";


export const StyledHeaderWrapper = styled.div`
    width: 100%;
    height: 6rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #35424A;
    margin-bottom: 1rem;
    border-bottom: #a9508b .3rem solid;
`

export const StyledHeaderTitle = styled.p`
    padding: 1rem;
    margin: 1rem;
    font-size: 1.2rem;
    font-weight: bold;
    color: white;
    &:hover {
        transform: scale(0.8);
        background-color: #80006A;
        border-radius: 1rem;
        color: white;
        cursor: pointer;
    }
`