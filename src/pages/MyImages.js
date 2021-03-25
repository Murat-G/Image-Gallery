import React,{useContext,useState} from 'react';
import { DataContext } from '../context/DataContext';
import ImageCard  from './components/ImageCard';
import {StyledImageList} from './MyImages.style';
import ImageModal from './components/ImageModal';
import FadeLoader from "react-spinners/FadeLoader";

const MyImage = () => {
    
    const contextData = useContext(DataContext);

    const [selectedItem, setSelectedItem] = useState(null); 

    const showModal = (item) => {
        setSelectedItem(item)
    };
    
    const closeModal = () => {setSelectedItem(null);}

    
    return (

        <StyledImageList>
            {
            contextData ? 
                contextData.map((item) => (
                        <ImageCard  
                            item={item} 
                            key={item.id}
                            author={item.author}
                            imgSrc={item.download_url} 
                            onClicked={() => showModal(item)}
                        /> 
                    )
                ) 
                :
                <FadeLoader  size={55} />  
                
            }
            {selectedItem && <ImageModal  selectedItem={selectedItem}  onCloseModal={closeModal} />}
        </StyledImageList>
    );
}

export default MyImage;

