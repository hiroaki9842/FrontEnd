import './main.css';
import { ShopHeader } from './shop_header';
import { Question } from './question';
export class Main {
    constructor() {
        this.element = document.createElement('main');
        this.element.classList.add('main-content');
        const shopheader = new ShopHeader();
        this.element.appendChild(shopheader.getElement());
        const question = new Question();
        this.element.appendChild(question.getElement());
    }
    render(target) {
        target.appendChild(this.element);
    }
}
//# sourceMappingURL=main.js.map