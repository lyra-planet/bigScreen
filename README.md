## 一、项目描述

- [**Vue 版本请点击这里查看，也很不错的(o ﾟ v ﾟ)ノ！！！**](https://gitee.com/MTrun/big-screen-vue-datav)

- 一个基于 React、Dva、DataV、ECharts 框架的 " **数据大屏项目** "，通过 react 组件实现数据动态刷新渲染，内部图表可实现自由替换。部分图表使用 DataV 自带组件，可进行更改，详情请点击下方 DataV 文档。
- 项目需要全屏展示（按 F11）。
- 项目环境：react^16.2、webpack-4.0、npm-6.13、node-v12.16。
- 请拉取 master 分支的代码，其余是开发分支。

友情链接：

1.  [DataV 官方文档（建议使用之前先浏览）](http://datav-react.jiaminghi.com/guide/)
2.  [echarts 实例](https://www.echartsjs.com/examples/zh/index.html)，[echarts 官方文档](https://www.echartsjs.com/zh/option.html#title)
3.  [React 官方文档](https://react.docschina.org/docs/introducing-jsx.html)
4.  [Dva 官方文档](https://dvajs.com/guide/)

现阶段完成的静态数据内容图（正在开发moke数据）：
![界面展示](https://images.gitee.com/uploads/images/2020/0927/205317_db15e619_4964818.gif "界面展示.gif")

### 解决 Dva 版本 history 报错的问题

找到 node_modules 中的 dva 包，修改 lib/index.js。

22 行：

```js
var _createHashHistory = _interopRequireDefault(
  require('history').createHashHistory
);
```
