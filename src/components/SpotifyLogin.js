import React from "react";
import { SSL_OP_TLS_ROLLBACK_BUG } from "constants";

const stateKey = "spotify_auth_state";

const style = {
  backgroundColor: 'rgb(155,230,20)',
  fontSize: '30px',
  display: 'flex',
  
  justifyContent: 'space-evenly',
  alignItems: 'center',
  color: 'rgb(250,20,200)'
}

const btnStyle = {
  height: '40px',
  width: '100px',
  borderRadius: '5px',
  color: 'rgb(250,20,200)',
  fontWeight: 'bold',
  fontFamily: 'monospace',
  fontSize: '18px',
  float: 'left'
}

const btnDiv = {
  width: '25%'
}




const SpotifyLogin = class extends React.Component {
  componentDidMount() {
    localStorage.removeItem(stateKey);
  }

  handleClick = () => {
    const client_id = "7a697e17569443d580ad554e3c0db306";
    const redirect_uri = "http://localhost:3000";
    const scope = "user-read-private user-read-email";
    const state = generateRandomString(16);

    localStorage.setItem(stateKey, state);

    let url = "https://accounts.spotify.com/authorize";
                 url += "?response_type=token";
                 url += `&client_id=${encodeURIComponent(client_id)}`;
                 url += `&scope=${encodeURIComponent(scope)}`;
                 url += `&redirect_uri=${encodeURIComponent(redirect_uri)}`;
                 url += `&state=${encodeURIComponent(state)}`;

    window.location = url;
  };

  render() {
    return (
    <div style = {style}>
      <h3>Please login to Spotify</h3>
      <div style= {btnDiv}>
        <button onClick={this.handleClick} style= {btnStyle}>Log in</button>
      </div>  
    </div>
    );
  }
};

const generateRandomString = length => {
  let text = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  while (text.length <= length) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};

export default SpotifyLogin;