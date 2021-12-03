import { platform } from 'nefbl'
import normalize from "@hai2007/style/normalize.css"
import doc from "@hai2007/style/doc-view.css"

// 兼容文件
import '@hai2007/polyfill/Promise.js'
import '@hai2007/polyfill/console.js'

// 引入主模块
import appModule from "./app.module"

// 引入样式
import menu from './style/menu.scss'
import style from './style/style.css'

// 先获取平台实例
platform({

    // 框架管理的区域
    el: document.getElementById('root'),

    // 全局样式
    styles: [normalize, style, menu, doc]

})

    // 然后启动主模块
    .bootstrap(appModule)
