import './shop_data.css'; 

//API関連フィイルのインポート
import { fetchShopData } from './api_service';
import { ShopRequest } from './api_types';
import { ShopResponse } from './api_types';

export class ShopData {
  private element: HTMLElement;

  constructor() {
    //API使用
    this.fetchAndDisplayData();

    //初期設定
    this.element = document.createElement('ul'); 
    this.element.classList.add('shop-list');

  }

  private async fetchAndDisplayData() {
  try {
    // 都道府県コード指定
    const exampleRequest: ShopRequest = {
      prefecture_cd: '31',
    };

    const response: ShopResponse = await fetchShopData(exampleRequest);

    console.log("店舗取得API正常");
    if (response.shop && Array.isArray(response.shop) && response.shop.length > 0) {    
      for(let shop_count = 0; shop_count < response.shop.length; shop_count++){
        const shop_li = document.createElement('li')
        this.element.appendChild(shop_li)
        
        const shop_info_div = document.createElement('div')
        shop_info_div.classList.add('shop-info-div')
        shop_info_div.setAttribute('data-hc-shop-code', response.shop[shop_count].id);
        shop_li.appendChild(shop_info_div)

          //店舗名
          const shop_name_h3 = document.createElement('h3')
          shop_name_h3.classList.add('shop-name-h3')
          shop_name_h3.textContent = response.shop[shop_count].disp_dept_name
          shop_info_div.appendChild(shop_name_h3)

          //各店舗情報全体
          const shop_info_inner_div = document.createElement('div')
          shop_info_inner_div.classList.add('shop-info-inner-div')
          shop_info_div.appendChild(shop_info_inner_div)

            //店舗トップ画像
            const shop_info_img_div = document.createElement('div')
            shop_info_img_div.classList.add('shop-info-img_div')
            shop_info_inner_div.appendChild(shop_info_img_div)

              const shop_info_img = document.createElement('img')
              shop_info_img.classList.add('shop-info-img')
              shop_info_img.src = response.shop[shop_count].profile_img_path //TODO:画像が表示できるようにする
              shop_info_img_div.appendChild(shop_info_img)

            //店舗情報テキスト
            const shop_info_text_div = document.createElement('div')
            shop_info_text_div.classList.add('shop-info-text_div')
            shop_info_inner_div.appendChild(shop_info_text_div)

              //プロフィールテキスト
              const shop_info_text = document.createElement('p')
              shop_info_text.classList.add('shop-info-text')
              shop_info_text.textContent = response.shop[shop_count].profile_text 
              shop_info_text_div.appendChild(shop_info_text)

              //店舗データ
              const shop_info_detail = document.createElement('div')
              shop_info_detail.classList.add('shop-info-detail')
              shop_info_text_div.appendChild(shop_info_detail)

                const shop_info_detail_dl = document.createElement('dl')
                shop_info_detail_dl.classList.add('shop-info-detail-dl')
                shop_info_detail.appendChild(shop_info_detail_dl)

                //dt内容の初期設定
                const dt_text =["住所","電話番号","店舗案内","営業時間"]

                for(let shop_info_detail_dtdd_count = 0; shop_info_detail_dtdd_count <= 3; shop_info_detail_dtdd_count++){
                  const shop_info_detail_dt = document.createElement('dt')
                  shop_info_detail_dt.textContent = dt_text[shop_info_detail_dtdd_count]
                  shop_info_detail_dl.appendChild(shop_info_detail_dt)

                  const shop_info_detail_dd = document.createElement('dd')
                  shop_info_detail_dd.classList.add('shop-info-detail-dd')

                  //ddに追加する要素の判断
                  switch(shop_info_detail_dtdd_count){
                  case 0:
                    shop_info_detail_dd.textContent = response.shop[shop_count].disp_dept_address
                    break

                  case 1:
                    shop_info_detail_dd.textContent = response.shop[shop_count].freedial
                    break

                  case 2:
                    shop_info_detail_dd.textContent = response.shop[shop_count].location_text
                    break

                  case 3:
                    if(response.shop[shop_count].today_opening_time == null){
                      shop_info_detail_dd.textContent = "休業中"
                    }else{
                      shop_info_detail_dd.textContent = `${response.shop[shop_count].today_opening_time} ~ ${response.shop[shop_count].today_closing_time} 現在営業中`;
                    }
                    const closed_day = document.createElement('p')
                    closed_day.classList.add('closed-day')
                    if (
                      response.shop[shop_count].calendars &&
                      response.shop[shop_count].calendars.length > 0 &&
                      response.shop[shop_count].calendars[0] &&
                      response.shop[shop_count].calendars[0].month !== undefined
                    ) {
                      closed_day.textContent = `【休店日】${response.shop[shop_count].calendars[0].month}月${response.shop[shop_count].calendars[0].holidays}/${response.shop[shop_count].calendars[1].month}月${response.shop[shop_count].calendars[1].holidays}`;
                    } else {
                      closed_day.textContent = "【休店日】2月 未定 / 3月 未定";
                    }
                    shop_info_detail_dd.appendChild(closed_day)
                    //臨時休業に関してのコメント
                    const temporarily_closed_comment = document.createElement('p')
                    temporarily_closed_comment.classList.add('temporarily_closed_comment')
                    temporarily_closed_comment.textContent = "※都合により臨時休業となる場合がございます。"
                    shop_info_detail_dd.appendChild(temporarily_closed_comment)
                  }
                  shop_info_detail_dl.appendChild(shop_info_detail_dd)
                }

            //店舗バナー・ボタン
            const shop_info_button = document.createElement('div')
            shop_info_button.classList.add('shop-info-button')
            shop_info_inner_div.appendChild(shop_info_button)
            
                const shop_info_button_ul = document.createElement('ul')
                shop_info_button_ul.classList.add('shop-info-button-ul')
                shop_info_button.appendChild(shop_info_button_ul)

                for(let button_li_count = 0; button_li_count < 3; button_li_count++){
                  const shop_info_button_li = document.createElement('li')
                  shop_info_button_li.classList.add('shop-info-button-li')
                  shop_info_button_ul.appendChild(shop_info_button_li)

                  switch(button_li_count){
                    case 0:
                      const stock_button = document.createElement('div')
                      stock_button.classList.add('stock-button')
                      stock_button.textContent = "在庫紹介"
                      shop_info_button_li.appendChild(stock_button)
                      break

                    case 1:
                      const reservation_button = document.createElement('div')
                      reservation_button.classList.add('reservation-button')
                      reservation_button.textContent = "来店予約"
                      shop_info_button_li.appendChild(reservation_button)
                      break

                    case 2:
                      const banner_img = document.createElement('img')
                      banner_img.classList.add('banner-img')
                      shop_info_button_li.appendChild(banner_img)
                      break
                }
      }
    }

      ////////// ログ表示//////////////////////////////////////////
      //TODO:ラベル表示// 
      console.log('shop_labels:', response.shop[0].shop_labels[0]);
      console.log('shop_labels:', response.shop[0].shop_labels[0].shop_label_name);
      console.log('shop_labels:', response.shop[1].shop_labels);
      console.log('shop_labels:', response.shop[2].shop_labels);
      console.log('shop_labels:', response.shop[2].shop_labels[0].shop_label_name);
      console.log('shop_labels:', response.shop[2].shop_labels[1].shop_label_name);
      console.log('shop_labels:', response.shop[2].shop_labels[2].shop_label_name);
      console.log('shop_labels:', response.shop[3].shop_labels);
      console.log('shop_labels:', response.shop[3].shop_labels[0].shop_label_name);
      console.log('shop_labels:', response.shop[3].shop_labels[1].shop_label_name);
      console.log('shop_labels:', response.shop[3].shop_labels[2].shop_label_name);
      // console.log('shop_labels:', response.shop[3].shop_labels);
    
      

     ////////// ログ表示//////////////////////////////////////////

    } else {
      console.error('取得したデータが不正です。');
    }

  } catch (error) {
    if (error instanceof Error) {
      console.error('店舗取得API中にエラーが発生しました:', error.message);
    } else {
      console.error('店舗取得API中に不明なエラーが発生しました:', error);
    }
  }
}
  getElement(): HTMLElement {
    return this.element;
  }
}
