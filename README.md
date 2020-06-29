## 一、项目描述
- [**Vue版本请点击这里(oﾟvﾟ)ノ！！！**](https://gitee.com/MTrun/big-screen-vue-datav)

- 一个基于 react、datav、Echart 框架的 " **数据大屏项目** "，通过react组件实现数据动态刷新渲染，内部图表可实现自由替换。部分图表使用 DataV 自带组件，可进行更改，详情请点击下方 DataV 文档。
- 项目需要全屏展示（按 F11）。
- 项目部分区域使用了全局注册方式，增加了打包体积，在实际运用中请使用**按需引入**。
- 拉取项目之后，建议按照自己的功能区域重命名文件，现以简单的位置进行区分。
- 项目环境：react^16.13、webpack-4.0、npm-6.13、node-v12.16。
- 请拉取 master 分支的代码，其余是开发分支。

友情链接：

1.  [DataV 官方文档（建议使用之前先浏览）](http://datav-react.jiaminghi.com/guide/)
2.  [echarts 实例](https://www.echartsjs.com/examples/zh/index.html)，[echarts 官方文档](https://www.echartsjs.com/zh/option.html#title)
3.  [Vue 官方文档](https://react.docschina.org/docs/getting-started.html)

## 二、主要文件介绍

| 文件                | 作用/功能                                           |
| ------------------- | --------------------------------------------------- |
| mian.js             | 主目录文件，全局引入了引入 vue-awesome              |
| utils               | 工具函数与 mixins 函数等                            |
| views/ index.vue    | 项目主结构                                          |
| views/其余文件      | 界面各个区域组件（按照位置来命名）ajax 接口请求位置 |
| assets              | 静态资源目录，放置 logo 与背景图片                  |
| assets / style.scss | 通用 CSS 文件，全局项目快捷样式调节                 |
| assets / index.scss | Index 界面的 CSS 文件                               |
| components/echart   | 所有 echart 图表（按照位置来命名）                  |
| common/flexible.js  | flexible 插件代码（适配屏幕尺寸，定制化修改）       |