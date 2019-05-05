import React from 'react';
import './App.css';

import Header from './components/header';
import ArtistSearch from './components/ArtistSearch';
import AlbumSearch from './components/AlbumSearch';

function App() {

  return (
    <div className="App">
      <Header />
      <AlbumSearch />
      <ArtistSearch />
    </div>
  );
}

export default App;
