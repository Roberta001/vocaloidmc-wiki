# MiniMessage 基础语法快速入门

MiniMessage 是一种强大的文本格式化工具，您可以用它来投稿 MOTD、计分板标语，或向腐竹申请自定义称号。这里是一些最基础、最常用的语法，方便您快速上手。

## 基础颜色

直接使用颜色名称标签即可。

```
<red>这是红色的文本。</red>
<gold>这是金色的文本。</gold>
<green>这是绿色的文本。</green>
```
**效果预览：**
<font color="red">这是红色的文本。</font>
<font color="gold">这是金色的文本。</font>
<font color="green">这是绿色的文本。</font>

## 十六进制颜色 (HEX)

可以使用 `#` 加上6位十六进制代码来指定任意颜色。

```
<#FF5555>这是一个很漂亮的粉红色。</#FF5555>
<#55FFFF>这是一个青色。</#55FFFF>
```
**效果预览：**
<font color="#FF5555">这是一个很漂亮的粉红色。</font>
<font color="#55FFFF">这是一个青色。</font>

## 文本样式

可以为文本添加粗体、斜体、下划线和删除线等。

```
<b>这是粗体。</b>
<i>这是斜体。</i>
<u>这是下划线。</u>
<st>这是删除线。</st>
<obf>这是随机混乱字符。</obf>

<b><i>可以同时使用多种样式。</i></b>
```

## 渐变色

这是 MiniMessage 最炫酷的功能之一！

### 双色渐变
```
<gradient:blue:aqua>从蓝色渐变到青色</gradient>
```
**效果预览：**
<span style="background: linear-gradient(to right, blue, aqua); -webkit-background-clip: text; color: transparent;">从蓝色渐变到青色</span>

### 多色渐变
可以添加更多的颜色来创建更丰富的渐变效果。
```
<gradient:#FF0000:gold:lime>彩虹色的渐变</gradient>
```
**效果预览：**
<span style="background: linear-gradient(to right, #FF0000, gold, lime); -webkit-background-clip: text; color: transparent;">彩虹色的渐变</span>

## 组合示例

将各种标签组合起来，创造出独特的效果！

```
<gradient:blue:purple><b><i>欢迎来到<#FFFF55>术力口</#FFFF55>聚集地！</i></b></gradient>
```

## 更多信息

想要了解更多高级用法，例如悬停文本、点击事件等，请查阅：
*   **[MiniMessage 官方参考文档](./minimessage)**
*   **[官方在线效果预览器](https://webui.advntr.dev/)**