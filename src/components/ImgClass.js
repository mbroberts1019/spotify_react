import React from 'react';


const imgClassStyle = {
    heightMin: "50px",
    height: "100%",
    backgroundColor: 'rgb(200,100,240)' 
}








export default class ImgClass extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            img_url: ''
        }
    }

    onSubmit(e){
        e.preventDefault();

        
        
        fetch(`http://api.imagga.com/v2/categories/personal_photos?image_url=https://i.scdn.co/image/3eb78fb754bef6927420f90e984ed7f4cb261438`, {
        method: 'GET',
        headers: 
            {Authorization: "Basic YWNjX2JlZGQ5YmE3YzZmOTUxMTo4NTAxOWRiMmNiYWYzYjUzNTk5NGNkZjhlMzEzZTE5NA=="}
        }).then((res)=> res.json()).then(res => console.log(res));

    
    
    
    
    
    
    }
    
    
    render(){
        return(
            <div style= {imgClassStyle}>
                <h3>Now we see what we get</h3>
                <form onSubmit= {(e)=> this.onSubmit(e)}> 
                    <button type= "submit">Run Categorier</button>
                </form>
            </div>
        )
    

    }
}