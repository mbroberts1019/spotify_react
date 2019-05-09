import React from 'react';
import Card from './Card.js';


const AlbumSearchStyle = {
  backgroundColor: 'cadetblue',
  minHeight: '50px',
  height: '100%',
  padding: '2rem 0rem'
  
};

const AlbumCardStyle = {
  flexWrap: 'wrap',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'flex-start',
  alignContent: 'space-around'
}
const h1 = {
  color: '#BADA55',
  fontSize: '5rem'
};

const readyStyle = {
  fontSize: '2rem',
  padding: '10px 0',
  color: '#8158fc',
  borderRadius: '4px',
  
}


export default class AlbumSearch extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      cards: [],
      ready: ''
    }
  }

  /*
    componentDidUpdate(previousProps, previousState) {
        if (previousProps.data !== this.props.data) {
            this.setState({})
        }
    }
  */

  componentDidUpdate(prevProps, prevState) {
    let artistId = this.props.artistId;
    const urlParams = new URLSearchParams(window.location.hash.replace('#', '?'));
    const access_token = urlParams.get('access_token')
    

    fetch(`	https://api.spotify.com/v1/artists/${artistId}/albums`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + access_token
      }
    }).then((res) => res.json())

      .then((res) => {
        
        let cards = [];
        
        for (let i = 0; i < 10; i++) {
          
          let img = res.items[i].images[1].url;
          cards.push(<Card 
            card_name= {res.items[i].name}
            card_id= {res.items[i].artists[0].id}
            key={i} 
            img= {img}
            onClick = {() => {
              this.props.onAlbumSelect(img);
              this.setState({ready: 'Ready!'});
              }
            }

            />);
        }

        
//checking if the props are dirty or not..
        if(prevProps.artistId !== this.props.artistId){
          this.setState({ cards: cards });
        }
      });
  }

  render() {
    
    return (
      <div style={AlbumSearchStyle}>
        <h1 style= {h1}>Select an Album Cover</h1>
         <div style= {AlbumCardStyle}>{this.state.cards}</div>
         <div style= {readyStyle}>{this.state.ready}</div>
        
      </div>

    )
  }
}