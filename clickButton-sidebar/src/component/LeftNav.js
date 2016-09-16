import React, { Component } from 'react';

class LeftNav extends Component{
    constructor(){
        super();
        this.state={
            show:true
        }
    }
    handelToggle(){
        this.setState({
            show:!this.state.show
        })
    }
    render(){
        let show = this.state.show ? "-250px" : "0px";
        let coverShow = this.state.show ? "none":"block";
        let styles={
            cover:{
                backgroundColor:'#000',
                position:'absolute',
                top:'0',
                left:'0',
                bottom:'0',
                right:'0',
                opacity:'0.3',
                display:coverShow
            },
            listBox:{
                width:"250px",
                margin:'0',
                position:'fixed',
                height:'100%',
                backgroundColor:'#696969',
                top:'0',
                left:'0',
                bottom:'0',
                marginLeft:show,
                transition:'margin-left 0.3s'
            },
            list:{
                width:'100%',
                padding:'10px',
                color:'#fff',
                height:'60px',
                lineHeight:'40px',
                fontSize:'22px',
                backgroundColor:'#00f',
                textAlign:'center',
                textDecoration:'none'
            }
        }
        return(
            <div>
                <div style={styles.cover} onClick={this.handelToggle.bind(this)}></div>
                <div style={styles.listBox}>
                    <a href="#"  style={styles.list}>HOME</a>
                    <a href="#"  style={styles.list}>BLOG</a>
                    <a href="#"  style={styles.list}>ABOUT</a>
                </div>
            </div>
        )
    }
}

export default LeftNav;
