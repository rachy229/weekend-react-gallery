function GalleryItem({item}) {
    return(
        <>
            <p key={item.id}>
                {item.description}
                <img src={item.path}></img>
            </p>
        </>
    );
}

export default GalleryItem;