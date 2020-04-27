# 应急网V2.3版本

> 当前版本: v1.0

## 启动项目
运行 yarn(安装依赖) <br />
或者 npm(cnpm) install  <br />
yarn和npm不能混用  <br />
yarn start 启动项目


## git说明
master 是主分支，用来自动化部署的

## tabs分类说明
@params  { tabsIndex  } 
  0:推荐要闻
  1:国内要闻
  2:国际要闻
  3:市场分析
  4:方案
  5:财经
  6:政策
  7:技术
  8:访谈
  9:编辑视点
  10:产品

## 说明
``` 本地预览
# 开发预览端口号
localhost:5000/#/

``` 查看打包分析
# 先运行yarn start 默认会打开打包分析
http://127.0.0.1:8888/

``` 打包
# sit环境
yarn build:sit

# uat环境
yarn build:uat

# 正式环境
yarn build:pro

​``` 目录说明
├── components           公共组件
├── fetch               axios
  └── confing.js        axios拦截器的封装    
  └── index.js          封装的axios函数，返回Promise
├── imgs               图片，请不要直接将图片丢再次文件夹，在此文件夹新建文件夹放入图片
  └── utils             公共图片
├── pages               项目的组件入口
└── sass              sass文件
├── service            用来写请求函数
  └── api.js           get post请求都在这里 
├── App.js            项目主入口，在这里设置路由对应的组件
├── utils             公共的js文件
├── hoc               高阶组件
  └── NeedEmpty.jsx     列表页没有数据时，显示Empty组件
  └── ModulesWrap.jsx   首页的模块最外层 
  └── Connect.js        store连接到组件props的二次封装
├── store               
  └── models            
  └── index.js  
├── router               
  └── config.js
  └── RouterViews.jsx

```

``` store文件夹说明
/**
*  本项目使用了rematch，redux的一个二次封装插件
*  models文件夹下面的文件都将自动引入到整个store仓库，请严格按照约定
*  models 文件的约定示例
*  demo.js  => 将创建一个名为demo的store，文件名 === store名字 ，必须是.js文件
*  请使用hoc的Connect.js的方法来进行组件和store的连接，具体请看Connect.js的说明
**/

``` router 文件夹说明
/***
*  在config.js的routers书写路由数组对象
*  本项目使用了Suspense实现路由懒加载，请必须使用React.lazy方法引入组件
*  RouterViews.jsx是一个生成<Route />组件的封装方法
*  组件需要路由，引入RouterViews组件即可，具体请看文件
**/

