function GalleryItem({item}) {
    return(
        <div>
            <div key={item.id}>
                {item.description}
            </div>
            
            <img src={item.path}></img>
        </div>
    );
}

export default GalleryItem;