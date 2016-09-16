import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Card from 'material-ui/Card';
import axios from 'axios';



import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


class App extends React.Component {
  getChildContext() {
    return {muiTheme: getMuiTheme()};
  }
  _handleSubmit(e) {
    e.preventDefault();
    const account = this.refs.account.getValue();
    console.log(account);
    axios.get(`https://api.github.com/users/zhouxuanpo`)
        .then((res) => {
            console.log(res);
        });
  }
  render () {
    let styles = {
      padding: '10px'
    }
    return(
      <div style={styles}>
        <form onSubmit={this._handleSubmit.bind(this)}>
          <TextField hintText="Your Github Account"
                     ref="account"/>
          <FlatButton label="Search Github"
                      type="submit"
                      primary={true}/>
        </form>
      </div>
    )
  }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default App;
