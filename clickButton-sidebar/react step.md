## 如何写react



####index.js中：
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Button from './component/Button.js';


class App extends Component{
    render(){
        return(
            <Button />
        )
    }
}


ReactDOM.render(<App/>,document.getElementById('app'));




####Button.js中：
import React, { Component } from 'react';

class Button extends Component{
    render(){
        return(
            <div>
                <button>click</button>
            </div>
        )
    }
}

export default Button;

