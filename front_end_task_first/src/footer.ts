import './footer.css'; // nav.css をインポート

export class Footer {
  private element: HTMLElement;

  constructor() {
    this.element = document.createElement('footer');
    this.element.classList.add('footer-content'); 
  }
  
  render(target: HTMLElement) {
    target.appendChild(this.element);
  }
}
