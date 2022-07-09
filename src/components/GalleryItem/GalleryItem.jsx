import { useState } from "react";
import axios from 'axios';


function GalleryItem({item}) {

    const [swap, setSwap] = useState(false)

const toggleImage = () => {
        // console.log('click')
        setSwap(!swap);
        // console.log(swap);
}

// const handleLike = () => {
//     console.log('click!');
// }

const showDescription = () => {
        if(swap === true) {
            return <p className="galleryBox" onClick={toggleImage}>{item.description}</p>
        }else{
            return <img className="galleryBox galleryDescription" onClick={toggleImage} src={item.path}></img>
        }
    }

    


    return(

        <>
            <div>{showDescription()}</div>
        </>
    );
}

export default GalleryItem;