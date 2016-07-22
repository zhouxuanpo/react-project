import React from 'react';
import AppBar from 'material-ui/AppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';




class App extends React.Component {
  getChildContext() {
    return {muiTheme: getMuiTheme()};
  }
  render () {
    const style = {
        margin: 12,
        borderRadius:"50%",
    };
    return(
        <div>
            <AppBar
                title="Title"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
                />
            <RaisedButton label="Primary" primary={true} style={style} />
        </div>
    )
  }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default App;
