import React from 'react';

const headerStyle = {
  color: 'rgb(176, 34, 219)',
  backgroundColor: 'rgb(22, 219, 226)',
  border: '1px',
  height: '100%',
  textAlign: 'center',
};

const h1Style = {
  padding: '2rem',
  margin: 'auto',
  fontSize: '5rem'
}



export default class Header extends React.Component{

  render(){
    

    return(
      <div style= {headerStyle}>
        <h1 style= {h1Style}>Welcome to the Album Art Mood Analyzer </h1>
      </div>
      
      


    )
  }
}