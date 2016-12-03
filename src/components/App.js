import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as chuckActions from '../actions/chuckActions'
import { newJoke } from '../actions/chuckActions'
// import * as chuckActions from '../actions/chuckActions';

@connect((store)=>{
  return{
    chuck: store.chuck,
  }

})

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1> CHUCK NORRIS JOKES </h1>
        <div>{this.props.chuck.joke}</div><hr></hr>
        <button onClick={this.click.bind(this)}>NEW JOKE</button>
      </div>
    );
  }

  click(){
    this.props.dispatch(newJoke());
  }

}

export default App;
