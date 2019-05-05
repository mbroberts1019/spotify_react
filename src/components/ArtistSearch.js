import React from 'react';



const artistSearch = {
  color: 'rgba(41, 184, 12)',
  height: '20rem',
  backgroundColor: '#B00B55',
  textAlign: 'center',
  paddingTop: '0.5rem',
  margin: 'auto'

}

const h2Style = {
  padding: '2rem',
  margin: 'auto',
  fontSize: '5rem'
}




export default class ArtistSearch extends React.Component {

  onSubmit(e) {
    e.preventDefault();
    let artist = document.getElementById("searchedName").value;
    const urlParams = new URLSearchParams(window.location.hash.replace('#', '?'));
    const access_token = urlParams.get('access_token')

    fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(artist)}&type=track%2Cartist&market=US&limit=10&offset=0`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + access_token
      }
    }).then((res) => res.json())
      .then(res => {
        console.log(res.artists);
        
        this.props.onArtistChange(res.artists.items[0].name, res.artists.items[0].id);
      });
  }
  render() {
    return (
      <div style={artistSearch}>
        <h2 style={h2Style}>Search an Artist:</h2>
        <form onSubmit={(e) => this.onSubmit(e)}>
          <input id="searchedName" type="text" placeholder="Artist Name" ></input>
          <button type="submit">Submit</button>
        </form>

      </div>



    )
  }
}
