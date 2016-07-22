import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Cards from './component/Cards.js';

class App extends Component{
    render(){
        return(
        <div>
            <Cards />
        </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);
