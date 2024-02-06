// src/index.ts
class Header {
  private element: HTMLElement;

  constructor() {
      this.element = document.createElement('header');
      this.element.textContent = 'My Website Header';
  }

  render(target: HTMLElement) {
      target.appendChild(this.element);
  }
}

const header = new Header();
header.render(document.getElementById('app')!);
