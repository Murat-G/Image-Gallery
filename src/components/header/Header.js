import React from 'react';
import { StyledHeaderWrapper, StyledHeaderTitle,StyledLogo} from './Header.style';
import { useHistory } from "react-router-dom";
import dkpeakLogo from '../../asset/dkpeak-logo.png'

const Header = () => {

    const history = useHistory();

    const handleHomeClick = () => {
        history.push("/");
    };

    return (
        <StyledHeaderWrapper>
            <StyledLogo src={dkpeakLogo} />
            <StyledHeaderTitle onClick={handleHomeClick}> Home </StyledHeaderTitle>
        </StyledHeaderWrapper>
    )
}

export default Header;
