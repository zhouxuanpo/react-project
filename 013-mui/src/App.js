import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';




class App extends React.Component {
    getChildContext() {
      return {muiTheme: getMuiTheme()};
    }
    render () {
        return(
            <div>
                 <AppBar title="My AppBar" />
            </div>
        )
    }

}


App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default App;
