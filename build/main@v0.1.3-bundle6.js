
/*************************** [bundle] ****************************/
// Original file:./examples/ring/line.html
/*****************************************************************/
window.__etcpack__bundleSrc__['44']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "<!DOCTYPE html>\n<html lang=\"zh-cn\">\n\n<head>\n    <meta charset=\"UTF-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>环形图 / 带提示折线文字</title>\n    <script src=\"https://unpkg.com/image2d@1\"></script>\n    <style>\n        canvas {\n            width: 700px;\n            height: 700px;\n        }\n    </style>\n</head>\n\n<body>\n\n    <canvas>非常抱歉，您的浏览器不支持canvas!</canvas>\n\n    <script>\n\n        var painter = $$('canvas').painter();\n\n        var data = [{\n            type: \"苹果\",\n            number: 124\n        }, {\n            type: \"香蕉\",\n            number: 56\n        }, {\n            type: \"栗子\",\n            number: 310\n        }];\n\n        // 求和\n        var sum = 0;\n        for (var i = 0; i < data.length; i++) sum += data[i].number;\n\n        // 准备好颜色\n        // https://hai2007.gitee.io/image2d/index.html#/api/tool?fixed=colors-getLoopColors\n        var colors = $$.getLoopColors(data.length);\n\n        var beginDeg = -Math.PI * 0.5, deg;\n        for (var i = 0; i < data.length; i++) {\n            deg = data[i].number / sum * Math.PI * 2;\n\n            // 配置画笔的颜色\n            // https://hai2007.gitee.io/image2d/index.html#/api/painter?fixed=config\n            painter.config('fillStyle', colors[i]);\n\n            // https://hai2007.gitee.io/image2d/index.html#/api/painter?fixed=painter-arc\n            painter.fillArc(350, 350, 100, 200, beginDeg, deg);\n\n            // https://hai2007.gitee.io/image2d/index.html#/api/calculate?fixed=dot-dldbh\n            var dot1 = $$.rotate(350, 350, beginDeg + deg * 0.5, 350 + 200, 350);\n            var dot2 = $$.rotate(350, 350, beginDeg + deg * 0.5, 350 + 200 + 10, 350);\n            var dot3 = [dot2[0] + (dot2[0] > 350 ? 10 : -10), dot2[1]];\n\n            // 折线\n            // https://hai2007.gitee.io/image2d/index.html#/api/painter?fixed=painter-path\n            painter.beginPath().moveTo(dot1[0], dot1[1]).lineTo(dot2[0], dot2[1]).lineTo(dot3[0], dot3[1]).stroke();\n\n            painter\n                .config({\n                    'textAlign': dot2[0] > 350 ? \"left\" : \"right\",\n                    'fillStyle': \"black\"\n                })\n\n                // 文字\n                // https://hai2007.gitee.io/image2d/index.html#/api/painter?fixed=painter-text\n                .fillText(data[i].type, dot3[0], dot3[1]);\n\n\n            beginDeg += deg;\n        }\n\n    </script>\n\n</body>\n\n</html>\n"
  
    return __etcpack__scope_bundle__;
}