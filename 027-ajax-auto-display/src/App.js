import React from 'react';
import axios from 'axios';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import CircularProgress from 'material-ui/CircularProgress';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();



class App extends React.Component {
    constructor(){
        super();
        this.state={
            info:{},
            wait:true
        }
    }
    getChildContext() {
        return {muiTheme: getMuiTheme()};
    }
    getUserInfo(){
        return axios.get(`https://api.github.com/users/zhouxuanpo`)
        .then((res) => ({
            bio:res.data
        }))
    }
    componentDidMount(){
        this.getUserInfo().then((data) => {
            console.log(data.bio)
            this.setState({
                info:data.bio,
                wait:false
            })
        })
    }
    render () {
        let styles = {
          padding: '10px'
        }
        return(
          <div style={styles}>

            {
                this.state.wait ? <CircularProgress /> :
                <div>
                    脚手架
                    {this.state.info.login}

                    <img src={this.state.info.avatar_url} />
                </div>

            }
          </div>
        )
    }
}


App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};


export default App;
