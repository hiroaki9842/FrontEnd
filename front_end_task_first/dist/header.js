export class Header {
    constructor() {
        this.element = document.createElement('header');
        const bsh1 = document.createElement('h1');
        bsh1.textContent = '鳥取県の中古車販売・買取店舗一覧';
        this.element.appendChild(bsh1);
        const logoContainer = document.createElement('div');
        const logoImage = document.createElement('img');
        logoImage.src = '/public/logo.png';
        logoContainer.appendChild(logoImage);
        this.element.appendChild(logoContainer);
    }
    render(target) {
        target.appendChild(this.element);
    }
}
//# sourceMappingURL=header.js.map