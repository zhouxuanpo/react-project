### Compile ES6 to ES5


npm init  创建为node.js仓库    会自动生成  package.json

手动创建 webpack.config.js       内容复制粘贴。

npm i -D webpack    安装webpack  （创建node_modules文件夹)


布置好src    以及其中的index.js   和外部的  index.html


./node_modules/.bin/webpack     在命令行里 是用来跑的           在package.json里  修改test为build    后面的改成  ./node_modules/.bin/webpack               再用  npm run build    来跑






