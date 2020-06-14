# 卡片容器

卡片容器提供一套默认的方案：UI 和 js API，可以用来支撑完整的业务流程。如果想要自定义 UI ，可直接复用 js 开放的能力。

### 卡片容器内置组件

内置操作以组件形式（提供了文案、图标、大小）

|组件名|props|events|
|:----:|:----:|:----:|
|xmcard-sub-unsub||
|xmcard-red||
|xmcard-urge||
|xmcard-sign||
|xmcard-call||
|xmcard-share||
|xmcard-warn||
|xmcard-data||
|xmcard-monitor||

这是零碎的，当然我们也提供聚合式的 panel

|组件名|props|events|
|:----:|:----:|:----:|
|xmcard-panel||

### 卡片容器 js API

如果你需要深度定制， UI 层可以自己写，我们提供了方法调用

|模块|方法名|参数|
|:----:|:----:|:----:|
|重新加载|[卡片实例].reload()|用来控制当前卡片重新加载
|订阅|[卡片实例].subscribe()|
|取消订阅|[卡片实例].unsubscribe()|
|发起红灯|[卡片实例].createRedlight()|
|发起督办|[卡片实例].createUrge()|
|圈阅|[卡片实例].createSign()|
|一键联系|[卡片实例].call()|
|分享卡片|[卡片实例].share()|
|发起预警|[卡片实例].createWarning()|
|查看数据来源|[卡片实例].toDataFrom()|
|查看视频监控|[卡片实例].openMonitor()|

### js API入参说明

客户端需要支持的方法

```js
const { name, appId, color, appIcon } = await window.xm.native('getappinfo')
```

1、订阅

```js
// 需要落库的字段
const item = {
    // 卡片 id
    id,
    // 当前卡片的组件名称，用于订阅后再订阅列表里展示该卡片
    componentName,
    // 当前小程序的 appId
    appId,
    // 当前小程序的 顶部颜色
    color,
    // 当前小程序打开的二级路由页面路径
    routePath,
    // 当前卡片的类型
    type,
    // 卡片标题
    label,
    // 卡片的背景色，默认白色 
    bgReal,
    // 卡片标题前的色块颜色，默认 #3b8ff6
    bg,
    // 卡片使用了哪些基础组件，没有则不传
    baseComponentNames: [],
    // 基础组件的 dataArr
    dataArr: []
}

subscribe(item)
```

2、取消订阅

```js
// 只需要传卡片id
unsubscribe(cardId)
```
3、发起红灯
```js
const item = {
    // 卡片类型
    type,
    id
}
// 红灯应用的 appId 70640883
// relativeUrl index.html#/page/red-light/page-1588732321267
createRedlight(item, redlightAppId, relativeUrl)
```

4、发起督办

> 还有哪些参数？

```js
const item = {
    // 卡片类型
    type
}
// 督办应用的 appId 70640883
// relativeUrl index.html#/page/red-light/page-1588732321267
createUrge(item, urgeAppId, relativeUrl)
```

5、圈阅

```js
const item = {
    id
}

createSign(item)
```

6、一键电联

```
call(telNumber)
```

7、分享

```js
const item = {
    id
}
share(item)
```

8、发起预警

```js
const item = {
    id,
    type
}
// warningAppId 预警应用的appId 38842751
// relativeUrl index.html#/page/ioc-warning/page-1590635420653
createWarning(item, warningAppId, relativeUrl)
```

9、查看数据来源

```js
const item = {
    id
}
// 数据来源应用的 appId
toDataFrom(item, appId)
```

10、查看视频监控

```js
const item = {
    id
}
// 视频监控应用的 appId
openMonitor(item, appId)
```