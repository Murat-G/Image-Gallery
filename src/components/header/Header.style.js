import styled from "styled-components";


export const StyledHeaderWrapper = styled.div`
    width: 100%;
    height: 7rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #E6E6E6;
    margin-bottom: 1rem;
    border-bottom: #2F415A .3rem solid;
`

export const StyledHeaderTitle = styled.p`
    padding: 1rem;
    margin: 1rem;
    font-size: 1.2rem;
    font-weight: bold;
    color: #2F415A;
    &:hover {
        transform: scale(0.8);
        background-color: #1A78BA;
        border-radius: 1rem;
        color: white;
        cursor: pointer;
    }
`

export const StyledLogo = styled.img`
    width: 10rem;
    height: 5rem;
`