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
            return <div className="galleryBox" onClick={toggleImage}> <p> {item.description}</p> </div>
        }else{
            return <div className="galleryBox" onClick={toggleImage}> <img  src={item.path}></img></div>
        }
    }

    


    return(

        <>
            <div>{showDescription()}</div>
            <button className="like-zone" onClick={() =>handleLike(item.id)} data-id={item.id}>❤️</button>
            <p className="like-zone" >Like Count: {item.likes}</p>
        </>
    );
}

export default GalleryItem;