import './shop_header.css'; // main.css をインポート

export class ShopHeader {
  private element: HTMLElement;

  constructor() {
    this.element = document.createElement('div');
    this.element.classList.add('shop-header');

      //店舗ヘッダー(大見出し)
      const headerContent = document.createElement('h2');
      headerContent.classList.add('header-content');
      headerContent.textContent = '鳥取県の中古車販売・買取店舗を探す';
      this.element.appendChild(headerContent);

      //中テキスト
      const header_middle = document.createElement('p');
      header_middle.classList.add('header-ls');
      header_middle.textContent = "鳥取県の中古車買取・販売店舗を検索できます。"

        const brElement = document.createElement('br');
        header_middle.appendChild(brElement);
        header_middle.appendChild(document.createTextNode("ガリバー店舗では鳥取県内の中古車在庫だけでなく全国の中古車を販売・ご案内可能！車買取にも自信あり！来店予約の上お越しいただけるとスムーズにご案内が可能です。"));
        this.element.appendChild(header_middle);
      
      //小テキスト
      const header_small = document.createElement('p');
      header_small.classList.add('header-ls');
      this.element.appendChild(header_small);

        const header_small_text = document.createElement('span')
        header_small_text.classList.add('small-text')
        header_small_text.textContent = "お近くの中古車販売をする各店舗に、最新情報・営業時間・休業日をお問い合わせください。"
        header_small.appendChild(header_small_text)

      //注意書き
      const header_ul = document.createElement('ul');
      header_ul.classList.add("ul-text")

        const header_li = document.createElement('li')
        header_li.classList.add("li-text")
        header_li.textContent = "地域や車両によりお伺い出来ない場合もございます。"
        header_ul.appendChild(header_li)
      
      this.element.appendChild(header_ul)

  }

  getElement(): HTMLElement {
    return this.element;
  }
}
