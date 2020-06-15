# 总览

我们将小程序开发分为 2 个环境，不同的环境下依赖和更新机制有所不同。

### 本地开发

本地开发时，脱离了客户端容器，所以一切都无效了。但同时我们想达和到开发 h5 时的效果直出，所以本地开发用的是 `public/index-local.html` 模版，模版中引用了在线的基础库资源，保证了你本地的版本始终是最新的。

其中，本地开发依赖的 3 个基础库（会有版本节奏的更新）

- 小程序 sdk  [xmmp.min.js](https://raw.githubusercontent.com/shinemofe/doc/master/.vuepress/public/sdk/xmmp.min.js) 
- 卡片基础组件库 [xmbase.min.js](https://raw.githubusercontent.com/shinemofe/doc/master/.vuepress/public/sdk/xmbase.min.js) [xmbase.css](https://raw.githubusercontent.com/shinemofe/doc/master/.vuepress/public/sdk/xmbase.css)
- 卡片容器 sdk [xmcard.min.js](https://raw.githubusercontent.com/shinemofe/doc/master/.vuepress/public/sdk/xmcard.min.js) [xmcard.css](https://raw.githubusercontent.com/shinemofe/doc/master/.vuepress/public/sdk/xmcard.css)

::: tip
开启 vpn 访问这些资源会更快，如果没有，建议将资源下载到本地 `/public` 目录
:::

### 打包提交到后台

基于客户端，我们有一套 sdk 的更新机制，例如：

- 通过 `shinemosdk://` 协议直接引用后台最新的资源包
- 在 `main.js` 中，通过 `xm.sourceCheck` 校验业务卡片的版本

所以打包后的代码是不会有任何依赖包注入的，只需要包含依赖的**业务卡片 ID** 

### 维护清单

我们整套开发流程所涉及的包、工具、模版如下：

|内容|模块|备注|
|:----:|:----:|:----:|
|图表|echarts||
|小程序 sdk|xmmp||
|基础组件库|xmbase|基础组件清单|
|卡片容器 sdk|xmcard|卡片操作|
|命令行工具|xmmp-cli|`npm i -g xmmp-cli`|
|卡片开发模版|card-template|`xmmp create card <name> <appId>`|
|小程序开发模版|mp-template|`xmmp create mp <name>`|
|卡片预览小程序|card-preview|后台点击预览，扫码打开的地址|
