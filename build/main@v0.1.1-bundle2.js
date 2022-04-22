
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

__etcpack__scope_args__=window.__etcpack__getBundle('49');
var template =__etcpack__scope_args__.default;


var _class = (_dec = Component({
  selector: "pie",
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
window.__etcpack__bundleSrc__['49']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "<div class='doc-view'>\r\n    <h2 id='fixed-top'>\r\n        环形图\r\n    </h2>\r\n    <p>\r\n        假设我们现在有一组数据：\r\n    </p>\r\n    <pre ui-code>\r\n        var data = [{type: \"苹果\",number: 124}, {type: \"香蕉\",number: 56}, {type: \"栗子\",number: 310}];\r\n    </pre>\r\n    <p>\r\n        我们希望采用环形图来显示，最终的效果如下：\r\n    </p>\r\n    <img src=\"./image/pie.png\" alt=\"饼图\" width='400px'>\r\n    <h3 id='fixed-single'>\r\n        单一的情况\r\n    </h3>\r\n    <p>\r\n        我们先不考虑边缘的提示文字和折线，只考虑中间的环形如何绘制。\r\n    </p>\r\n    <p>\r\n        首先，我们需要求解出数值的和，这样才能会绘制的时候知道每个环的占比：\r\n    </p>\r\n    <pre ui-code>\r\nvar sum = 0;\r\nfor (var i = 0; i &lt; data.length; i++) sum += data[i].number;\r\n    </pre>\r\n    <p>\r\n        现在，就可以通过循环的方式一个个绘制圆环了：\r\n    </p>\r\n    <pre ui-code>\r\nvar beginDeg = -Math.PI * 0.5, deg; // beginDeg表示当前绘制的环的开始弧度，我们从-0.5PI的地方开始绘制\r\n\r\nfor (var i = 0; i < data.length; i++) {\r\n    deg = data[i].number / sum * Math.PI * 2; //计算占比和和2PI相乘得出当前环的弧度\r\n\r\n    // 以(200, 200)为圆心，内外半径分别是100和200，从弧度beginDeg开始，绘制弧度deg的圆弧\r\n    painter.fillArc(200, 200, 100, 200, beginDeg, deg);\r\n\r\n    beginDeg += deg; // 计算下一个环的开始弧度\r\n}\r\n    </pre>\r\n    <button ui-goto-example='ring_single'>查看用例>>></button>\r\n    <h3 id='fixed-line'>\r\n        带提示折线文字\r\n    </h3>\r\n    <p>\r\n        可以发现，折线和文字的绘制关键点在于每个圆弧对应的折线的那三个点的位置，关于位置的计算，我们借助<span class=\"important\">rotate</span>来计算。语法如下：\r\n    </p>\r\n    <pre ui-code>\r\n        var dot = $$.rotate(cx, cy, deg, x, y);\r\n    </pre>\r\n    <p>\r\n        点（x,y）围绕中心（cx,cy）旋转deg度，最后返回一个长度为2的一维数组，表示旋转后点的位置。\r\n    </p>\r\n    <p>\r\n        基于此，我们考虑如果有一个弧形的中心弧度恰好位于0度的情况。那么，连线的前两个点（第三个点基于第二个点就很容易得出了）就自然应该是：[cx+radius,cy]、[cx+radius+10,cy]，这里假设每段的长度为10。\r\n    </p>\r\n    <p>\r\n        对应到具体的代码就是：\r\n    </p>\r\n    <pre ui-code>\r\nvar beginDeg = -Math.PI * 0.5, deg;\r\nfor (var i = 0; i &lt; data.length; i++) {\r\n    deg = data[i].number / sum * Math.PI * 2;\r\n\r\n    var dot1 = $$.rotate(cx, cy, beginDeg + deg * 0.5, cx + radius, cy);\r\n    var dot2 = $$.rotate(cx, cy, beginDeg + deg * 0.5, cx + radius + 10, cy);\r\n\r\n    beginDeg += deg;\r\n}\r\n    </pre>\r\n    <p>\r\n        而对于第三个点，经过观察可以发现：如果第二个位于圆心的右边，就是第二个点右移动10，否则左移动10。由此可得：\r\n    </p>\r\n    <pre ui-code>\r\n        var dot3=[ dot2[0]>cx ? dot2[0]+10 : dot2[0]-10 , dot2[1] ];\r\n    </pre>\r\n    <p>\r\n        由此得到了三个点的位置，对于折线而言，直接连接起来即可：\r\n    </p>\r\n    <pre ui-code>\r\n        painter.beginPath().moveTo(dot1[0], dot1[1]).lineTo(dot2[0], dot2[1]).lineTo(dot3[0], dot3[1]).stroke();\r\n    </pre>\r\n    <p>\r\n        对于文字而言，直接在dot3的位置绘制即可，只不过，需要考虑到文字是左对齐还是右对齐，和第三个点的求法类似，直接看代码即可：\r\n    </p>\r\n    <pre ui-code>\r\n        painter.config('textAlign' , dot2[0]>cx ? \"left\" : \"right\").fillText(data[i].type, dot3[0], dot3[1]);\r\n    </pre>\r\n    <button ui-goto-example='ring_line'>查看用例>>></button>\r\n</div>\r\n"
  
    return __etcpack__scope_bundle__;
}
