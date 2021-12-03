import { Component, ref } from 'nefbl'
import urlFormat from '../tool/urlFormat'
import fixedScroll from '../tool/fixedScroll'

import style from './index.scss'
import template from './index.html'

import pages from './pages/lazy-load'

@Component({
    selector: "app-root",
    template,
    styles: [style]
})
export default class {

    pageName: any
    currentPage: any

    $setup() {
        return {
            pageName: ref(''),
            currentPage: ref(null)
        }
    }

    $mounted() {

        // 地址栏信息
        let urlObj = urlFormat(window.location.href)

        this.pageName = urlObj.router[0] in pages ? urlObj.router[0] : "begin"
        this.loadPage(urlObj.params.fixed)

    }

    loadPage(fixedName) {
        pages[this.pageName]().then(data => {
            this.currentPage = data.default
            setTimeout(() => {
                fixedScroll(fixedName)
            }, 200)
        })
    }

    openPage(e) {
        this.pageName = e.target.getAttribute('tag')
        window.location.href = '#/' + this.pageName + "?fixed=top"
        this.loadPage('top')
    }

    doScroll(event) {
        let fixedName = event.target.getAttribute('tag')
        window.location.href = '#/' + this.pageName + "?fixed=" + fixedName
        fixedScroll(fixedName)
    }

}
