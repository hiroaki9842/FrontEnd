import './marker_body.css'; 

export class MarkerBody {
  private element: HTMLElement;

  constructor() {
    this.element = document.createElement('section');
    this.element.classList.add('marker-body-content'); 

    const marker_texts = ["トヨタ","日産","レクサス","ホンダ","スバル","ダイハツ","スズキ","マツダ"]
    const body_texts = ["軽自動車","コンパクトカー","ミニバン","SUV","セダン","ハイブリッド"]

      for(let marker_body_count = 0; marker_body_count < 2; marker_body_count++){
        const marker_body_div = document.createElement('div')
        marker_body_div.classList.add('marker_body_div')
        this.element.appendChild(marker_body_div)

        const marker_heder = document.createElement('h3')
        marker_heder.classList.add('marker_body_heder')
        marker_body_div.appendChild(marker_heder)

        const marker_heder_span = document.createElement('span')
        marker_heder_span.classList.add('marker_body_heder_span')
        marker_heder.appendChild(marker_heder_span)

          if (marker_body_count === 0) {
            marker_heder_span.textContent = "メーカーから鳥取県の中古車を探す"
            const marker_ul = document.createElement('ul')
            marker_ul.classList.add('marker__body_ul')
            marker_body_div.appendChild(marker_ul)
              for(let body_count = 0; body_count < 8; body_count++){
                const marker_li = document.createElement('li')
                marker_li.classList.add('marker_li')
                const text = marker_texts[body_count];
                marker_li.textContent = text
                marker_ul.appendChild(marker_li)
              }
          } else {
            marker_heder_span.textContent = "ボディタイプから鳥取県の中古車を探す"
            const body_ul = document.createElement('ul')
            body_ul.classList.add('marker__body_ul')
            marker_body_div.appendChild(body_ul)
            for(let body_count = 0; body_count < 6; body_count++){
              const body_li = document.createElement('li')
              body_li.classList.add('body_li')
              const text = body_texts[body_count];
              body_li.textContent = text
              body_ul.appendChild(body_li)
            }

          }
      }

  }
  getElement(): HTMLElement {
    return this.element;
  }
}