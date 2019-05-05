import React from 'react';


const img = {
    width:'100%',
    height:'auto',
    margin:'0 auto',
    boxSizing:'border-box',
    borderRadius:'15px'
};
const style={
    padding:'15px',
    backgroundColor:'tan',
    width:'200px',
    height:'300px',
    margin:'15px auto',
    borderRadius:'15px',
};


export default class Card extends React.Component{

  render(){
    return(
      <div style ={style}>
        <img style={img}  src={this.props.img}></img>
        <h3>{this.props.title} </h3>
      </div>



    )
  }
}