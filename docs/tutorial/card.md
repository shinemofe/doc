### 小程序开发教程

#### 开发小程序卡片

1. 打开后台登录

后台地址：http://baas.uban360.net:21006/admin/#/login

账号/密码：`zhuwei/1234567`

点击登录

2. 进入小程序卡片后台

地址：http://baas.uban360.net:21006/micro/?#/micro-app/microapp-list

a. 选择顶部`卡片管理`

b. 点击`新建卡片`

![Alt text](http://file.iming.work/4c38737468694f21af99.png)

c. 点击`确定`创建完成

![Alt text](http://file.iming.work/ceb4bd88c983f204ae09.png)

d. 此时在列表中即可看到一个`组件名称`，用来创建单个卡片使用

![Alt text](http://file.iming.work/4d021cde277641ee6c33.png)

::: tip 
接下来会需要node与npm环境，如果未安装，请自己搜索安装 

为了安装速度，我们会使用cnpm，或者使用淘宝源 
:::

f. 安装脚手架
```bash
npm i xmmp-cli -g --registry=https://registry.npm.taobao.org
```

e. 初始化卡片项目，卡片项目是一类卡片的集合，不用每个卡片单独创建一个项目
```
xmmp create card test-collection
```

e. 接着，复制`组件名称`以图中的`testCard-48547321`为例，初始化单个卡片项目

```
xmmp card testCard-48547321
```

![Alt text](http://file.iming.work/5b15f279f36680e69a1c.png)

g. 进入创建好的卡片目录，安装依赖
```bash
cd test-collection
cnpm i
```

i. 修改入口为你新建的卡片，并启动项目

```js
// 当前预览的卡片组件名
const componentName = 'testCard-48547321'
require(`./card-collection/${componentName}`)
```
启动项目

```
npm ru serve
```

i. 运行成功之后，就可以使用在控制台输出的两个地址中的任意一个访问，即可在浏览器中看到效果
::: warning 
点击3个点之后弹出的一些操作，由于调用了客户端的方法，在浏览器上是无法执行的，所以点击无效是正常的 
:::

![Alt text](http://file.iming.work/f29a492d38e7dbf96440.png)


![Alt text](http://file.iming.work/6dba188bf81a66452f79.png)


#### 调试小程序卡片

::: tip 
手机与电脑需要连同一个网络，或者手机通过Charles代理到电脑访问 
:::


在上面启动卡片项目之后，可以连上安卓手机，打开圳数通app，点击进入任意一个**小程序应用**

::: tip 
手机连接电脑chrome可以参考此教程https://www.jianshu.com/p/81a193f35df8 
:::

此时在电脑chrome中可以看到打开的小程序webview

点击inscept，打开调试器**（此处可能需要翻墙或者首次打开会比较慢）**

在console中输入本机ip的那个访问地址，即可调试

![Alt text](http://file.iming.work/9e8c6a78663f1f76a896.png)


#### 打包卡片

a. 打包整个项目集合

```
npm run build
```

b. 打包单个卡片，以上面创建的卡片为例

```
npm run build testCard-48547321
```
