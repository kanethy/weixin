# 关于学子书院评论的分页

分页的的使用在追书神器的API中通过`start`和`limit`参数实现的

其中:

`start`指从第几条记录开始返回，其从0开始编号

`limit`指返回的数量

此时声明`data`中的变量`page`，代表当前页码

只有到达页面底部时，`page`变量才累加，然后计算出`start`的参数值，并且以该值为URL的构成部分，向服务器发送异步的请求

1.不能无限发送请求

2.初始情况下执行的异步请求与向下滚动时执行的异步请求基本是相同的，所以最好封装成自定义函数

# 2.WebSocket

## 2.1 概述

`WebSocket `是一种网络通信协议，其最大的特点是：实现实时的双向通讯，即服务器可以主动推送消息到客户端，客户端也可以向服务器发送请求。

`WebSocket`协议产生2008年，2011年成为国际标准。

`Socket.io`是一个`WebSocket`库，其提供实时的、双向的数据通讯，并且抹平了跨平台的技术细节。

https://socket.io/

`socket.io`包括：

- 浏览器
- `Node.js`服务器

![](assets/note/bidirectional-communication.png)

## 2.2 `WebSocket`优点

- 没有同源策略的限制，客户端可以与任何服务器之间进行通讯
- 数据格式轻量，通讯高效
- `WebSocket`协议的前缀是`ws`(如果加密的话，则为`wss`)

### 2.2 安装

Node.js服务器

```shell

npm install --save socket.io

```

客户端

直接在`HTML`文件中通过`<script>`标签引入`socket.io`的客户端脚本文件即可

```html

<script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.3.0/socket.io.js">
</script>


```

> 只要调用的`socket.io.js`脚本文件，系统将自动暴露名称为`io`的函数

## 客户端API

`emit()`方法

`emit()`方法用于实现客户端向服务器广播事件，其语法结构是：

```javascript

client.emit("事件名称"[,数据])

```

`on()`方法用于实现根据指定的事件来注册一个函数，其语法结构是：

```javascript

client.on("事件名称",回调函数)

```

## 服务器API

 · `on()`方法

`on()`方法用于实现根据指定的事件来注册一个函数，其语法结构是：

```javascript

server.on("事件名称",回调函数)

```

`emit()`方法

`emit()`方法用于实现服务器向客户端广播事件，其语法结构是：

```javascript

server.emit("事件名称"[,数据])

```

