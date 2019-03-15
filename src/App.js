import React, { Component } from 'react';
import './App.css';
import Main from './components/main.jsx';
import Done from './components/done.jsx';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-80958032-8');

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      idSubmitted:false,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(){
    this.setState({
      idSubmitted : true
    })
  }

  render() {

    const Component = this.state.idSubmitted ? <Done/> : <Main onSubmit={this.handleSubmit}/>;

    return (
      <div className="App" >
        <header className="App-header">
          {Component}
        </header>
      </div>
    );
  }
}

export default App;
