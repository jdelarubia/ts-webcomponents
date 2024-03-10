"use strict";
/**
 * wc-word-count.ts
 *
 * Creates an editable textarea which shows the number of words on the bottom right corner.
 * The position and look of element can be set via CSS.
 * Possible attributes:
 * - width & height: give dimensions to the textarea
 * - refreshrate: frequency (in milliseconds) at which for counting the number of words
 * - placeholder: phrase to be displayed in the textarea
 * - resize: ability of the textarea to be resized (true or false)
 */
class WordCount extends HTMLElement {
    template;
    initText;
    refreshRate;
    // defaults
    static REFRESH = 2500;
    static WIDTH = '20em';
    static HEIGHT = '10em';
    static RESIZE = true;
    static INITTEXT = 'Enter some text here...';
    static CSSFILE = './src/wc-word-count.css';
    constructor(attrs = {}) {
        super();
        this.refreshRate = this._getRefreshRate() || attrs?.refreshRate || WordCount.REFRESH;
        this.initText = this.textContent || attrs?.initText || WordCount.INITTEXT;
        this.textContent = '';
        this.template = document.createElement('template');
        this.template.innerHTML = this._render();
    }
    connectedCallback() {
        this.appendChild(this.template.content.cloneNode(true));
        const editableContent = this.querySelector('textarea');
        const wordCount = this.querySelector('div#word-counter');
        setInterval(() => {
            const content = editableContent.value || '';
            wordCount.textContent = this.countWords(content).toString();
        }, this.refreshRate);
    }
    _getResize() {
        const resize = this.getAttribute('resize')?.toLowerCase();
        return resize === 'false' ? 'none' : 'both';
    }
    _getRefreshRate() {
        const refreshRate = this.getAttribute('refreshrate');
        return parseInt(refreshRate) || null;
    }
    _getElementDimensions() {
        const width = this.getAttribute('width');
        const height = this.getAttribute('height');
        return [height ? height : WordCount.HEIGHT, width ? width : WordCount.WIDTH];
    }
    _render() {
        const [height, width] = this._getElementDimensions();
        const resize = this._getResize();
        const css = `<style> @import ${WordCount.CSSFILE}; </style>`;
        const html = `<div class="word-counter" style="width: ${width}; height: ${height}">
    <textarea id="word-counter-container" placeholder="${this.initText}" style="resize:${resize}"></textarea>
    <div id="word-counter"></div>
    </div>`;
        return css + html;
    }
    /**
     * Given some text, return the number of words in that text.
     * @param textContent
     * @return number
     */
    countWords(textContent) {
        if (textContent == '' || textContent.length === 0 || !textContent)
            return 0;
        return textContent.trim().toLocaleLowerCase().split(' ').length;
    }
} //. WordCount
window.customElements.define('wc-word-count', WordCount);
// Create and add a WordCount component programmatically
// const secondHalf = document.querySelector('#second-half')
// secondHalf?.appendChild(
//   new WordCount({
//     width: '10em',
//     height: '5em',
//     initText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
//   })
// )
