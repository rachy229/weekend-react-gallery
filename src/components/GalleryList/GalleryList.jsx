import GalleryItem from "../GalleryItem/GalleryItem";


function GalleryList({galleryList, fetchGallery}) {


    
console.log(galleryList);
    return (
        <>{galleryList.map(item => 
                <GalleryItem
                key={item.id}
                fetchGallery={fetchGallery} item={item}
                />
            )}
        </>
    )
            }

export default GalleryList;