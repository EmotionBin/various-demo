# 前端拉流

利用插件 [flv.js](https://github.com/bilibili/flv.js) 进行拉流

## 获取 flv 直播流

首先要获取一个 flv 的直播流地址，可以去斗鱼获取，打开[斗鱼直播平台](https://www.douyu.com/)，随便点一个直播间，然后 F12 打开控制台

在 Network 面板中输入直播间房间号进行请求过滤，找到以下请求，需要 `rtmp_url` 与 `rtmp_live` 这两个字段

[![j4WYp8.png](https://s1.ax1x.com/2022/07/16/j4WYp8.png)](https://imgtu.com/i/j4WYp8)

拿到这两个字段后进行拼接即可获得真实直播流的地址，即 `${rtmp_url}/${rtmp_live}`，这就是真实的直播流地址

## 利用 flv.js 进行拉流

把拉流地址改成 `${rtmp_url}/${rtmp_live}` 进行拉流即可，具体可看 `index.html` 
