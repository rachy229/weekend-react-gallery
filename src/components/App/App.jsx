import React from 'react';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';

function App() {

  const [galleryList, setGalleryList] = useState([]);

  const fetchGallery = () => {
    axios.get('/gallery')
    .then((response) => {
      console.log('response in fetchGallery', response);
      console.log('response.data in fetchGallery', response.data);
      setGalleryList(response.data);
    }).catch(function(error) {
      console.log('error in fetchGallery', error);
    })
  }

  const handleLike = () => {
    axios.put(`/gallery/like/:id`)
    .then(response => fetchGallery())
  .catch(error => console.log('error in handleLike', error))
  }


// const handleLike = (id) => {

// }


  useEffect(() => {
    fetchGallery();
  }, [])

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList handleLike={handleLike} galleryList={galleryList}></GalleryList>
      </div>
    );
}

export default App;
