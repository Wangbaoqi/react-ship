---
title: Button
nav:
  title: Components
  path: /components
group:
  title: basic components
  path: /en-US/components/basic
---

## Button

Buttons are used to start an instant operation.

## usage

```js
import { Button } from 'react-mobile-ship';
```

## Code demonstration

### button type

Button support `default` 、 `primary` 、 `info` 、 `warning` 、 `danger`，`text` and `link` Etc，default option is `default` 。

<code src="./demo/type.tsx"></code>

### disable button

The button can disable its click state through the `disable` property.

<code src="./demo/disable.tsx"></code>

### size button

button support `large`，`normal`and`small` three size，default is `normal`。

<code src="./demo/size.tsx"></code>

### icon button

icon button can set `icon` property ，`icon` support[react-feature](https://github.com/feathericons/react-feather) all icons.

<code src="./demo/icon.tsx"></code>

### shape button

shape button can set `shape` property，default has circle，if set `shape` property，then has't circle。

<code src="./demo/shape.tsx"></code>

<API></API>
