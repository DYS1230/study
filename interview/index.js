记录网上看到的面试题

1. 盒子模型

IE   width = content + padding + border
Chrom  width = content

最后加上 margin

其中 css box-sizing  border-box 与 content-box 分别对应

2. 引擎

浏览器 有 渲染引擎(内核)与JS引擎

主流浏览器	内核
IE -> Edge	trident->EdgeHTML
Chrome	webkit->blink
Safari	              webkit
Firefox	              Gecko
Opera	              Presto->blink

浏览器js引擎
js引擎用来解释执行js代码 
当扩展了解一下吧，不用刻意记

主流浏览器	js引擎
IE -> Edge	JScript（IE3.0-IE8.0） / Chakra（IE9+之后，查克拉，微软也看火影么..）
Chrome	V8（大名鼎鼎）
Safari	Nitro（4-）
Firefox	SpiderMonkey（1.0-3.0）/ TraceMonkey（3.5-3.6）/ JaegerMonkey（4.0-）
Opera	Linear A（4.0-6.1）/ Linear B（7.0-9.2）/ Futhark（9.5-10.2）/ Carakan（10.5-）


操作DOM

appendChild() //添加
removeChild() //移除
replaceChild() //替换
insertBefore() //插入

 parentNode.replaceChild(newChild, oldChild);

 parentNode.insertBefore(newNode, referenceNode);

 3. 什么是闭包

 有权访问另一个函数作用域的变量函数

 4. 什么是作用域

 函数和变量的可访问访问

 5. css 实现三角形

width: 0; 
height: 0; 
border-top: 60px solid black; 
border-right: 120px solid red; 
border-bottom: 60px solid yellow; 

该三角形 底长120(两个60组成) 高120
占空间 120 * 120

另一种

border: 60px solid transparent;
border-left-color: black;

这种三角形 底长120 高60
占的空间是 120 * 120

6. null 与 undefined 的差异

null 数字转换成0, undefined 转换成 NaN
undefined 表示调用了值但是值无赋值
null 的变量会被内存收集器回收