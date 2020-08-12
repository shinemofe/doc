### 开发普通小程序

1. 打开后台登录

后台地址：http://ip:port/open-dev/#/login

账号/密码：开发者账号

点击登录

2. 进入小程序卡片后台

地址：http://ip:port/open-dev/#/app/mini-app

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

e. 创建小程序项目

使用您平时创建项目的方式新建项目即可

f. 引入小程序sdk
在您的html页面中引入小程序sdk
```html
<head>
  <script src="shinemosdk://20000/index.js"></script>
</head>
```

g. 开始开发

正常开发您的小程序功能，可以使用任意的框架（Vue, React, jquery）等，并启一个本地的服务


#### 调试小程序

::: tip 
手机与电脑需要连同一个网络，或者手机通过Charles代理到电脑访问 
:::

##### 安装vscode插件，生成二维码调试

在vscode的扩展中搜索`xmmp` 安装此插件，根据插件文档生成二维码

##### 在小屏端客户端扫描二维码

使用本机在局域网中的ip打开，不要使用127.0.0.1或者localhost打开

此时你即可直接在本地修改代码，并在小屏端客户端中调试小程序，调用小程序的sdk


#### 打包小程序

正常的项目打包，比如vue项目的`npm run build`

需要注意的尽量不要使用外链，静态资源都通过相对路径的方式引入

**关于项目根目录**

项目打完包之后的目录，例如vue项目的dist目录

**关于首页**

默认小程序的首页是`index.html`，如果需要修改首页，需要在项目根目录内，新建`plugin.json`文件，增加如下配置，并将${appId}与${custonfilename}替换成你实际的appId与首页文件名

```json
{
    "indexURL":"h5://${appId}/${custonfilename}.html",
    "appId": "${appId}"
}

// 例子
{
    "indexURL":"h5://123/home.html",
    "appId": "123"
}
```

**最后进入项目根目录，如dist文件夹，全选所有的文件，并打包成zip文件**


#### 上传小程序

本地打包完小程序之后，需要上传到小程序后台

a. 回到小程序后台，找到之前创建的小程序

![Alt text](http://file.iming.work/36b3891bb0ceac993d7b.png)

b. 点击进入小程序设置页面

c. 点击**上传版本**，上传小程序包

![Alt text](http://file.iming.work/a7bc33d64f663f841342.png)

d. 在弹出框中输入必填项后，点击**确定**

![Alt text](http://file.iming.work/44c088dce3457ba76432.png)

e. 此时可以点击**体验版**，用小屏端App扫描二维码，预览小程序

f. 点击**提交审核**，进入审核流程，当管理员通过审核后，小程序就正式发布到了线上

![Alt text](http://file.iming.work/294765dfa060c2aa28b7.png)

