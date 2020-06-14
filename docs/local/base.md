# 开发基础组件

> 内网访问，暂未开放！

项目地址： [https://git.shinemo.com/projects/IOC/repos/xm-base/browse](https://git.shinemo.com/projects/IOC/repos/xm-base/browse)

基础组件存在的形态：基础组件最终会被打包成 umd 的组件包 `xmbase.umd.js` ，在 Vue 全局注册了很多基础组件名称 `xmbase-color` `xmbase-pie` 等等，这样在其他地方就可以直接使用，而不需要引入。

基础组件的特性：

- 与业务逻辑无关，是纯粹的、功能单一的小组件。
- 目前只能依赖 `echarts` 或不依赖其他库。
- 可以被卡片引用或小程序引用。