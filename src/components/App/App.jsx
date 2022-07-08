import React from 'react';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import GalleryItem from '../GalleryItem/GalleryItem';
import GalleryList from '../GalleryList/GalleryList';
import { response } from 'express';

function App() {

  const [galleryList, setGalleryList] = useState([]);

  const fetchGallery = () => {
    axios.get('/gallery')
    .then((response) => {
      console.log('response in fetchGallery', response);
      console.log('response.data in fetchGallery', response.data);
      setGalleryList(response.data);
    })
  }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <img src="images/maine.jpeg"/>
      </div>
    );
}

export default App;
