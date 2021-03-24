import {StyledCardWrapper, StyledAuthor, StyledCardImage} from "./ImageCard.style";

const ImageCard = ({author, imgSrc}) => {
    return (
        <StyledCardWrapper>
            <StyledCardImage src={imgSrc} alt={"Movie Poster"}/>
            <StyledAuthor> {author} </StyledAuthor>
        </StyledCardWrapper>
    );
}

export default ImageCard;