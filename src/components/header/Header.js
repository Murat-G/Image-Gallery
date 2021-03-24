import React from 'react';
import { StyledHeaderWrapper, StyledHeaderTitle } from './Header.style';
import { useHistory } from "react-router-dom";


const Header = () => {

    const history = useHistory();

    const handleHomeClick = () => {
        history.push("/");
    };

    const handleAlbumClick = () => {
        history.push("/album");
    };


    return (
        <StyledHeaderWrapper>
            <StyledHeaderTitle onClick={handleHomeClick}> Home </StyledHeaderTitle>
            <StyledHeaderTitle onClick={handleAlbumClick}> Album </StyledHeaderTitle>
        </StyledHeaderWrapper>
    )
}

export default Header;
