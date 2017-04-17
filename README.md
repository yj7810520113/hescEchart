# hescEchart
## Echart常用属性二次封装，比Echart更加简洁！
<br>现在已整合柱状图、多维柱状图、多维堆叠柱状图！
<br>数据模型如下：
```JavaScript
//对于barchart数据格式约定
//对于无论是普通柱状图、堆叠柱状图还是多维堆叠柱状图对于以下定义
//---数据格式通过stacked属性设置
//---如：
//---stacked()代表二维柱状图
//---stacked([1,1,1])代表一维柱状图
//---stacked([1,1,2])代表二维堆积柱状图
[[{},{},{}],[{},{},{}]]
```
对于柱状图需要引入hescEchartCore.js、hescEchartBarChart.js和echarts.js
```html
    <script src="../hescEchartCore.js"></script>
    <script src="hescEchartBarChart.js"></script>
    <script src="../echarts.js"></script>
```
使用方法：
```html
<div id="test" style="width: 600px;height:400px;">
</div>
<script type="text/javascript">
    hescEchart.json('../Data/barChartTest.Data',function(error,data){
        hescEchart.select('test')
            .background(barObj.backgroundColor)
            .title(barObj.title)
            .subtitle(barObj.subtitle)
            .titleBackgroundColor(barObj.titleBackgroundColor)
            .titleTop(barObj.titleTop)
            .titleLeft(barObj.titleLeft)
            .titleTextStyleFontSize(barObj.titleTextStyleFontSize)
            .titleTextStyleColor(barObj.titleTextStyleColor)
            .gridLeft(barObj.gridLeft)
            .gridRight(barObj.gridRight)
            .gridTop(barObj.gridTop)
            .gridBottom(barObj.gridBottom)
            .tooltipAxisPointerType(barObj.tooltipAxisPointerType)
            .legendAttr(barObj.legend)
            .legendAlign(barObj.legendAlign)
            .legendLeft(barObj.legendLeft)
            .legendTop(barObj.legendTop)
            .xAxisData(barObj.xAxisData)
            .xAxisGridLineAttr(barObj.xAxisGridLine)
            .xAxisPosition(barObj.xAxisPosition)
            .xAxisInverse(barObj.xAxisInverse)
            .xAxisSplitAreaShow(barObj.xAxisSplitAreaShow)
            .xAxisAxisLineShow(barObj.xAxisAxisLineShow)
            .xAxisAxisLabelInside(barObj.xAxisAxisLabelInside)
            .xAxisAxisLabelTextStyleColor(barObj.xAxisAxisLabelTextStyleColor)
            .xAxisAxisTickShow(barObj.xAxisAxisTickShow)
            .xAxisBoundaryGap(barObj.xAxisBoundaryGap)
            .yAxisInverse(barObj.yAxisInverse)
            .yAxisSplitAreaShow(barObj.yAxisSplitAreaShow)
            .yAxisAxisLineShow(barObj.yAxisAxisLineShow)
            .yAxisAxisLabelInside(barObj.yAxisAxisLabelInside)
            .yAxisAxisLabelTextStyleColor(barObj.yAxisAxisLabelTextStyleColor)
            .yAxisAxisTickShow(barObj.yAxisAxisTickShow)
            .yAxisData(barObj.yAxisData)
            .yAxisGridLineAttr(barObj.yAxisGridLine)
            .reverse(barObj.reverse)
            .stack(barObj.stack)
            .bar(data)
            .render();
    });


</script>
```
[我的主页](http://mmcode.top)

