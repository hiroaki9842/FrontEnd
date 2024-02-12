import './main.css';
export class Main {
    constructor() {
        this.element = document.createElement('main');
        this.element.classList.add('main-content');
        const content = document.createElement('p');
        content.textContent = 'メインコンテンツの内容';
        this.element.appendChild(content);
    }
    render(target) {
        target.appendChild(this.element);
    }
}
//# sourceMappingURL=main.js.map