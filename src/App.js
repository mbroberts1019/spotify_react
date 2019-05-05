import React from 'react';
import './App.css';

import Header from './components/header';
import ArtistSearch from './components/ArtistSearch';
import SpotifyLogin from './components/SpotifyLogin';
import AlbumSearch from './components/AlbumSearch';








class App extends React.Component{
  constructor(){
    super();
    this.state = {
      currentArtist: ''
    }
  }
  
  onArtistChange(val){
    console.log("In the App", val);
    this.setState({currentArtist: val});
  }

  componentDidMount(){
  }

  render(){
    return (
      
      <div className="App">
      <Header />
      <SpotifyLogin />
      <ArtistSearch onArtistChange={(v)=> this.onArtistChange(v)}/>
      <AlbumSearch />
    </div>
    );
  }
}
export default App;
