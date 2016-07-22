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


### 定制个人主题：

        darkBaseTheme的属性是默认的，可以通过  var myTheme = {
            palette:{
                xxxxxxxxxxxColor:"#xxxxxx",
                ...
                ...
            }
        }

来设置。

或者通过console.log(darkBaseTheme.palette.xxxxxxxxxxxColor)   来显示当前的颜色
