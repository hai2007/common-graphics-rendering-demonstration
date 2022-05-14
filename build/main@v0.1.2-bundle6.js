
/*************************** [bundle] ****************************/
// Original file:./examples/ring/single.html
/*****************************************************************/
window.__etcpack__bundleSrc__['45']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "<!DOCTYPE html>\r\n<html lang=\"zh-cn\">\r\n\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <title>环形图 / 单一的情况</title>\r\n    <script src=\"https://cdn.jsdelivr.net/npm/image2d@1\"></script>\r\n    <style>\r\n        canvas {\r\n            width: 400px;\r\n            height: 400px;\r\n        }\r\n    </style>\r\n</head>\r\n\r\n<body>\r\n\r\n    <canvas>非常抱歉，您的浏览器不支持canvas!</canvas>\r\n\r\n    <script>\r\n\r\n        var painter = $$('canvas').painter();\r\n\r\n        var data = [{\r\n            type: \"苹果\",\r\n            number: 124\r\n        }, {\r\n            type: \"香蕉\",\r\n            number: 56\r\n        }, {\r\n            type: \"栗子\",\r\n            number: 310\r\n        }];\r\n\r\n        // 求和\r\n        var sum = 0;\r\n        for (var i = 0; i < data.length; i++) sum += data[i].number;\r\n\r\n        // 准备好颜色\r\n        // https://hai2007.gitee.io/image2d/index.html#/api/tool?fixed=colors-getLoopColors\r\n        var colors = $$.getLoopColors(data.length);\r\n\r\n        var beginDeg = -Math.PI * 0.5, deg;\r\n        for (var i = 0; i < data.length; i++) {\r\n            deg = data[i].number / sum * Math.PI * 2;\r\n\r\n            // 配置画笔的颜色\r\n            // https://hai2007.gitee.io/image2d/index.html#/api/painter?fixed=config\r\n            painter.config('fillStyle', colors[i]);\r\n\r\n            // https://hai2007.gitee.io/image2d/index.html#/api/painter?fixed=painter-arc\r\n            painter.fillArc(200, 200, 100, 200, beginDeg, deg);\r\n\r\n            beginDeg += deg;\r\n        }\r\n\r\n    </script>\r\n\r\n</body>\r\n\r\n</html>\r\n"
  
    return __etcpack__scope_bundle__;
}
