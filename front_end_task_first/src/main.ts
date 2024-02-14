import './main.css';
import { ShopHeader } from './shop_header';
import { MarkerBody } from './marker_body';
import { Question } from './question';

export class Main {
  private element: HTMLElement;
  
  constructor() {
    // HTMLDivElementとして初期化
    this.element = document.createElement('main');
    this.element.classList.add('main-content'); 

    const shopheader = new ShopHeader();
    this.element.appendChild(shopheader.getElement());

    const markerbody = new MarkerBody();
    this.element.appendChild(markerbody.getElement());

    const question = new Question();
    this.element.appendChild(question.getElement());

    // this.element.appendChild(content);
  }

  render(target: HTMLElement) {
    target.appendChild(this.element);
  }
}
