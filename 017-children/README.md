##  children  and   bootstrap

`this.props `对象的属性与组件的属性一一对应，但是有一个例外，就是 `this.props.children` 属性。它表示组件的所有子节点


`this.props.children`会返回3个值，如果没有子节点则undefined，有一个就是 object，多个就是array，（里面包含多个object子项）


`React.Children.map`用来遍历所有子节点。



加载图片需要装2个包:

`npm install --save-dev url-loader`

`npm install --save-dev file-loader`


然后在`webpack.config.dev.js`中输入
```{
  test: /\.(png|jpe?g)$/,
  loader: 'url?limit=8192'
}```

<img>里不能写路径， 只能通过变量方式存储路径  比如 `import Me from '../images/1.jpg';`
然后在  <img src={Me} />  写上变量。

#### 注意：
在webpack文件里  如果loader 后面是数组之类的    loader要加's' ，也就是loaders

如果是字符串，就向上一段代码一样，则为loader


### Bootstrap

``
