import { useState } from "react";
import axios from "axios";


function GalleryItem({item, fetchGallery}) {

    const [swap, setSwap] = useState(false)


const toggleImage = () => {
        // console.log('click')
        setSwap(!swap);
        // console.log(swap);
}


    const handleLike = (id) => {
        
        axios.put(`/gallery/like/${id}`)
        .then((response) => {
            fetchGallery();
            console.log('id selected', id)
            })
        .catch((error) => {
            console.log('error in handleLike', error)
            })
        }

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
            <button onClick={() =>handleLike(item.id)} data-id={item.id}>❤️</button>
            <p>Like Count: {item.likes}</p>
        </>
    );
}

export default GalleryItem;