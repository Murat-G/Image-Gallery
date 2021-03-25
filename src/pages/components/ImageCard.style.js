import styled from "styled-components";

export const StyledCardWrapper = styled.div`
    width: 16.5rem;
    height: 15.5rem;
    border: 0.0625rem solid rgba(0,0,0,0.2);
    border-radius: .3rem;
    box-shadow: 0.1875rem 0.125rem 0.625rem rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: 0.2s;
    &:hover {
        transform: scale(1.1);
    }
    background-color: #2F415A; 
`;

export const StyledCardImage = styled.img`
    width: 100%;
    height: 85%;
    cursor: pointer;
`

export const StyledAuthor = styled.p`
    color: #efeefe;
    font-weight: bold;
    margin: .5rem;
    text-align: start;
`

