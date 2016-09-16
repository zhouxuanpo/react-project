## react组件生命周期

它分为  初始化，更新，销毁。   三大特性。

这些里面都有两个参数。

1. 初始化

    执行顺序分别为：
    constructor，componentWillMount，componentDidMount

    constructor为创建class时默认有的，自动执行。

2. 更新

    属性被修改之前 componentWillReceiveProps()

    判断是否需要更新 shouldComponentUpdate()

    更新之前 componentWillUpdate()

    渲染 render

    更新之后 componentDidUpdate

3. 销毁

    销毁前 componentWillUnmount()
