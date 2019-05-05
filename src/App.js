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
      artistName: '',
      artistId: '',
      
    }
  }
  
  onArtistChange(name, id){
    console.log("In the App", name, id);
    this.setState({artistName: name, artistId: id});
  }

  componentDidMount(){
    
  }

  render(){
    console.log(this.state);
    return (
      
      <div className="App">
      <Header />
      <SpotifyLogin />
      <ArtistSearch onArtistChange={(n,i)=> this.onArtistChange(n,i)}/>
      <AlbumSearch artistName={this.state.artistName} artistId={this.state.artistId}/>
    </div>
    );
  }
}
export default App;
