import React from 'react';
import Card from './Card.js';


const AlbumSearchStyle = {
  backgroundColor: 'cadetblue',
  height: '100%',
  flexWrap: 'wrap',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'flex-start',
  alignContent: 'space-around'
};
const h1 = {
  color: 'green',
};


export default class AlbumSearch extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      cards: []
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
    //console.log(artistId);

    fetch(`	https://api.spotify.com/v1/artists/${artistId}/albums`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + access_token
      }
    }).then((res) => res.json())

      .then((res) => {
        //console.log('AlbumSearch', res.items);
        let cards = [];
        
        for (let i = 0; i < 10; i++) {
          //console.log(res.items[i].images[1].url);
          cards.push(<Card key={i} img={res.items[i].images[1].url} />);
        }
//checking if the props are dirty or not..
        if(prevProps.artistId !== this.props.artistId){
          this.setState({ cards: cards });
        }
      });
  }

  render() {
    //console.log(this.state);
    return (
      <div style={AlbumSearchStyle}>
        {this.state.cards}
      </div>

    )
  }
}