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
            return <p className="galleryBox" onClick={toggleImage}>{item.description}</p>
        }else{
            return <img className="galleryBox galleryDescription" onClick={toggleImage} src={item.path}></img>
        }
    }

    


    return(

        <>
        {/* { this.showDescription() } */}
            {/* <div key={item.id}>
                {item.description}
            </div> */}
            {/* <img onClick={toggleImage} src={item.path}></img> */}
            <div>{showDescription()}</div>
        </>
    );
}

export default GalleryItem;