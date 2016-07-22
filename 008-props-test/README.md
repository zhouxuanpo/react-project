# props 传值    可进行复用


### index.js 中
...
class App extends Component{
    render(){
        return(
            <p>Hello , {this.props.name} , I come from {this.props.where}!</p>
        )
    }
}

ReactDOM.render(
    <App name="zhouxuan" where="China"/>,
    document.getElementById('app')
);
...

通过{this.props.name}  和ReactDOM里的  name进行连接。




### 通过变量传值   
  Button.js :  backgroundColor: this.props.bg,
  Index.js :   <Button title="myButton" bg="#2db7f5"/>
  则可连接。    通过bg连接




### 设置默认样式
  Button.defaultProps = {
      title:"我是默认标题",
      bg:"#0f9"
  }


### 设置警告
Button.propTypes = {
    title: React.PropTypes.string.isRequired,
    bg: React.PropTypes.string.isRequired,
};


### 一次性通过变量  传递多个属性
let btnProps = {
    title:"外部变量",
    bg:"#ccc",
}

<Button {...btnProps} />          
3个点就能把整个变量的属性都传过去。


### 数组，自动遍历  并创建Button
...
let btns=[
    <Button key="1" />,
    <Button key="2" />,
    <Button key="3" />,
    <Button key="4" />
];


return(
    <div>
        <p>Hello , my name is {this.props.name} , I come from {this.props.where}!</p>
        <Button {...btnProps} />
        <Button />
        {btns}
    </div>
)
...
