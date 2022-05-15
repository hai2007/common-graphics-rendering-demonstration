
/*************************** [bundle] ****************************/
// Original file:./src/App/pages/begin/index.ts
/*****************************************************************/
window.__etcpack__bundleSrc__['27']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var _dec, _class2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

__etcpack__scope_args__=window.__etcpack__getBundle('1');
var Component=__etcpack__scope_args__.Component;

__etcpack__scope_args__=window.__etcpack__getBundle('52');
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
// Original file:./src/App/pages/begin/index.html
/*****************************************************************/
window.__etcpack__bundleSrc__['52']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "<div class='doc-view'>\n    <h2 id='fixed-top'>\n        写在前面\n    </h2>\n    <p>\n        接下来，我们将向大家说明一些常见的图形如何绘制，核心的内容是编程思路的分享，不涉及具体的绘图库。\n    </p>\n    <p>\n        在演示和说明的时候，虽然我们选择基于\n        <a href=\"https://hai2007.gitee.io/image2d/index.html#/guide\" target=\"_blank\" class='link'>image2D.js</a>\n        来作为依赖库，但由于其朴素的语法几乎和原生canvas或者说和普通人的认知是一致的，因此我们认为这不是一个糟糕的选择。\n    </p>\n    <p class='warn'>\n        温馨提示：如果你有更好的建议，欢迎给我们\n        <a href=\"https://github.com/hai2007/common-graphics-rendering-demonstration/issues\" target=\"_blank\"\n            class='link'>留言</a>~\n    </p>\n    <p>\n        下面，我们将简单的把需要提前了解的知识在下面进行说明。\n    </p>\n    <h3 id='fixed-painter'>\n        引入并获取画笔\n    </h3>\n    <p>\n        为了可以使用image2D，你可以选择npm或者CDN的方式引入，这里为了简单，我们直接使用CDN引入：\n    </p>\n    <pre ui-code='html'>\n        <script src=\"https://cdn.jsdelivr.net/npm/image2d@1\"></script>\n    </pre>\n    <p>\n        接着，你需要准备一个canvas：\n    </p>\n    <pre ui-code='html'>\n        <canvas>非常抱歉，您的浏览器不支持canvas!</canvas>\n    </pre>\n    <p>\n        然后，使用下面的语句即可获取画笔：\n    </p>\n    <pre ui-code>\n        var painter=$$('canvas').painter();\n    </pre>\n    <h3 id='fixed-method'>\n        绘制方法\n    </h3>\n    <p>\n        完整的绘制方法请查看\n        <a href=\"https://hai2007.gitee.io/image2d/index.html#/api/painter?fixed=method\" target=\"_blank\"\n            class='link'>画笔上的绘图方法</a>\n        中的说明，这里，我们选择画矩形的方法给大家演示一下，非常的简单：\n    </p>\n    <pre ui-code>\n        painter.fillRect(50,50,120,60);\n    </pre>\n    <button ui-goto-example='begin_painter'>查看用例>>></button>\n    <p>\n        上面的语句就会在(50,50)的位置绘制一个宽120高60的矩形。\n    </p>\n    <h3 id='fixed-calc'>\n        计算方法\n    </h3>\n    <p>\n        说的简单的点击，就是封装了一些绘图中可能会用到的计算方法，确定的输入输出。\n    </p>\n    <p>\n        具体的计算方法请查看\n        <a href=\"https://hai2007.gitee.io/image2d/index.html#/api/calculate\" target=\"_blank\" class='link'>辅助计算</a>\n        中的说明，我们这里就不再说明了。\n    </p>\n</div>\n"
  
    return __etcpack__scope_bundle__;
}
