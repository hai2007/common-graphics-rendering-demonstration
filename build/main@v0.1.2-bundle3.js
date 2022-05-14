
/*************************** [bundle] ****************************/
// Original file:./src/App/pages/map/index.ts
/*****************************************************************/
window.__etcpack__bundleSrc__['29']=function(){
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
// Original file:./src/App/pages/map/index.html
/*****************************************************************/
window.__etcpack__bundleSrc__['53']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "<div class='doc-view'>\n    <h2 id='fixed-top'>\n        地图\n    </h2>\n    <p>\n        下面，是我们最终要绘制的地图截图：\n    </p>\n    <p>\n        <img src=\"./image/china-map.png\" alt=\"中国地图\" width='400px'>\n    </p>\n    <h3 id='fixed-data'>\n        地图数据\n    </h3>\n    <p>\n        首先，我们需要准备好地理数据，你可以\n        <a href=\"https://github.com/hai2007/datapool/blob/master/README.md\" target=\"_blank\" class=\"link\">点击此处</a>\n        查看是否有你需要的，我们这里需要绘制中国地图，由此，直接点击上面的“中国”查看文档。\n    </p>\n    <p>\n        最终，通过CDN的方式引入：\n    </p>\n    <pre ui-code=\"html\">\n        <script src=\"https://cdn.jsdelivr.net/npm/@datapool/china.geojson@1\"></script>\n    </pre>\n    <p>\n        上述的地理数据格式大致如下：\n    </p>\n    <pre ui-code>\nvar chinaGeoJSON = {\n    type: \"FeatureCollection\",\n    features: [{\n        type: \"Feature\",\n        properties: {},\n        geometry: {\n            type: \"MultiPolygon\",\n            coordinates:[\n                [[[117.210024, 40.082262], [117.344299, 40.13443],...]],\n                ...\n            ]\n        }\n    },...]\n};\n    </pre>\n    <h3 id='fixed-map'>\n        经纬度映射\n    </h3>\n    <p>\n        可以看出来，中国地图就是一个个省拼接的，而每个省由于可能有飞地，所以可能存在多个区域，一个单独的区域就是通过边界经纬度围绕起来的。\n    </p>\n    <p>\n        那么，绘制地图的本质就是通过连线，把每个区域的边界一点点连起来。而边界是通过经纬度标记的，为了可以绘图，我们需要对经纬度和xy坐标之间建立一个合理的映射。\n    </p>\n    <p>\n        不同的需求映射算法不一样，我们这里先不考虑这些：\n    </p>\n    <pre ui-code>\n// https://hai2007.gitee.io/image2d/index.html#/api/calculate?fixed=map-eoap\nvar map = $$.map({ scale: 4 });\n    </pre>\n    <p>\n        这样，map就是一个映射函数，比如：\n    </p>\n    <pre ui-code>\n        var pointer = map(117.210024, 40.082262);\n    </pre>\n    <p>\n        返回的pointer就是一个数组，分别表示举例地图中心距离dx和dy。\n    </p>\n    <h3 id='fixed-draw'>\n        绘制\n    </h3>\n    <p>\n        绘制就很简单了，直接for循环每个省，再for循环区域即可：\n    </p>\n    <pre ui-code>\n// 迭代一个个省\nfor (var i = 0; i < chinaGeoJSON.features.length; i++) {\n\n    // 每个省可能有飞地，一个闭合的就是一个区域，迭代一个个区域\n    for (var j = 0; j < chinaGeoJSON.features[i].geometry.coordinates.length; j++) {\n\n        var regionData = chinaGeoJSON.features[i].geometry.coordinates[j][0];\n\n        painter.beginPath();\n        for (var k = 0; k < regionData.length; k++) {\n            var pointer = map(regionData[k][0], regionData[k][1]);\n            painter.lineTo(size.width * 0.5 + pointer[0], size.height * 0.5 + pointer[1]);\n        }\n        painter.closePath().full();\n\n    }\n}\n    </pre>\n    <p>\n        <button ui-goto-example='map_china'>查看用例>>></button>\n    </p>\n    <p>\n        当然，地理数据还包含了每个省的名字，省会位置等，你可以根据UI等进行补充和修改。\n    </p>\n</div>\n"
  
    return __etcpack__scope_bundle__;
}
