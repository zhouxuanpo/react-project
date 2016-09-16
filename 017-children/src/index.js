import React from 'react';
import { render } from 'react-dom';

import App from './App';
import Img from './components/img';

class MyApp extends React.Component{
    render(){
        return(
            <div>
                <App name="11221212">
                    <p>Hello</p>
                    <p>World</p>
                    <p>!!!</p>
                </App>
                <Img />
            </div>
        )
    }
}


render(<MyApp />, document.getElementById('root'));
