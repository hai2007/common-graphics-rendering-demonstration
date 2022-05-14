
/*************************** [bundle] ****************************/
// Original file:./src/App/pages/tree/index.ts
/*****************************************************************/
window.__etcpack__bundleSrc__['30']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var _dec, _class2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

__etcpack__scope_args__=window.__etcpack__getBundle('1');
var Component=__etcpack__scope_args__.Component;

__etcpack__scope_args__=window.__etcpack__getBundle('56');
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
// Original file:./src/App/pages/tree/index.html
/*****************************************************************/
window.__etcpack__bundleSrc__['56']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "<div class='doc-view'>\n    <h2 id='fixed-top'>\n        树图\n    </h2>\n    <p>\n        假设我们现在有一组数据：\n    </p>\n    <pre ui-code>\nvar data = [\n    [\"手绘\", [1, 2, 3, 4]],\n    [\"水粉\"],\n    [\"油画\"],\n    [\"素描\", [5, 6]],\n    [\"中国画\"],\n    [\"空间透视\"],\n    [\"色彩五大调\"]\n];\n    </pre>\n    <p>\n        我们希望采用树图来显示，最终的效果如下：\n    </p>\n    <img src=\"./image/tree_simple.png\" alt=\"树图\" width='300px'>\n    <h3 id='fixed-layout'>\n        布局\n    </h3>\n    <p>\n        我们知道，绘制树图最麻烦的是计算出每个结点的位置，这里，我们可以直接使用\n        <a href=\"https://hai2007.gitee.io/image2d/#/api/calculate?fixed=treeLayout\" target=\"_blank\"\n            class=\"link\">“树布局”</a>\n        来计算。\n    </p>\n    <p>\n        我们需要配置两类信息：数据的格式和树图的“外观”。\n    </p>\n    <h4 id='fixed-layout-data'>\n        数据的格式\n    </h4>\n    <p>\n        所谓的数据格式，也就是告诉“布局对象”数据是什么样子：\n    </p>\n    <pre ui-code>\nvar treeLayout = $$.treeLayout({\n\n    // 根结点\n    root: function (initTree) {\n        return initTree[0];\n    },\n\n    // 当前结点id\n    id: function (treeData) {\n        return treeData[0]\n    },\n\n    // 当前结点的子结点\n    child: function (parentTree, initTree) {\n        var children = [];\n        if (parentTree[1]) {\n            for (var index of parentTree[1]) {\n                children.push(initTree[index]);\n            }\n        }\n        return children;\n    }\n});\n    </pre>\n    <h4 id='fixed-layout-ui'>\n        树图的“外观”\n    </h4>\n    <p>\n        外观指的是树长什么样子。比如，矩形的还是圆的？树朝着左还是右等等信息（具体的你可以\n        <a href=\"https://hai2007.gitee.io/image2d/#/api/calculate?fixed=treeLayout-config\" target=\"_blank\" class=\"link\">\n            点击此处\n        </a>\n        进行查看）：\n    </p>\n    <pre ui-code>\nvar treeLayout = $$.treeLayout({\n    type: \"LR\",\n    width: 400,\n    height: 400\n});\n    </pre>\n    <h3 id='fixed-draw'>\n        绘制\n    </h3>\n    <p>\n        上述配置完毕以后，布局就知道你最终传递的数据格式和你希望绘制的树的样子。\n    </p>\n    <p>\n        可是，如何绘制？我们还需要进行配置：\n    </p>\n    <pre ui-code>\n// 配置绘制方法\ntreeLayout.drawer(function (data) {\n    // 使用painter绘制即可\n});\n    </pre>\n    <p>\n        data就包含着绘图需要的信息，比如这里的内容如下：\n    </p>\n    <img src=\"./image/tree-data.png\" alt=\"树图数据格式\" width='700px'>\n    <p>\n        拿“中国画”为例，可以很清楚的知道，这个结点应该在（200,311）的位置绘制。\n    </p>\n    <p>\n        如此，绘制好一个个结点，而再借助其中的“pid”字段，就可以完成父子结点的连线。\n    </p>\n    <p>\n        <button ui-goto-example='tree_simple'>查看用例>>></button>\n    </p>\n</div>\n"
  
    return __etcpack__scope_bundle__;
}
