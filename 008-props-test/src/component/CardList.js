import React, { Component } from 'react';

class CardList extends Component {
    render(){
        let smallBody={
            float:'left',
            width:'800px',
            height:'70px',
            margin:'15px 0',
            border:'1px solid #0f9'
        }
        let leftBar={
            float:'left',
            color: '#000',
            width:'50px',
            height:'70px',
            backgroundColor: '#0f9',
            fontSize: '16px',
            textAlign:'center',
            lineHeight:'35px'
        }
        let centerBar={
            float:'left',
            width:'500px',
            height:'70px',
            paddingLeft:'10px',
            fontSize: '16px',
            lineHeight:'16px'
        }
        let title={
            width:'500px',
        }
        let date={
            width:'500px'
        }
        return (
            <div style={smallBody}>
                <div style={leftBar}>
                    <p>{this.props.index}</p>
                </div>
                <div style={centerBar}>
                    <h3 style={title}>{this.props.title}</h3>
                    <p style={date}>{this.props.date}</p>
                </div>
            </div>
        );
    }
}


CardList.defaultProps={
    index:1,
    title:"这是标题",
    date:'2016.1.1'
}

export default CardList;
