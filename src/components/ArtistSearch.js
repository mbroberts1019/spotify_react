import React from 'react';
import Card from './Card.js'


const artistSearch = {
  color: 'rgba(41, 184, 12)',
  height: '100%',
  backgroundColor: '#B00B55',
  textAlign: 'center',
  paddingTop: '0.5rem',
  margin: 'auto',
  paddingBottom: '2rem'
  


}

const searchCard = {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems:'flex-start',
  alignContent: 'space-around',
  justifyContent: 'start',
  width: "100%"


}

const h2Style = {
  padding: '2rem',
  margin: 'auto',
  fontSize: '5rem'
}

const btnStyle = {
  height: '40px',
  width: '100px',
  borderRadius: '5px',
  color: 'rgb(250,20,200)',
  fontWeight: 'bold',
  fontFamily: 'monospace',
  fontSize: '18px',
  
}

const searchBoxStyle = {
  width: '50%',
  padding: '12px 20px',
  margin: '8px 0',
  boxSizing: 'border-box',
  borderRadius: '4px',
  fontSize: '2rem'
}




export default class ArtistSearch extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchCards: []
    };
  }

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
        
        let searchCards =[];
// 
        for(let i = 0; i<5; i++){
          
          
          if(res.artists.items[i].images.length !== 0){
            
            searchCards.push( < Card 
              card_name={res.artists.items[i].name} 
              card_id={res.artists.items[i].id} 
              onClick = {(card_id, card_name) => this.props.onArtistChange(card_id, card_name)}
              key = {i} 
              img={res.artists.items[i].images[1].url}
              />);
          }

        }
        
        this.setState({searchCards:searchCards});
 
      });

      



  }
  render() {
    return (
      <div style={artistSearch}>
        <h2 style={h2Style}>Search an Artist:</h2>
        <form onSubmit={(e) => this.onSubmit(e)}>
          <input style= {searchBoxStyle} id="searchedName" type="text" placeholder="Artist Name" ></input><br></br>
          <button style={btnStyle} type="submit">Submit</button>
        </form>
        <div style={searchCard} >{this.state.searchCards}</div>
      </div>



    )
  }
}
