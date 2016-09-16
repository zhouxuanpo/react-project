import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from './component/AppBar';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Draw from './component/Draws';




class App extends React.Component {
    getChildContext() {
      return {muiTheme: getMuiTheme()};
    }
    render () {
        return(
            <div>
                 <AppBar />
                 <Draw />
            </div>
        )
    }

}


App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default App;
