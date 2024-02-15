import './region_prefecture.css'; 

// TODO:市区町村、都道府県をAPI取得;
export class RegionPrefecture {
  private element: HTMLElement;

  constructor() {
    this.element = document.createElement('section');
    this.element.classList.add('region-prefecture-content'); 

    const region_texts = ["鳥取市","米子市","鳥取東部","米子・境港"]
    const prefecture_texts = ["鳥取県","島根県","岡山県","広島県","山口県","徳島県","香川県","愛媛県","高知県"]

      for(let region_prefecture_count = 0; region_prefecture_count < 2; region_prefecture_count++){
        const region_prefecture_div = document.createElement('div')
        region_prefecture_div.classList.add('region_prefecture_div')
        this.element.appendChild(region_prefecture_div)

        const region_prefecture_header = document.createElement('h3')
        region_prefecture_header.classList.add('region_prefecture_header')
        region_prefecture_div.appendChild(region_prefecture_header)

        const region_prefecture_span = document.createElement('span')
        region_prefecture_span.classList.add('region_prefecture_span')
        region_prefecture_header.appendChild(region_prefecture_span)

          if (region_prefecture_count === 0) {
            region_prefecture_span.textContent = "近隣の市区町村から探す"
            const region_ul = document.createElement('ul')
            region_ul.classList.add('region_prefecture_ul')
            region_prefecture_div.appendChild(region_ul)
              for(let region_count = 0; region_count < 4; region_count++){
                const region_li = document.createElement('li')
                region_li.classList.add('region_li')
                const text = region_texts[region_count];
                region_li.textContent = text
                region_ul.appendChild(region_li)
              }
          } else {
            region_prefecture_span.textContent = "近隣の都道府県から探す"
            const prefecture_ul = document.createElement('ul')
            prefecture_ul.classList.add('region_prefecture_ul')
            region_prefecture_div.appendChild(prefecture_ul)
            for(let prefecture_count = 0; prefecture_count < 9; prefecture_count++){
              const prefecture_li = document.createElement('li')
              prefecture_li.classList.add('prefecture_li')
              const text = prefecture_texts[prefecture_count];
              prefecture_li.textContent = text
              prefecture_ul.appendChild(prefecture_li)
            }

          }
      }

  }
  getElement(): HTMLElement {
    return this.element;
  }
}



