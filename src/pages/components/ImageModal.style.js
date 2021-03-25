import styled from 'styled-components';

export const BackdropImageWrapper = styled.div`
  width: 90%;
  height: 57rem;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top:0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  margin-top: 2rem; 
`

export const ImageStyled = styled.img`
  max-width: 80%;
  max-height: 80%;
  box-shadow: 3px 5px 7px rgba(0,0,0,0.5);
  border: 3px solid white; 
`
export const StyledText = styled.p`
    color: #efeefe;
    font-weight: bold;
    text-align: start;
`

export const StyledClosed = styled.p`
    color: #efeefe;
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: .5rem;
    cursor: pointer;
`



