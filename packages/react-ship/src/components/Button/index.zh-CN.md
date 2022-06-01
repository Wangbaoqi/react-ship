---
title: Button 按钮
nav:
  title: 组件
  path: /components
group:
  title: 基础组件
  path: /zh-CN/components/basic
---

## Button按钮

按钮用于开始一个即时操作。

## 使用

```js
import { Button } from 'react-ship';
```

## 代码演示

### 按钮类型

按钮支持 `default` 、 `primary` 、 `info` 、 `warning` 、 `danger`，`text` 和 `link` 五种类型，默认为 `default` 。

<code src="./demo/type.tsx"></code>

### 按钮尺寸

按钮支持`large`，`normal`和`small`三种尺寸，默认为`normal`。

<code src="./demo/size.tsx"></code>

### 图标按钮

图标按钮通过`icon`属性来设置，这里`icon`支持[react-feature](https://github.com/feathericons/react-feather)里的所有图标

<code src="./demo/icon.tsx"></code>

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 类型，可选值为 `primary` `info` `warning` `danger` | _string_ | `default` |
| size | 尺寸，可选值为 `large` `small` `mini` | _string_ | `normal` |
| text | 按钮文字 | _string_ | - |
| color | 按钮颜色，支持传入 `linear-gradient` 渐变色 | _string_ | - |
| icon | 按钮 Icon | _ReactNode_ | - |
| iconPosition | 图标展示位置，可选值为 `right` | _string_ | `left` |
| tag | 按钮根节点的 HTML 标签 | _string_ | `Button` |
| nativeType | 原生 Button 标签的 type 属性 | _string_ | `Button` |
| block | 是否为块级元素 | _boolean_ | `false` |
| plain | 是否为朴素按钮 | _boolean_ | `false` |
| square | 是否为方形按钮 | _boolean_ | `false` |
| round | 是否为圆形按钮 | _boolean_ | `false` |
| shadow | 显示阴影，可选值为 `1` `2` `3` | _boolean\|number_ | `false` |
| disabled | 是否禁用按钮 | _boolean_ | `false` |
| hairline | 是否使用 0.5px 边框 | _boolean_ | `false` |
| loading | 是否显示为加载状态 | _boolean_ | `false` |
| loadingText | 加载状态提示文字 | _string_ | - |
| loadingType | [加载图标类型](/components/loading)，可选值为 `spinner` | _string_ | `circular` |
| loadingSize | 加载图标大小 | _string_ | `20px` |


