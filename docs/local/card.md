# 开发业务卡片

::: warning
卡本地片开发依赖卡片ID，需要现在后台创建卡片应用后再在本地初始化模版！！！
创建卡片应用时，需要填写组件标识，即你的卡片本地的项目名称！！！
:::

拿到卡片ID后，继续接下来流程：

1、 安装命令行工具
```
cnpm i xmmp-cli -g
```

2、 初始化卡片项目

```
# <your-project-name> 最好和组件标识一一对应，便于后期维护查找
# <your-card-appId> 就是你的卡片 ID
xmmp create card <your-project-name> <your-card-appId>
```

3、 安装依赖，启动本地服务

```
cd <your-project-name>
cnpm i
npm run serve
```

4、文件结构

```
-- /public
    -- /sdk     // 本地开发预览依赖的包
    -- index.html
    -- config.json  
-- /src
    -- main.js  // 本地预览的入口文件
    -- card.vue  // 卡片组件
    -- index.js // 卡片入口文件
```

5、脚手架提供的模版文件

```html
<html>
    <head>
        <title>小程序卡片开发示例</title>
        <!-- 小程序 sdk -->
        <script src="./sdk/xmmp.min.js"></script>
        <!--本地开发预览需要-->
        <script src="sdk/echarts.min.js"></script>
        <link rel="stylesheet" href="./sdk/xmbase.css">
        <link rel="stylesheet" href="./sdk/xmcard.css">
        <script src="sdk/xmbase.umd.min.js"></script>
        <script src="sdk/xmcard.umd.min.js"></script>
    </head>
    <body>
        <div id="app"></div>
    </body>
</html>
```

6、例如开发一个卡片 `my-card`，假设卡片ID是 4092361

```
xmmp create card my-card 4092361
```

本地目录新增了文件夹 `my-card`，在 `card.vue` 中编写如下代码

> xmcard-panel 组件是卡片容器 sdk 内置的
> xmbase-my-test 是上面创建的基础组件

```html
<template>
    <xmcard-panel>
        <p>饼图示例</p>
        <xmbase-my-test :data="data" />
    </xmcard-panel>
</template>

<script>
export default {
    // vue component options
    name: 'my-card',
    create () {
        // 需要调用接口等行为，使用 xmmp.sdk 提供的能力
        xm.fetch(url, data).then(data => {})
        xm.showToast({ title: '', message: '' })
    }
}
</script>
```