
# 原生 JS 撸一个轮播图（支持拖拽切屏）

>## FoxSlider.js 称不上库的库 [在线体验]()

> last update time: 2019-08-15
> - 修复轮播图边界时滚动不流畅
> - 新增 **2个**轮播图样式
> - IE9的一些兼容性修复
## 1、简述

 用惯了各种各样的组件，并没有真正意义上的封装一个可以拖拽切屏的轮播图，经过一番编写，发现写这样一个轮播图要想写的好，还真的是挺有难度，不同设备的不同事件完备性？事件触发时机的把控？如何更好的去封装？自适应窗口后的事件重置？等等...，看看swiper这个库的源码，就知道小事情也可以不简单。  
 现在写的这个基本的需求是可以满足的，可以通过拖拽切换也可以点击切换。 
 >（想你来一起完（wan）善(shua)！！Fork & Star ^_^一下你就会很美
 
 >**原生撸码一时爽，一直原生一直爽**

### 1.1、特性

- 面向手机、平板，PC等终端。

### 1.2、缺点
- 功能亟需扩充
- 用户配置功能有待扩充
- 轮播图样式不够丰富
- 性能待测

## 2、调用实例
>html 结构代码
```html
<!-- 引入js，css文件 -->
<link href="css/index.css">
<script src="js/base.js"></script>
<!-- 主要dom结构 -->
<h2>样式一：</h2>
<div class="slider-container slider-identifier">
  <div class="slide-bar">
    <div class="slider "><img src="assets/slider1.jpg"></div>
    <div class="slider"><img src="assets/slider2.jpg"></div>
    <div class="slider"><img src="assets/slider3.jpg"></div>
    <div class="slider"><img src="assets/slider2.jpg"></div>
    <div class="slider"><img src="assets/slider3.jpg"></div>
  </div>
  <div class="slider-pin">
    <span class="pin on"></span>
    <span class="pin"></span>
    <span class="pin"></span>
    <span class="pin"></span>
    <span class="pin"></span>
  </div>
</div>
```
>js 代码
```js
//样式1
var tp = new TouchPlugin({
  sliderContainer:'.slider-identifier.slider-container',
  slider:'.slider-identifier .slider',
  slidePin:'.slider-identifier .slider-pin',
  sliderBar:'.slider-identifier .slide-bar',
  pinClassName:'on',
  pin:'.slider-identifier .pin',
  callback:function(e, dir, distance){}
});
```
>运行效果

![运行效果图](https://github.com/forrestyuan/FoxSlider.js/blob/master/foxslider.gif?raw=true)

## 3、`base.js`内主要方法

<a name="init"></a>

>### init()
初始化函数

**Kind**: global function
***

<a name="refreshParam"></a>

### refreshParam(totalMoveLen, spinIndex)
刷新参数

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| totalMoveLen | <code>number</code> | 滚动位移 |
| spinIndex | <code>number</code> | 轮播指标高亮下标 |

***
<a name="setTranslate"></a>

## setTranslate(domNode, conf, moveLen)
设置指定对象移动样式 （transform）

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| domNode | <code>Object</code> | 应用移动样式的对象 |
| conf | <code>Object</code> | 配置对象（animateStyle: ease-in-out|linear|ease-in|ease; animateTime:<number>); |
| moveLen | <code>number</code> | 轮播图移动距离（切屏通过控制位移） |
***

<a name="resize"></a>

### resize()
改变屏幕尺寸重置参数

**Kind**: global function
***

<a name="autoRun"></a>

### autoRun(time, initStep)
自动轮播

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| time | <code>number</code> | 轮播时间 |
| initStep | <code>number</code> | spin下标 和下一屏 |
***

<a name="judgeDir"></a>

### judgeDir(curX, preX)
判断鼠标或触摸移动的方向

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| curX | <code>number</code> | 鼠标点击或开始触摸屏幕时的坐标X |
| preX | <code>numer</code> | 鼠标移动或触摸移动时的坐标X |
***

<a name="testTouchEvent"></a>

### testTouchEvent()
检测当前设备支持的事件（鼠标点击移动和手触摸移动）

**Kind**: global function
***

<a name="mouseX"></a>

### mouseX(event)
获取鼠标横坐标位置

**Kind**: global function


| Param | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | 事件对象 |

***
<a name="cancelBind"></a>

### cancelBind(domNode)
取消绑定触摸或鼠标点击移动事件

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| domNode | <code>Object</code> | 需要被取消绑定事件节点对象 |
***

<a name="reBindTouchEvent"></a>

### reBindTouchEvent(domNode, callback, isUnbind)
重新绑定触摸事件

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| domNode | <code>Object</code> | 需要被绑定事件节点对象 |
| callback | <code>function</code> | 回调方法 |
| isUnbind | <code>boolean</code> | 是否取消绑定 |
***

<a name="removeClsName"></a>

### removeClsName(nodeList, clsName)
移除节点的样式类名

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| nodeList | <code>Array</code> | 被移除样式的节点数组 |
| clsName | <code>string</code> | 移除的样式类名称 |
***

<a name="setClsName"></a>

### setClsName(node, clsName)
添加样式

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| node | <code>Object</code> | 添加类名的节点 |
| clsName | <code>string</code> | 样式类名 |
***

<a name="bindSpinClick"></a>

### bindSpinClick()
点击轮播spin 切换屏

**Kind**: global function
***
<a name="bindLeftRightBtnClick"></a>

### bindLeftRightBtnClick()
点击左右按钮切换屏

**Kind**: global function
***

<a name="checkTargetByCls"></a>
## checkTargetByCls(domNode, clsName)
通过检测dom节点是否包含某个样式名来判断是否属于目标target

**Kind**: global function

| Param | Type |
| --- | --- |
| domNode | <code>Object</code> |
| clsName | <code>string</code> |
***
<a name="bindTouchEvent"></a>

### bindTouchEvent(domNode, callback, isUnbind)
**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| domNode | <code>Object</code> | 绑定事件的代理对象 |
| callback | <code>function</code> | 回调方法 |
| isUnbind | <code>boolean</code> | 是否取消绑定 |
***
