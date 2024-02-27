import './header.css';
export class Header {
    constructor() {
        this.element = document.createElement('header');
        const headerInnerH2 = document.createElement('h6');
        headerInnerH2.classList.add('bs-header-inner-h2');
        headerInnerH2.textContent = "鳥取県の中古車販売・買取店舗一覧";
        this.element.appendChild(headerInnerH2);
        const headerInnerDiv = document.createElement('div');
        headerInnerDiv.classList.add('bs-header-inner');
        const three_item_div = document.createElement('div');
        three_item_div.classList.add('three-item-div');
        const logoContainer = document.createElement('div');
        logoContainer.classList.add('bs-header-logo');
        const logoImage = document.createElement('img');
        logoImage.id = 'glv-logo-img';
        logoImage.src = '/logo.png';
        logoContainer.appendChild(logoImage);
        const favologoContainer = this.createMenuContainer('/favorite.png', 'お気に入り(0件)', 'favo-logo-img', 'right-align');
        const histologoContainer = this.createMenuContainer('/history.png', '検索履歴', 'histo-logo-img', 'right-align');
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
        this.element.appendChild(headerInnerDiv);
        headerInnerDiv.appendChild(logoContainer);
        headerInnerDiv.appendChild(three_item_div);
        three_item_div.appendChild(favologoContainer);
        three_item_div.appendChild(histologoContainer);
        three_item_div.appendChild(freeTelContainer);
        const header_nav = document.createElement('nav');
        header_nav.classList.add('header_nav');
        this.element.appendChild(header_nav);
        const header_nav_inner_div = document.createElement('div');
        header_nav_inner_div.classList.add('header-nav-inner-div');
        header_nav.appendChild(header_nav_inner_div);
        const navi_texts = ["中古車選択", "店舗検索", "車購入", "車購入ガイド", "ローン", "車検整備", "自動車保険", "お客様の評価"];
        for (let nav_item_count = 0; nav_item_count <= 7; nav_item_count++) {
            const nav_item = document.createElement('div');
            nav_item.classList.add('nav-item');
            const text = navi_texts[nav_item_count];
            nav_item.textContent = text;
            header_nav_inner_div.appendChild(nav_item);
        }
    }
    createMenuContainer(iconSrc, text, imgId, alignmentClass) {
        const container = document.createElement('div');
        container.classList.add('bs-header-menu', alignmentClass || '');
        const iconImage = document.createElement('img');
        iconImage.src = iconSrc;
        iconImage.alt = text;
        iconImage.width = 40;
        iconImage.height = 40;
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
    render(target) {
        target.appendChild(this.element);
    }
}
//# sourceMappingURL=header.js.map