import './shop_options_top.css'; 

// TODO:検索件数をAPIで取得する
export class ShopOptionsTop {
  private element: HTMLElement;

  constructor() {
    this.element = document.createElement('div');
    this.element.classList.add('shop-options-top-div')

    //検索結果件数表示
    const shop_count_div = document.createElement('div')
    shop_count_div.classList.add('shop-count-div')
    shop_count_div.textContent = "検索結果 : "
    this.element.appendChild(shop_count_div)

    const shop_count_strong = document.createElement('strong')
    shop_count_strong.classList.add('shop-count-strong')
    shop_count_div.appendChild(shop_count_strong)

    for(let shop_span_count = 0; shop_span_count < 2; shop_span_count++){
      const shop_span = document.createElement('span')
        switch(shop_span_count){
          case 0:
            shop_span.classList.add('shop-span')
            shop_span.textContent = "4"
            shop_count_strong.appendChild(shop_span)
            break
          case 1:
            shop_span.textContent = "店"
            shop_count_strong.appendChild(shop_span)
            break
        }
      shop_count_strong.appendChild(shop_span)
    }

    //件数セレクトリストと市区町村絞り込みボタン
    const shop_select_list = document.createElement('ul')
    shop_select_list.classList.add('shop-select-list')
    this.element.appendChild(shop_select_list)

    for(let shop_li_count = 0; shop_li_count < 2; shop_li_count++){
      const shop_li = document.createElement('li')
      shop_li.classList.add('shop-li')
      shop_select_list.appendChild(shop_li)

      switch(shop_li_count){
        case 0://プルダウン表示
          const shop_form_list = document.createElement('form')
          shop_li.appendChild(shop_form_list)

          const shop_form_input = document.createElement('input')
          shop_form_input.type = 'hidden'
          shop_form_input.id = 'pagNo'
          shop_form_input.name = 'pageNo'
          shop_form_input.value = '1'
          shop_form_list.appendChild(shop_form_input)

          const shop_form_pulldown = document.createElement('div')
          shop_form_pulldown.classList.add('shop-form-pulldown')
          shop_form_list.appendChild(shop_form_pulldown)

          const shop_form_select = document.createElement('select')
          shop_form_select.classList.add('shop-form-select')
          shop_form_select.name = 'maxrows'
          shop_form_select.id ='maxrows-top'
          shop_form_pulldown.appendChild(shop_form_select)

          for (let option_count = 1; option_count <= 3; option_count++){
            const shop_form_select_option = document.createElement('option');
            shop_form_select_option.value = String(option_count * 30); 
            shop_form_select_option.textContent = `${option_count * 30}件ずつ`;
            shop_form_select.appendChild(shop_form_select_option);
          }
          break

        case 1://市区町村での絞り込みボタンの表示
          const region_choice_btn = document.createElement('div')
          region_choice_btn.classList.add('region_choice_btn')
          region_choice_btn.textContent = "市区町村を絞り込む"
          shop_li.appendChild(region_choice_btn)
          break
      }
    }
  }
  getElement(): HTMLElement {
    return this.element;
  }
}

