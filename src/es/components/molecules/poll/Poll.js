import { Shadow } from '../../web-components-toolbox/src/es/components/prototypes/Shadow.js'

export default class Poll extends Shadow() {
    constructor(options = {}, ...args) {
        super({ importMetaUrl: import.meta.url, tabindex: 'no-tabindex', ...options }, ...args)
    }

    connectedCallback() {
        if (this.shouldRenderCSS()) this.renderCSS()
    }

    shouldRenderCSS() {
        return !this.root.querySelector(`:host > style[_css], ${this.tagName} > style[_css]`)
    }

    renderCSS() {
        this.css = /* css */`
   
   `
        return this.fetchTemplate()
    }

    fetchTemplate() {
        /** @type {import("../../web-components-toolbox/src/es/components/prototypes/Shadow.js").fetchCSSParams[]} */
        const styles = [
            {
                path: `${this.importMetaUrl}../../web-components-toolbox/src/css/reset.css`, // no variables for this reason no namespace
                namespace: false
            },
            {
                path: `${this.importMetaUrl}../../web-components-toolbox/src/css/style.css`, // apply namespace and fallback to allow overwriting on deeper level
                namespaceFallback: false
            }
        ]
        switch (this.getAttribute('namespace')) {
            case 'poll-default-':
                return this.fetchCSS([{
                    path: `${this.importMetaUrl}./default-/default-.css`, // apply namespace since it is specific and no fallback
                    namespace: false
                }, ...styles])
            default:
                return this.fetchCSS([{
                    path: `${this.importMetaUrl}./default-/default-.css`, // apply namespace since it is specific and no fallback
                    namespace: false
                }, ...styles])
        }

    }
}
