##  mui  组件添加

### 配置app.js   
以下的加上了就会省事。不用重复添加  ↓  了

    <MuiThemeProvider muiTheme={muiTheme}>
        <AppBar title="My AppBar" />
    </MuiThemeProvider>






### app.js

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
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



        getChildContext() 和 App.childContextTypes       要配合使用。
