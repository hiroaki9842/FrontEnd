import './header.css';

export class Header {
  private element: HTMLHeadElement;

  constructor() {
    // headerタグの生成
    this.element = document.createElement('header');

    // ヘッダー内部のdiv
    const headerInnerDiv = document.createElement('div');
    headerInnerDiv.classList.add('bs-header-inner');

    // Gulliverロゴ画像の表示
    const logoContainer = document.createElement('div');
    logoContainer.classList.add('bs-header-logo', 'left-align');

    const logoImage = document.createElement('img');
    logoImage.id = 'glv-logo-img';
    logoImage.src = '/logo.png';

    logoContainer.appendChild(logoImage);

    // お気に入りアイコンとテキストの表示
    const favologoContainer = this.createMenuContainer('/favorite.png', 'お気に入り', 'favo-logo-img', 'right-align');
    // 検索履歴のアイコンとテキスト表示
    const histologoContainer = this.createMenuContainer('/history.png', '検索履歴', 'histo-logo-img', 'right-align');

    // フリーダイヤル表示
    const freeTelContainer = document.createElement('div');
    freeTelContainer.classList.add('bs-header-tel', 'right-align');

    const freeTelNo = document.createElement('p');
    freeTelNo.id = 'free-tel-no';
    freeTelNo.textContent = '0120-22-1616';

    const freeTelText = document.createElement('p');
    freeTelText.id = 'free-tel-text';
    freeTelText.textContent = '中古車探し・無料査定のご相談';

    freeTelContainer.appendChild(freeTelNo);
    freeTelContainer.appendChild(freeTelText);

    // 要素の構成
    this.element.appendChild(headerInnerDiv);
    headerInnerDiv.appendChild(logoContainer);
    headerInnerDiv.appendChild(favologoContainer);
    headerInnerDiv.appendChild(histologoContainer);
    headerInnerDiv.appendChild(freeTelContainer);
  }

  private createMenuContainer(iconSrc: string, text: string, imgId: string, alignmentClass?: string): HTMLDivElement {
    const container = document.createElement('div');
    container.classList.add('bs-header-menu', alignmentClass || ''); 

    const iconImage = document.createElement('img');
    iconImage.src = iconSrc; 
    iconImage.alt = text;
    iconImage.width = 50;
    iconImage.height = 50;
    iconImage.classList.add('bs-header-menu--icn'); 
    iconImage.decoding = 'async';
    iconImage.id = imgId;

    const textElement = document.createElement('span');
    textElement.classList.add('bs-header-menu--txt'); 
    textElement.textContent = text;

    container.appendChild(iconImage);
    container.appendChild(textElement);

    return container;
  }

  render(target: HTMLElement) {
    target.appendChild(this.element);
  }
}
