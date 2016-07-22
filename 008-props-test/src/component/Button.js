import React, { Component } from 'react';

class Button extends Component {


    render(){
        let styles={
            color: '#fff',
            backgroundColor: this.props.bg,
            borderColor: '#2db7f5',
            padding: '4px 15px 5px 15px',
            fontSize: '14px',
            borderRadius: '6px'
        }
        return (
            <button style={styles}>{this.props.title}</button>
        );
    }
}


Button.defaultProps = {
    title:"我是默认标题",
    bg:"#0f9"
};


Button.propTypes = {
    title: React.PropTypes.string.isRequired,
    bg: React.PropTypes.string.isRequired,
};
export default Button;
