import './main.css'; // main.css をインポート
import { ShopHeader } from './shop_header';
import { Question } from './question';

export class Main {
  private element: HTMLElement;
  
  constructor() {
    // HTMLDivElementとして初期化
    this.element = document.createElement('main');
    this.element.classList.add('main-content'); 


    // // ここにメインコンテンツの内容を追加する
    // const content = document.createElement('p');
    // content.textContent = 'メインコンテンツの内容';

    const shopheader = new ShopHeader();
    this.element.appendChild(shopheader.getElement());

    const question = new Question();
    this.element.appendChild(question.getElement());

    // this.element.appendChild(content);
  }

  render(target: HTMLElement) {
    target.appendChild(this.element);
  }
}
