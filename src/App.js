import React from 'react';
import './App.css';

import Header from './components/Header';
import ArtistSearch from './components/ArtistSearch';
import SpotifyLogin from './components/SpotifyLogin';
import AlbumSearch from './components/AlbumSearch';
import ImgClass from './components/ImgClass';







class App extends React.Component{
  constructor(){
    super();
    this.state = {
      artistName: '',
      artistId: '',
      albumImgUrl: ''
    }
  }
  
  onArtistChange(name, id){
    this.setState({artistName: name, artistId: id,});
  }

  onAlbumSelect(img){   
    this.setState({albumImgUrl: img})
  }

  componentDidMount(){
    
  }

  render(){
    console.log(this.state);
    return (
      
      <div className="App">
      <Header />
      <SpotifyLogin />
      <ArtistSearch 
        onArtistChange={(n,i)=> this.onArtistChange(n,i)}/>
      <AlbumSearch 
        onAlbumSelect={(img)=> this.onAlbumSelect(img)}
        artistName={this.state.artistName} 
        artistId={this.state.artistId}
        />
      <ImgClass albumImgUrl= {this.state.albumImgUrl} />
    </div>
    );
  }
}
export default App;
