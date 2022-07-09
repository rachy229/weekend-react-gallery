import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({galleryList}) {
console.log(galleryList);
    return (
        <p>{galleryList.map(item => 
                (<GalleryItem
                    key={item.id}
                    item={item}
                />)
            )}
        </p>
    )

            }

export default GalleryList;