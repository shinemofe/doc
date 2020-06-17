### 小程序开发教程

#### 开发小程序卡片

1. 打开后台登录

后台地址：http://baas.uban360.net:21006/admin/#/login
账号/密码：`zhuwei/1234567`

2. 进入小程序卡片后台

地址：http://baas.uban360.net:21006/micro/?#/micro-app/microapp-list

a. 选择顶部`卡片管理`
b. 点击`新建卡片`
![Alt text](http://file.iming.work/4c38737468694f21af99.png)

c. 点击`确定`创建完成
![Alt text](http://file.iming.work/ceb4bd88c983f204ae09.png)

d. 此时在列表中即可看到一个`卡片id`，用来下一步创建项目使用
![Alt text](http://file.iming.work/4d021cde277641ee6c33.png)

e. 复制`卡片id`以图中的48547321为例，初始化卡片项目
::: warning 
接下来会需要node与npm环境，如果未安装，请自己搜索安装 
:::
::: warning 
为了安装速度，我们会使用cnpm，或者使用淘宝源 
:::

f. 安装脚手架
```bash
npm i xmmp-cli -g --registry=https://registry.npm.taobao.org
```

g. 进入你的开发目录，初始化卡片，**这边会用到之前复制的卡片id**
```bash
xmmp create card testCard 48547321
```
![Alt text](http://file.iming.work/5b15f279f36680e69a1c.png)

h. 进入创建好的卡片目录，安装依赖，并运行项目
```bash
cd testCard
cnpm i
npm run serve
```

i. 运行成功之后，就可以使用在控制台输出的两个地址中的任意一个访问，即可在浏览器中看到效果
::: warning 
点击3个点之后弹出的一些操作，由于调用了客户端的方法，在浏览器上是无法执行的，所以点击无效是正常的 
:::

![Alt text](http://file.iming.work/f29a492d38e7dbf96440.png)


![Alt text](http://file.iming.work/6dba188bf81a66452f79.png)


#### 调试小程序卡片

::: warning 
手机与电脑需要连同一个网络，或者手机通过Charles代理到电脑访问 
:::


在上面启动卡片项目之后，可以连上安卓手机，打开圳数通app，点击进入任意一个**小程序应用**

::: warning 
手机连接电脑chrome可以参考此教程https://www.jianshu.com/p/81a193f35df8 
:::

此时在电脑chrome中可以看到打开的小程序webview，点击inscept，打开调试器**（此处可能需要翻墙或者首次打开会比较慢）**，在console中输入本机ip的那个访问地址，即可调试

![Alt text](http://file.iming.work/9e8c6a78663f1f76a896.png)



