import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Button from './components/Button.js';
import InputText from './components/Input.js';


class App extends Component {
  render(){
    return(
      <div>
        <InputText />
        <Button />
      </div>
    )
  }
}

ReactDOM.render(<App/>,document.getElementById('app'));
