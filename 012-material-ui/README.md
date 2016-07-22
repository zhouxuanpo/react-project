##  material-ui

mui 基础设置搭建

...
npm install material-ui -D

npm install  -D react-tap-event-plugin
...			 

然后去   material-ui.com   找相关组件。    复制
...
import AppBar from 'material-ui/AppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';   
...
之类的。



...
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
...

这个必须写上，否则不会生效。
...
App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};
...
写上，同上。


### 注意：  
##### 如果是多个组件 要加上div  不然不会显示。


