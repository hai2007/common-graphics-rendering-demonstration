
/*************************** [bundle] ****************************/
// Original file:./src/App/pages/ring/index.ts
/*****************************************************************/
window.__etcpack__bundleSrc__['28']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var _dec, _class2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

__etcpack__scope_args__=window.__etcpack__getBundle('1');
var Component=__etcpack__scope_args__.Component;

__etcpack__scope_args__=window.__etcpack__getBundle('53');
var template =__etcpack__scope_args__.default;


var _class = (_dec = Component({
  template: template,
  styles: []
}), _dec(_class2 = function _class2() {
  _classCallCheck(this, _class2);
}) || _class2);

__etcpack__scope_bundle__.default=_class;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/App/pages/ring/index.html
/*****************************************************************/
window.__etcpack__bundleSrc__['53']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "<div class='doc-view'>\n    <h2 id='fixed-top'>\n        环形图\n    </h2>\n    <p>\n        假设我们现在有一组数据：\n    </p>\n    <pre ui-code>\nvar data = [\n    {type: \"苹果\",number: 124},\n    {type: \"香蕉\",number: 56},\n    {type: \"栗子\",number: 310}\n];\n    </pre>\n    <p>\n        我们希望采用环形图来显示，最终的效果如下：\n    </p>\n    <img src=\"./image/pie.png\" alt=\"饼图\" width='400px'>\n    <h3 id='fixed-single'>\n        单一的情况\n    </h3>\n    <p>\n        我们先不考虑边缘的提示文字和折线，只考虑中间的环形如何绘制。\n    </p>\n    <p>\n        首先，我们需要求解出数值的和，这样才能会绘制的时候知道每个环的占比：\n    </p>\n    <pre ui-code>\nvar sum = 0;\nfor (var i = 0; i &lt; data.length; i++) sum += data[i].number;\n    </pre>\n    <p>\n        现在，就可以通过循环的方式一个个绘制圆环了：\n    </p>\n    <pre ui-code>\n// beginDeg表示当前绘制的环的开始弧度，我们从-0.5PI的地方开始绘制\nvar beginDeg = -Math.PI * 0.5, deg;\n\nfor (var i = 0; i < data.length; i++) {\n\n    //计算占比和和2PI相乘得出当前环的弧度\n    deg = data[i].number / sum * Math.PI * 2;\n\n    // 以(200, 200)为圆心，内外半径分别是100和200，从弧度beginDeg开始，绘制弧度deg的圆弧\n    painter.fillArc(200, 200, 100, 200, beginDeg, deg);\n\n    // 计算下一个环的开始弧度\n    beginDeg += deg;\n}\n    </pre>\n    <button ui-goto-example='ring_single'>查看用例>>></button>\n    <h3 id='fixed-line'>\n        带提示折线文字\n    </h3>\n    <p>\n        可以发现，折线和文字的绘制关键点在于每个圆弧对应的折线的那三个点的位置，关于位置的计算，我们借助<span class=\"important\">rotate</span>来计算。语法如下：\n    </p>\n    <pre ui-code>\n        var dot = $$.rotate(cx, cy, deg, x, y);\n    </pre>\n    <p>\n        点（x,y）围绕中心（cx,cy）旋转deg度，最后返回一个长度为2的一维数组，表示旋转后点的位置。\n    </p>\n    <p>\n        基于此，我们考虑如果有一个弧形的中心弧度恰好位于0度的情况。那么，连线的前两个点（第三个点基于第二个点就很容易得出了）就自然应该是：[cx+radius,cy]、[cx+radius+10,cy]，这里假设每段的长度为10。\n    </p>\n    <p>\n        对应到具体的代码就是：\n    </p>\n    <pre ui-code>\nvar beginDeg = -Math.PI * 0.5, deg;\nfor (var i = 0; i &lt; data.length; i++) {\n    deg = data[i].number / sum * Math.PI * 2;\n\n    var dot1 = $$.rotate(cx, cy, beginDeg + deg * 0.5, cx + radius, cy);\n    var dot2 = $$.rotate(cx, cy, beginDeg + deg * 0.5, cx + radius + 10, cy);\n\n    beginDeg += deg;\n}\n    </pre>\n    <p>\n        而对于第三个点，经过观察可以发现：如果第二个位于圆心的右边，就是第二个点右移动10，否则左移动10。由此可得：\n    </p>\n    <pre ui-code>\n        var dot3=[ dot2[0]>cx ? dot2[0]+10 : dot2[0]-10 , dot2[1] ];\n    </pre>\n    <p>\n        由此得到了三个点的位置，对于折线而言，直接连接起来即可：\n    </p>\n    <pre ui-code>\npainter\n    .beginPath()\n    .moveTo(dot1[0], dot1[1]).lineTo(dot2[0], dot2[1]).lineTo(dot3[0], dot3[1])\n    .stroke();\n    </pre>\n    <p>\n        对于文字而言，直接在dot3的位置绘制即可，只不过，需要考虑到文字是左对齐还是右对齐，和第三个点的求法类似，直接看代码即可：\n    </p>\n    <pre ui-code>\npainter\n    .config('textAlign' , dot2[0]>cx ? \"left\" : \"right\")\n    .fillText(data[i].type, dot3[0], dot3[1]);\n    </pre>\n    <button ui-goto-example='ring_line'>查看用例>>></button>\n</div>\n"
  
    return __etcpack__scope_bundle__;
}
