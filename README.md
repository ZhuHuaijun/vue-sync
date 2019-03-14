在跟后端交互的时候，通常需要禁止页面交互，使页面展示为loading状态。通常的做法是在异步请求开始的时候，设置页面状态为loading，然后展示一个蒙层覆盖页面，然后在请求结束的时候再将页面设置为ready状态。这里提供一个vue插件，可以在页面异步行为的开始时显示加载状态，异步行为结束的时候关闭加载状态。

### 安装

使用npm安装

npm install vue-sync-state --save

### 使用

在应用初始化时，安装插件。

```
import Vue from 'vue'
import sync from 'vue-sync-state'

Vue.use(sync)
...
```

使用 `$sync` 方法封装异步调用的方法。

注意：这里要求内部的方法需要返回一个Promise。
```
...
<div @click="$sync(handleClick)">
  默认样式
</div>

...

methods: {
  handleClick () {

    // 被封装的方法返回一个Promise
    return new Promise(resolve => {
      setTimeout(() => {
        resolve()
      }, 3000)
    })
  }
}

...

```

这里也提供第二个参数来配置加载时展示的组件和背景色。

自定义组件：
```
...
<div @click="$sync(handleClick, { spinner })">
  自定义组件
</div>

...

import { Circle4 } from 'vue-loading-spinner'

...

data() {
  return {
    spinner: Circle4
  }
},

methods: {
  handleClick () {

    // 被封装的方法返回一个Promise
    return new Promise(resolve => {
      setTimeout(() => {
        resolve()
      }, 3000)
    })
  }
}

...
```

自定义背景色：

```
<div @click="$sync(handleClick, { backgroundColor: 'rgba(0,0,0,0.1)'})">
  自定义背景色
</div>

```

也可以同时自定义组件和背景色。
