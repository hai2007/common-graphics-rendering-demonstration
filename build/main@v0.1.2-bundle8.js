
/*************************** [bundle] ****************************/
// Original file:./examples/map/china.html
/*****************************************************************/
window.__etcpack__bundleSrc__['46']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "<!DOCTYPE html>\n<html lang=\"zh-cn\">\n\n<head>\n    <meta charset=\"UTF-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>地图 / 中国地图</title>\n    <script src=\"https://cdn.jsdelivr.net/npm/image2d@1\"></script>\n    <script src=\"https://cdn.jsdelivr.net/npm/@datapool/china.geojson@1\"></script>\n    <style>\n        canvas {\n            width: 400px;\n            height: 400px;\n        }\n    </style>\n</head>\n\n<body>\n\n    <canvas>非常抱歉，您的浏览器不支持canvas!</canvas>\n\n    <script>\n\n        var image2d = $$('canvas');\n        var painter = image2d.painter();\n\n        var size = image2d.size();\n\n        // https://hai2007.gitee.io/image2d/index.html#/api/calculate?fixed=map-eoap\n        var map = $$.map({ scale: 4 });\n\n        // https://hai2007.gitee.io/image2d/index.html#/api/tool?fixed=colors-getLoopColors\n        var colors = $$.getLoopColors(chinaGeoJSON.features.length);\n\n        // 迭代一个个省\n        for (var i = 0; i < chinaGeoJSON.features.length; i++) {\n\n            painter.config('fillStyle', colors[i]);\n\n            // 每个省可能有飞地，一个闭合的就是一个区域，迭代一个个区域\n            for (var j = 0; j < chinaGeoJSON.features[i].geometry.coordinates.length; j++) {\n\n                var regionData = chinaGeoJSON.features[i].geometry.coordinates[j][0];\n\n                painter.beginPath();\n\n                for (var k = 0; k < regionData.length; k++) {\n                    var pointer = map(regionData[k][0], regionData[k][1]);\n                    painter.lineTo(size.width * 0.5 + pointer[0], size.height * 0.5 + pointer[1]);\n                }\n\n                painter.closePath().full();\n\n            }\n        }\n\n\n    </script>\n\n</body>\n\n</html>\n"
  
    return __etcpack__scope_bundle__;
}
