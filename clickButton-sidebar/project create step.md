## 项目初建，配置步骤

###文件内容看最下方。



git init
touch .gitignore   并编写内容
npm init   创建node
cnpm install --save-Dev webpack      （因为要写ES6  所以要装babel  装babel则需先安装webpack

touch webpack.config.js

mkdir src   ----  touch  index.js

index.html

将package.json 中的test改为build    内容为    ./node_modules/.bin/webpack

npm install --save-dev babel-loader babel-core    安装babel
npm install --save-dev babel-preset-es2015        安装es6转换es5
npm i -D babel-preset-react                       安装 能编译"react"的工具
cnpm install --save react react-dom 		  安装react 和 react-dom


touch .babelrc


npm run build   测试一下是否配置成功




cnpm install style-loader css-loader --save-dev    关于CSS的



#### .gitignore
node_modules
build

#### index.html
<body>
    <script src="./build/bundle.js"></script>
</body>



#### webpack.config.js

var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  }
};


####   .babelrc
{
  "presets": ["es2015", "react"]
}
