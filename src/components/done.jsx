import React from 'react';

const DoneStyle = {
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'flex-start',
    height:'350px',
    width:'350px',
    overflow:'hidden',
}

const HeaderStyle = {
    color:'#fffc00',
    fontSize:'1em',
    margin:'10px',
    fontWeight:'800',
    height :'20%',
    width:'auto',
    zIndex:'2',
}

const ImageContainerStyle ={

}



export default class Done extends React.Component{
    render(){
        return(
            <div className="Done" style={DoneStyle}>
                <div className="Header" style={HeaderStyle}>Nice, we'll reach you out when we launch!</div>
                <div className="ImageContainer" style={ImageContainerStyle}>
                    <img src="https://media.tenor.com/images/93bd08296570cde58012f023ae51b620/tenor.gif" alt="Done!"/>
                </div>
            </div>
        )
    }
}