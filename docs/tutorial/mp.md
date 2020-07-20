### 开发小程序

1. 打开后台登录

后台地址：http://10.253.101.72:21006/open-dev/#/login

账号/密码：开发者账号

点击登录

2. 进入小程序卡片后台

地址：http://10.253.101.72:21006/open-dev/#/app/mini-app

a. 选择顶部`应用开发`，点击左侧菜单栏`小程序`

b. 点击`创建小程序`

![Alt text](http://file.iming.work/1a059bc6d6ae671b8335.png)

c. 输入必填项，点击`确定`创建完成

![Alt text](http://file.iming.work/1c3b5268b62d1c954b5f.png)

d. 此时可以看到列表中已经新建了一个小程序

![Alt text](http://file.iming.work/36b3891bb0ceac993d7b.png)

::: tip 
接下来会需要node与npm环境，如果未安装，请自己搜索安装 
:::
::: tip 
为了安装速度，我们会使用cnpm，或者使用淘宝源 
:::

e. 安装脚手架（如果已安装，跳过此步）

推荐使用cnpm来安装依赖

```bash
// 安装cnpm
npm i cnpm -g --registry=https://registry.npm.taobao.org
// 安装脚手架
cnpm i xmmp-cli -g
```

f. 进入你的开发目录，初始化小程序项目
```bash
xmmp create mp testMP
```
![Alt text](http://file.iming.work/6f16b09107747c1dcfd7.png)

g. 进入创建好的小程序项目目录，安装依赖，并运行项目

::: tip
如果要在浏览器中查看效果，需要在`vue.config.js`文件中将注释部分取消注释，并重新运行项目；
但是并不推荐使用浏览器方式，推荐在圳数通客户端中查看与调试，详细见下方调试章节
:::

```bash
cd testMP
cnpm i
npm run serve
```

h. 运行成功之后，就可以使用在控制台输出的两个地址中的任意一个访问，即可看到效果

![Alt text](http://file.iming.work/f29a492d38e7dbf96440.png)

#### 集成卡片到小程序

接下来需要将已经开发完成的卡片集成到小程序中

1. 找到之前创建的卡，找到想要集成的卡片，复制红框中的组件标识到小程序项目中`src/card-deps.json`文件中

![Alt text](http://file.iming.work/461774c4daa12bb1baeb.png)

![Alt text](http://file.iming.work/b8776f57c3c9371a274f.png)

2. 在`src/views/Home.vue`文件中增加卡片

```js
<template>
  <div class="home">
    <p>Hello World!</p>
    <p>讯盟小程序开发</p>

    <!-- 渲染卡片 -->
    <xmcard-render v-for="id in deps" :key="id" :name="id" />
  </div>
</template>
```

`xmcard-render`是卡片容器，`name`中传的就是卡片标识

#### 调试小程序

::: tip 
手机与电脑需要连同一个网络，或者手机通过Charles代理到电脑访问 
:::

在上面启动小程序项目之后，可以连上安卓手机，打开圳数通app，点击进入任意一个**小程序应用**

::: tip 
手机连接电脑chrome可以参考此教程https://www.jianshu.com/p/81a193f35df8 
:::

此时在电脑chrome中可以看到打开的小程序webview

点击**inscept**，打开调试器**此处可能需要翻墙或者首次打开会比较慢**

在console中输入本机ip的那个访问地址，即可调试

![Alt text](http://file.iming.work/9e8c6a78663f1f76a896.png)


#### 打包小程序

运行npm命令，打包小程序，会在小程序项目目录下生成一个`dist.zip`的zip包

```bash
npm run build
```

![Alt text](http://file.iming.work/cc2377f774fe625c0ea1.png)


#### 上传小程序

本地打包完小程序之后，需要上传到小程序后台

a. 回到小程序后台，找到之前创建的小程序

![Alt text](http://file.iming.work/36b3891bb0ceac993d7b.png)

b. 点击进入小程序设置页面

c. 点击**上传版本**，上传小程序包

![Alt text](http://file.iming.work/a7bc33d64f663f841342.png)

d. 在弹出框中输入必填项后，点击**确定**

![Alt text](http://file.iming.work/44c088dce3457ba76432.png)

e. 此时可以点击**体验版**，用圳数通App扫描二维码，预览小程序

f. 点击**提交审核**，进入审核流程，当管理员通过审核后，小程序就正式发布到了线上

![Alt text](http://file.iming.work/294765dfa060c2aa28b7.png)

