import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import ArtistSearch from './components/ArtistSearch/ArtistSearch';
import SpotifyLogin from './components/SpotifyLogin/SpotifyLogin';









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
    // const urlParams = new URLSearchParams(window.location.hash.replace('#', '?'));
    // const access_token = urlParams.get('access_token')

    // fetch(`https://api.spotify.com/v1/search?q=muse&type=track%2Cartist&market=US&limit=5&offset=0`, {
    //   method: 'GET',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //     'Authorization': 'Bearer ' + access_token
    //   }
    // }).then((res) => res.json())
    // .then(res => {
    //   console.log("RES", res);});




  }





  render(){
    return (
      
      <div className="App">
      <SpotifyLogin />
      <Header />
      <ArtistSearch onArtistChange={(v)=> this.onArtistChange(v)}/>
    </div>
  );
  }

}


export default App;
