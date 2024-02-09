import './footer.css'; // nav.css をインポート

export class Footer {
  private element: HTMLElement;

  constructor() {
    this.element = document.createElement('footer');
    this.element.classList.add('footer-content'); 

    const footer_inner_div = document.createElement('div');
    footer_inner_div.classList.add('footer_contena');
    this.element.appendChild(footer_inner_div);

    const footer_copyright = document.createElement('small')
    footer_copyright.classList.add('footer_copyright');
    footer_inner_div.appendChild(footer_copyright);

    const footer_item = document.createElement('span')
    footer_item.classList.add('footer_copyright');
    footer_item.textContent = "©2000 - 2024 IDOM Inc."
    footer_copyright.appendChild(footer_item);
  }
  
  render(target: HTMLElement) {
    target.appendChild(this.element);
  }
}
