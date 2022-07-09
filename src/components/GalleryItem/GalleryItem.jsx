import { useState } from "react";

function GalleryItem({item}) {

    const [swap, setSwap] = useState(false)

const toggleImage = () => {
        // console.log('click')
        setSwap(!swap);
        // console.log(swap);
}

const showDescription = () => {
        if(swap === true) {
            return <p class="galleryBox" onClick={toggleImage}>{item.description}</p>
        }else{
            return <img class="galleryBox galleryDescription" onClick={toggleImage} src={item.path}></img>
        }
    }

    


    return(

        <div>
        {/* { this.showDescription() } */}
            {/* <div key={item.id}>
                {item.description}
            </div> */}
            {/* <img onClick={toggleImage} src={item.path}></img> */}
            {showDescription()}
        </div>
    );
}

export default GalleryItem;