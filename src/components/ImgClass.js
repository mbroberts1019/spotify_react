import React from 'react';


const imgClassStyle = {
    heightMin: "50px",
    height: "100%",
    backgroundColor: 'rgb(200,100,240)',
    padding: '2rem 0' 
}

const btnStyle = {
    minHeight: '40px',
    minWidth: '100px',
    borderRadius: '5px',
    color: 'rgb(250,20,200)',
    fontWeight: 'bold',
    fontFamily: 'monospace',
    fontSize: '18px',
}

const h3Style = {
    padding: '2rem',
    margin: 'auto',
    fontSize: '4rem',
    color: '#107595'
}

const resStyle = {
    border: "2px",
    bachgroundColor: "green",
    fontSize: '3rem',
    padding: '10px 0',
    color: '#f9fd50'
}



export default class ImgClass extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            resString: ''
        }
    }

    onSubmit(e){
        let imgUrl = this.props.albumImgUrl;
        e.preventDefault();

        fetch(`http://api.imagga.com/v2/categories/personal_photos?image_url=${imgUrl}`, {
            method: 'GET',
            headers: 
                {Authorization: "Basic YWNjX2JlZGQ5YmE3YzZmOTUxMTo4NTAxOWRiMmNiYWYzYjUzNTk5NGNkZjhlMzEzZTE5NA=="}
        }).then((res)=> res.json()).then((res) =>{ 
            let resString = '';
            let catArray = res.result.categories;
            
            for(let i = 0; i < catArray.length; i++){
                resString += (catArray[i].name.en + " ");

            }
            this.setState({resString: resString});

        });
    }
    
    
    render(){
        return(
            <div style= {imgClassStyle}>
                <h3 style= {h3Style}>Let the judgment begin!</h3>
                <form onSubmit= {(e)=> this.onSubmit(e)}> 
                    <button style= {btnStyle} type= "submit">Catergotize!</button>
                </form>
                <div style= {resStyle}>{this.state.resString}</div>
            </div>
        )
    

    }
}

//https://i.scdn.co/image/3eb78fb754bef6927420f90e984ed7f4cb261438