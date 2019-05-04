import React from "react";

const stateKey = "spotify_auth_state";

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
    return <button onClick={this.handleClick}>Log in</button>;
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