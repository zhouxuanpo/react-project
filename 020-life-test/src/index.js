import React from 'react';
import ReactDOM,{render} from 'react-dom';


// import './style/common.css';
import App from './App';

class MyApp extends React.Component{
  render(){
    // console.log(this.props.children);
    return(
      <div>
        {this.props.children}
        <App />
      </div>
    )
  }
}

render(
  <MyApp />,
  document.getElementById('root'));
