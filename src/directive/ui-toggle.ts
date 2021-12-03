import { Directive } from 'nefbl'
import xhtml from '@hai2007/tool/xhtml'

@Directive({
    selector: "ui-toggle"
})
export default class {

    $inserted(el, binding) {

        let _el = el.parentNode

        _el.setAttribute('active', 'yes')
        xhtml.bind(el, 'click', event => {
            _el.setAttribute('active', _el.getAttribute('active') == 'yes' ? 'no' : 'yes')
        })

    }
}
