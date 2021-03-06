
/*************************** [bundle] ****************************/
// Original file:./examples/ring/single.html
/*****************************************************************/
window.__etcpack__bundleSrc__['45']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "<!DOCTYPE html>\n<html lang=\"zh-cn\">\n\n<head>\n    <meta charset=\"UTF-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>环形图 / 单一的情况</title>\n    <script src=\"https://unpkg.com/image2d@1\"></script>\n    <style>\n        canvas {\n            width: 400px;\n            height: 400px;\n        }\n    </style>\n</head>\n\n<body>\n\n    <canvas>非常抱歉，您的浏览器不支持canvas!</canvas>\n\n    <script>\n\n        var painter = $$('canvas').painter();\n\n        var data = [{\n            type: \"苹果\",\n            number: 124\n        }, {\n            type: \"香蕉\",\n            number: 56\n        }, {\n            type: \"栗子\",\n            number: 310\n        }];\n\n        // 求和\n        var sum = 0;\n        for (var i = 0; i < data.length; i++) sum += data[i].number;\n\n        // 准备好颜色\n        // https://hai2007.gitee.io/image2d/index.html#/api/tool?fixed=colors-getLoopColors\n        var colors = $$.getLoopColors(data.length);\n\n        var beginDeg = -Math.PI * 0.5, deg;\n        for (var i = 0; i < data.length; i++) {\n            deg = data[i].number / sum * Math.PI * 2;\n\n            // 配置画笔的颜色\n            // https://hai2007.gitee.io/image2d/index.html#/api/painter?fixed=config\n            painter.config('fillStyle', colors[i]);\n\n            // https://hai2007.gitee.io/image2d/index.html#/api/painter?fixed=painter-arc\n            painter.fillArc(200, 200, 100, 200, beginDeg, deg);\n\n            beginDeg += deg;\n        }\n\n    </script>\n\n</body>\n\n</html>\n"
  
    return __etcpack__scope_bundle__;
}
