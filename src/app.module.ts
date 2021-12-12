import { Module } from 'nefbl'

// 首页
import AppComponent from './App/index'

// 组件
import search from './component/search/index'

// 指令
import uiBind from 'sprout-ui/nefbl/directive/ui-bind'
import uiModel from 'sprout-ui/nefbl/directive/ui-model'
import uiOn from 'sprout-ui/nefbl/directive/ui-on'
import uiLazy from 'sprout-ui/nefbl/directive/ui-lazy'
import uiToggle from './directive/ui-toggle'
import uiGotoExample from './directive/ui-goto-example'
import uiCode from './directive/ui-code'

@Module({
    declarations: [
        AppComponent,
        uiBind, uiModel, uiOn,
        uiLazy, uiToggle, uiGotoExample, uiCode,
        search

    ],
    imports: [],
    exports: [],
    bootstrap: AppComponent
})
export default class {

}
