import React from "react";
import {
  StyledCardWrapper,
  StyledAuthor,
  StyledCardImage,
} from "./ImageCard.style";

const ImageCard = ({ author, imgSrc, onClicked }) => {

  return (
    <StyledCardWrapper onClick={onClicked}>
      <StyledCardImage src={imgSrc} alt={"Poster"} />
      <StyledAuthor> {author} </StyledAuthor>
    </StyledCardWrapper>
  );
};

export default ImageCard;
