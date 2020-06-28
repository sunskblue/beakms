## react 脚手架2.0
> 开启全新的旅程
> 上个版本，请去v1分支

## 使用方式
## 样式风格（基于antd 使用了less）
use less

#### 开发
```
npm start
```

## 部署

```
开发环境： npm run build:dev
测试环境： npm run build:test
预发布环境： npm run build:pre
生产环境： npm run build:prod
```

## 配置
```
module.exports = {
  name: "pitaya",  // 项目名字
  dingdingNoticeId: "xxx", // 钉钉发送通知,联系sdwang@kaikeba.com
  lintShow: false // 编译后关闭eslint 提示信息
};
```


## 特性
* 拿来即用
* 状态管理：rematch
* 灵活的用户配置 fig.config.js
* 编译完成后 钉钉通知
* 集成antd4
