# 开发小程序

::: warning
同样需要注意的是，小程序开发依赖项比较多：基础库、基础组件、卡片容器 sdk、**卡片组件库（需要自行下载引入）**。

比如在小程序中，要使用上面开发的卡片 my-card，那么需要手动引入它打包后的 js，你才能在本地开发小程序时看到效果。

如果你不需要本地预览，可不引入。通过手机客户端扫码打开本地服务，也可以看到预览效果。
:::

1、 安装命令行工具
```
cnpm i xmmp-cli -g
```

2、初始化小程序项目
```
xmmp create mp <your-project-name>
```

3、 安装依赖，启动本地服务

```
cd <your-project-name>
cnpm i
npm run serve
```

4、文件结构

与开发 vue 项目的规范一致，没有区别。

```
-- /public
    -- index-local.html // 本地预览的入口 html
    -- index.html // 打包时用到的
-- /src
    -- /views
    -- App.vue
    -- main.js  // 入口文件
```

5、入口文件 `main.js`
```js
// 每次 page show 去检查依赖卡片的更新
window.xm.on('onPageShow', () => {
  xm.sourceCheck({
    // 使用的卡片组件名称，从管理后台上可以查到
    componentNames: ['yangm-55042071', 'yangm-40173741']
  })
})
```

6. 关于依赖卡片的写法

假设小程序用到了 `yangm-55042071` 卡片

```vue
<template>  
  <!--正确-->
  <xmcard-render name="yangm-55042071" />

  <!--错误-->
  <yangm-55042071 />
</template>
```

需使用 **卡片容器** 提供的 render 组件来渲染，为什么要这么做呢？

这样才能支持局部卡片的动态重载！