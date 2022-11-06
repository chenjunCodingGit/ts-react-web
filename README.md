# HOOKS-TS-TEST

这是一个使用 React Hooks 开发的前端项目，  
使用了 TypeScript，  
添加了 Jest、Enzyme 测试

## 提前准备

1. [nodeJS](https://nodejs.org/zh-cn/) 8.0 以上版本

## 启动应用

1. `npm run start-server`
2. `npm start`
3. 浏览器就会自动打开：`http://localhost:9000`

## 类组件和函数组件
类（class）：数据和逻辑的封装。 也就是说，组件的状态和操作方法是封装在一起的。如果选择了类的写法，就应该把相关的数据和操作，都写在同一个 class 里面。

函数：一般来说，只应该做一件事，就是返回一个值。 如果你有多个操作，每个操作应该写成一个单独的函数。而且，数据的状态应该与操作方法分离。根据这种理念，React 的函数组件只应该做一件事情：返回组件的 HTML 代码，而没有其他的功能。

## useState
1. 返回一对值，当前状态和一个让你更新它的函数
```
const [count , setCount] = useState(0);
```
2. 如果你的更新函数返回值与当前 state 完全相同，则随后的重渲染会被完全跳过
## useEffect

1. 默认情况下，useEffect(callback,[])中的函数会在组件渲染完成后调用，且每次渲染完都会调用
2. 为了避免重复性的调用，可以在第二个参数（数组）中指定Effect的依赖项；只有依赖项更新，Effect才会被触发。通常将Effect中所有变量设置为依赖项
3. 如果依赖项目是[]空数组，effect没有任何依赖项，只会初始化执行一次Effect；类比creted()
4. 清除函数
```
useEffect(() => {

  // 清理函数，Effect执行时，先执行return函数，再执行Effect
  return () => {

  }
}, [])
```
5. 一个副作用依赖多个局部变量，多个变量应该写入依赖项数组
6. 用途
```
a. 组件初始化获取远程数据（只加载一次）
b. 事件订阅或监听(销毁事件或者定时器)
c. 改变DOM

import React, { useRef, useEffect } from 'react';

function HooksComponent(){ 
const divRef = useRef(null);

useEffect(() => {
    console.log(divRef.current);
}, [])

return <div ref={divRef}>hello world</div>
}

d. 输出日志
```
