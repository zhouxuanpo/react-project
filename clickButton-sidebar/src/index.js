import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Button from './component/Button.js';
// import './stylesheet/commen.css';

class App extends Component{
    render(){
        return(
            <Button />
        )
    }
}


ReactDOM.render(<App/>,document.getElementById('app'));
