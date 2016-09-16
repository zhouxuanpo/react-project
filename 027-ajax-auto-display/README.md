## axios实现刚加载页面时，就请求并显示头像和信息。


## 页面加载时的动画

引入动画组件，在return里写上if判断wait值 。  一旦加载完毕，在componentDidMount里修改wait值为false
在setState  和state里 设置好初始的wait值，
