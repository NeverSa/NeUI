

### 按钮
<br/>

<botton/>

<<<@/docs/.vuepress/components/botton.vue


### 导入代码段
这里官网有点坑

>你可以通过下述的语法导入已经存在的文件中的代码段：
```
<<< @/filepath
```
然后我就照做了，页面显示的是字符串。

然后我以为是路径的问题，改了半天也没用，后来发现，是官方例子有问题。

正确如下：没错！不要中间的空格！
```js
<<<@/docs/.vuepress/components/btn.vue
```

