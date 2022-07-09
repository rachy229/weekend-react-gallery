import GalleryItem from "../GalleryItem/GalleryItem";


function GalleryList({galleryList, handleLike}) {


    
console.log(galleryList);
    return (
        <>{galleryList.map(item => 
            <div key={item.id}>
                <GalleryItem
                    item={item}
                />
                <>
                <button onClick={handleLike}>HEART</button>
                <p>{item.likes}</p>
                </>
            </div>
            )}
        </>
    )
            }

export default GalleryList;