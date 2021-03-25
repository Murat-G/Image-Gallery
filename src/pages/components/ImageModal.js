import React from 'react';
import {BackdropImageWrapper,StyledText,ImageStyled,StyledClosed } from './ImageModal.style';


const ImageModal = ({selectedItem,onCloseModal}) => {
    
    return (
        <BackdropImageWrapper>
            <StyledClosed onClick={onCloseModal}> Close </StyledClosed>
            <ImageStyled src={selectedItem.download_url} alt={selectedItem.author}/>
            <StyledText> {selectedItem.author} </StyledText>
        </BackdropImageWrapper>
    );
}

export default ImageModal;
