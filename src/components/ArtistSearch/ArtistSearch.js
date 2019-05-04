import React from 'react';
import './artistSearch.css'



export default class ArtistSearch extends React.Component{
  state = {
    artistPics: [],
    artistNames:[]
  }
  
  onSubmit(e) {
    e.preventDefault();
    let artist =document.getElementById("searchedName").value;
    const urlParams = new URLSearchParams(window.location.hash.replace('#', '?'));
    const access_token = urlParams.get('access_token')

    fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(artist)}&type=track%2Cartist&market=US&limit=5&offset=0`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + access_token
      }
    }).then((res) => res.json())
    .then(res => {
      console.log("RES", res);});
  }
  render(){
    return(
      <div className= "artist-search">
        <h2>Search an Artist:</h2>
        <form onSubmit= {(e)=>this.onSubmit(e)}>
        <input id= "searchedName" type= "text" placeholder="Artist Name" ></input>
        <button type= "submit">Submit</button></form>

      </div>



    )
  }
}
