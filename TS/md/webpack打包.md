### webpack打包ts代码的步骤

### 初始化项目
npm init -y

### 安装webpack依赖
npm i -D webpack webpack-cli typescript ts-loader

### 创建webpack.config.js文件
在里面写配置文件

### 编写tsconfig.json

### 在package.json中的script中加入"build":"webpack"


### npm i -D html-webpack-plugin  webpack自动生成html文件



### npm i -D webpack-dev-server@3.11.2  内置的服务器  根据项目改变自动刷新  
### 下载时要注意版本问题
### 装完之后需要在package.json中的script中加入"start":"webpack server" 来进行启动项目


###  npm i -D clean-webpack-plugin  编译前将出口文件清空  再进行打包  