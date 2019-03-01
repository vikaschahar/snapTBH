import React, { Component } from "react";
import Slider from "react-slick";

const StackedCardsStyle = {
    display:'flex',
    //border:'solid 2px #fffc00',
    borderRadius:'5px',
    height:'250px',
    width:'250px',
    color:'#ffffff',
    overflow:'hidden',
    boxShadow:'0px 2px 10px #fffc00',
}

// const ImageContainerStyle = {
//     display:'flex',
//     height:'100%',
//     width:'100%',
//     position:'relative',
// }

// const ImageStyle = {
//     maxWidth:'100%',
//     maxHeight:'100%',
//     height: 'auto',
//     width: 'auto',
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     objectFit:'cover',
// }

export default class StackedCards extends Component {

  constructor(props){
    super(props);
    this.state = {finalImageUrl:"/P1.jpg"};
    this.updatingImage = this.updatingImage.bind(this);
  }

  updatingImage(){
    const items=["/P1.jpg", "/P2.jpg","/P3.jpg"];

    let finalImage = items[Math.floor(Math.random()*items.length)];

    this.setState({
      finalImageUrl : finalImage
    })
  }

  componentWillMount(){
    setInterval(this.updatingImage, 2000);
  }

  render() {
    const settings = {
      infinite: true,
      autoplay:true,
      speed: 2000,
      slidesToShow: '2',
      slidesToScroll: '1',
      autoplaySpeed: 2000,
      cssEase: 'linear',
      arrows:false,
    };

    return (
      <div className="StackedCards" style={StackedCardsStyle}>
        <Slider {...settings}>
          <div >
            <img src={this.props.baseUrl + this.state.finalImageUrl} alt="P1"/>
          </div>
        </Slider>
      </div>
    );
  }
}

StackedCards.defaultProps = {
    baseUrl:'./assets',
}