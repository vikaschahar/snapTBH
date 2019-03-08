import React from 'react';
import fire from '../fire.js';

const MainStyle = {
    height:'100vh',
    width:'100vw',
    display:'flex',
    flexDirection:'column',
    alignItems:'flex-end',
    justifyContent:'flex-end',
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
    alignSelf:'flex-end',
    justifySelf:'flex-end',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'flex-end',
    overflow:'hidden',
    justifySelf:'flex-end',
    marginTop:'500px',
}

const SpanContainerStyle = {
    color:'#fffc00',
    fontSize:'1em',
    marginTop:'auto',
    fontWeight:'800',
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
}

const DisclaimerStyle = {
    color:'#ffffff',
    fontSize:'0.4em',
}

export default class Main extends React.Component{

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.instaIdRef = React.createRef();
        this.state = {finalImageUrl:"/P1.PNG"};
        this.updatingImage = this.updatingImage.bind(this);
    }

    updatingImage(){
        const items=["/P1.PNG"];
    
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
            const instaId = this.instaIdRef.current.value;

            if(instaId !== ''){
                fire.database().ref('instaId').push().set( instaId );
                this.props.onSubmit();
            }
          }
    }

    handleClick(e){
        e.preventDefault();
        const instaId = this.instaIdRef.current.value;

        if(instaId !== ''){
            fire.database().ref('instaId').push().set( instaId );
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
                    <input className="Input" style={InputStyle} type="text" placeholder="Enter Instagram Id" ref={this.instaIdRef} onKeyPress={this.handleKeyPress}/>
                    <button className="Button" style={ButtonStyle} onClick={this.handleClick}>GET IN!</button>
                    <span className="Disclaimer" style={DisclaimerStyle}>
                        By clicking 'GET IN!', you are agreeing to our&nbsp;   
                        <a href="https://urbanama.com/apps/privacypolicy" style = {{textDecoration: 'none'}}>privacy policy</a>.
                    </span>
                </div>
            </div>
        )
    }
}

Main.defaultProps = {
    baseUrl:'./assets',
}