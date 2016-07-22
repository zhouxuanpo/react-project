###       给组件添加css样式，使用js的方式

在index.js  中添加

getStyles(){
    return {
        root:{
    	    backgroundColor:'#0f9',
    	    height:'300px',
    	    padding:'50px'
        }
    }
}


然后在div后面 加上 style = {styles.root}        属于调用 

然后跑起来。







###    单独组件内的样式：

参考Button.js     书写方式和  index.js大同小异   原理一样。

但这是组件化的程序。所以要每个组件的样式单独写在他的样式文件里。（xxxx.js)

