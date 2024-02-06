"use strict";
class Header {
    constructor() {
        this.element = document.createElement('header');
        this.element.textContent = 'My Website Header';
    }
    render(target) {
        target.appendChild(this.element);
    }
}
const header = new Header();
header.render(document.getElementById('app'));
//# sourceMappingURL=index.js.map