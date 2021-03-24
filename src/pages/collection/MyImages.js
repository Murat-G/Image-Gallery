import React,{useContext} from 'react';
import { DataContext } from '../../context/DataContext';
import ImageCard  from './components/ImageCard';
import {StyledImageList} from './MyImages.style'

const MyImage = () => {

    const contextData = useContext(DataContext);

    return (

        <StyledImageList>
            {
                contextData?.map((item) => (
                        <ImageCard  
                            item={item} 
                            key={item.id}
                            author={item.author}
                            imgSrc={item.download_url}    
                        />
                    )
                )
            }
        </StyledImageList>
    );
}

export default MyImage;