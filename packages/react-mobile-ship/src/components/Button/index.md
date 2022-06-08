---
title: Button 按钮
nav:
  title: 组件
  path: /components
group:
  title: 基础组件
  path: /components/basic
---

## Button按钮

按钮用于开始一个即时操作。

## 使用

```js
import { Button } from 'react-mobile-ship';
```

## 代码演示

### 按钮类型

按钮支持 `default` 、 `primary` 、 `info` 、 `warning` 、 `danger`，`text` 和 `link` 等类型，默认为 `default` 。

<code src="./demo/type.tsx"></code>

### 禁用按钮

按钮可以通过`disable`属性来禁用其点击状态。

<code src="./demo/disable.tsx"></code>

### 按钮尺寸

按钮支持`large`，`normal`和`small`三种尺寸，默认为`normal`。

<code src="./demo/size.tsx"></code>

### 图标按钮

图标按钮通过`icon`属性来设置，这里`icon`支持[react-feature](https://github.com/feathericons/react-feather)里的所有图标

<code src="./demo/icon.tsx"></code>

### 形状按钮

图标按钮通过`shape`属性来设置，默认是有圆角，如果设置了`shape`，则无圆角。

<code src="./demo/shape.tsx"></code>

<API></API>