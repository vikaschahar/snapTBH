import React from 'react';
import fire from '../fire.js';

const MainStyle = {
    height:'100vh',
    width:'100vw',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#080806',
    overflow:'hidden',
    position:'relative',
}

const ImageContainerStyle = {
    position:'absolute',
    width:'100%',
    height:'100%',
    top:'0',
    left:'0',
    overflow:'hidden',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    zIndex:'-1',
}

const BackdropStyle = {
    // position:'absolute',
    // top: 0,
    // left: 0,
    // right: 0,
    // bottom: 0,
    display : 'inline-block',
    maxHeight:'99%',
    maxWidth:'99%',
    height:'auto',
}

const CTAContainerStyle = {
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    overflow:'hidden',
    justifySelf:'flex-end',
    marginTop:'auto',
    zIndex:'1',
}

const SpanContainerStyle = {
    color:'#fffc00',
    fontSize:'1em',
    marginTop:'auto',
    fontWeight:'800',
    zIndex:'2',
}

const InputStyle = {
    height:'50px',
    padding: '10px 15px 10px',
    borderRadius:'5px',
    border:'solid 2px #fffc00',
    fontSize:'0.6em',
    margin: '8px 0',
    boxSizing: 'border-box',
    boxShadow:'0px 1px 1px #fffc00',
    zIndex:'2',
}

const ButtonStyle = {
    padding: '6px 12px',
    borderRadius:'9999px',
    border:'solid 2px #fffc00',
    fontSize:'0.6em',
    margin: '10px 0',
    boxSizing: 'border-box',
    backgroundColor:'#fffc00',
    cursor:'pointer',
    outline:'none',
    boxShadow:'0px 2px 10px #fffc00',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    zIndex:'2',
}

export default class Main extends React.Component{

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.snapIdRef = React.createRef();
        this.state = {finalImageUrl:"/P1.png"};
        this.updatingImage = this.updatingImage.bind(this);
    }

    updatingImage(){
        const items=["/P1.png", "/P2.png"];
    
        let finalImage = items[Math.floor(Math.random()*items.length)];
    
        this.setState({
          finalImageUrl : finalImage
        })
      }
    
    componentWillMount(){
        setInterval(this.updatingImage, 2000);
    }

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            const snapId = this.snapIdRef.current.value;

            if(snapId !== ''){
                fire.database().ref('snapId').push().set( snapId );
                this.props.onSubmit();
            }
          }
    }

    handleClick(e){
        e.preventDefault();
        const snapId = this.snapIdRef.current.value;

        if(snapId !== ''){
            fire.database().ref('snapId').push().set( snapId );
            this.props.onSubmit();
        }
    }

    render(){
        return(
            <div className="Main" style={{MainStyle}} >
                <div className="ImageContainer" style={ImageContainerStyle}>
                    <img src={this.props.baseUrl + this.state.finalImageUrl} alt="Backdrop" style={BackdropStyle}/>
                </div>
                <div className="CTAContainer" style={CTAContainerStyle}>
                    <span className="SpanContainer" style={SpanContainerStyle}>Join the queue</span>
                    <input className="Input" style={InputStyle} type="text" placeholder="Enter Snapchat Id" ref={this.snapIdRef} onKeyPress={this.handleKeyPress}/>
                    <button className="Button" style={ButtonStyle} onClick={this.handleClick}>GET IN!</button>
                </div>
            </div>
        )
    }
}

Main.defaultProps = {
    baseUrl:'./assets',
}