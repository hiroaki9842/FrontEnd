// main.ts

import './main.css'; // main.css をインポート

export class Main {
  private element: HTMLElement;

  constructor() {
    // HTMLDivElementとして初期化
    this.element = document.createElement('main');
    this.element.classList.add('main-content'); // main-content クラスを追加

    // ここにメインコンテンツの内容を追加する

    const content = document.createElement('p');
    content.textContent = 'メインコンテンツの内容';

    this.element.appendChild(content);
  }

  render(target: HTMLElement) {
    target.appendChild(this.element);
  }
}
