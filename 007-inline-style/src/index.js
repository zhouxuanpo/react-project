import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Button from './components/Button.js';
import InputText from './components/Input.js';


class App extends Component {
  getStyles(){
    return {
      root:{
        backgroundColor:'#0f9',
        height:'300px',
        padding:'50px'
      }
    }
  }
  render(){
    const styles = this.getStyles();
    return(
      <div style = {styles.root}>
        <InputText />
        <Button />
      </div>
    )
  }
}

ReactDOM.render(<App/>,document.getElementById('app'));
