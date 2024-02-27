import './shop_data.css';
import { fetchShopData } from './api_service';
export class ShopData {
    constructor() {
        this.fetchAndDisplayData();
        this.element = document.createElement('ul');
        this.element.classList.add('shop-list');
    }
    async fetchAndDisplayData() {
        try {
            const exampleRequest = {
                prefecture_cd: '31',
            };
            const response = await fetchShopData(exampleRequest);
            console.log("店舗取得API正常");
            if (response.shop && Array.isArray(response.shop) && response.shop.length > 0) {
                for (let shop_count = 0; shop_count < response.shop.length; shop_count++) {
                    const shop_li = document.createElement('li');
                    this.element.appendChild(shop_li);
                    const shop_info_div = document.createElement('div');
                    shop_info_div.classList.add('shop-info-div');
                    shop_info_div.setAttribute('data-hc-shop-code', response.shop[shop_count].id);
                    shop_li.appendChild(shop_info_div);
                    const shop_name_h3 = document.createElement('h3');
                    shop_name_h3.classList.add('shop-name-h3');
                    shop_name_h3.textContent = response.shop[shop_count].disp_dept_name;
                    shop_info_div.appendChild(shop_name_h3);
                    const shop_info_inner_div = document.createElement('div');
                    shop_info_inner_div.classList.add('shop-info-inner-div');
                    shop_info_div.appendChild(shop_info_inner_div);
                    const shop_info_img_div = document.createElement('div');
                    shop_info_img_div.classList.add('shop-info-img_div');
                    shop_info_inner_div.appendChild(shop_info_img_div);
                    const shop_info_img = document.createElement('img');
                    shop_info_img.classList.add('shop-info-img');
                    shop_info_img.src = response.shop[shop_count].profile_img_path;
                    shop_info_img_div.appendChild(shop_info_img);
                    const shop_info_text_div = document.createElement('div');
                    shop_info_text_div.classList.add('shop-info-text_div');
                    shop_info_inner_div.appendChild(shop_info_text_div);
                    const shop_info_text = document.createElement('p');
                    shop_info_text.classList.add('shop-info-text');
                    shop_info_text.textContent = response.shop[shop_count].profile_text;
                    shop_info_text_div.appendChild(shop_info_text);
                    const shop_info_detail = document.createElement('div');
                    shop_info_detail.classList.add('shop-info-detail');
                    shop_info_text_div.appendChild(shop_info_detail);
                    const shop_info_detail_dl = document.createElement('dl');
                    shop_info_detail_dl.classList.add('shop-info-detail-dl');
                    shop_info_detail.appendChild(shop_info_detail_dl);
                    const dt_text = ["住所", "電話番号", "店舗案内", "営業時間"];
                    for (let shop_info_detail_dtdd_count = 0; shop_info_detail_dtdd_count <= 3; shop_info_detail_dtdd_count++) {
                        const shop_info_detail_dt = document.createElement('dt');
                        shop_info_detail_dt.textContent = dt_text[shop_info_detail_dtdd_count];
                        shop_info_detail_dl.appendChild(shop_info_detail_dt);
                        const shop_info_detail_dd = document.createElement('dd');
                        shop_info_detail_dd.classList.add('shop-info-detail-dd');
                        switch (shop_info_detail_dtdd_count) {
                            case 0:
                                shop_info_detail_dd.textContent = response.shop[shop_count].disp_dept_address;
                                break;
                            case 1:
                                shop_info_detail_dd.textContent = response.shop[shop_count].freedial;
                                break;
                            case 2:
                                shop_info_detail_dd.textContent = response.shop[shop_count].location_text;
                                break;
                            case 3:
                                shop_info_detail_dd.textContent = `${response.shop[shop_count].next_day_opening_time} ~ ${response.shop[shop_count].next_day_closing_time}`;
                                const temporarily_closed_comment = document.createElement('p');
                                temporarily_closed_comment.classList.add('temporarily_closed_comment');
                                temporarily_closed_comment.textContent = "※都合により臨時休業となる場合がございます。";
                                shop_info_detail_dd.appendChild(temporarily_closed_comment);
                        }
                        shop_info_detail_dl.appendChild(shop_info_detail_dd);
                    }
                    const shop_info_button = document.createElement('div');
                    shop_info_button.classList.add('shop-info-button');
                    shop_info_inner_div.appendChild(shop_info_button);
                    const shop_info_button_ul = document.createElement('ul');
                    shop_info_button_ul.classList.add('shop-info-button-ul');
                    shop_info_button.appendChild(shop_info_button_ul);
                    for (let button_li_count = 0; button_li_count < 3; button_li_count++) {
                        const shop_info_button_li = document.createElement('li');
                        shop_info_button_li.classList.add('shop-info-button-li');
                        shop_info_button_ul.appendChild(shop_info_button_li);
                        switch (button_li_count) {
                            case 0:
                                const stock_button = document.createElement('div');
                                stock_button.classList.add('stock-button');
                                stock_button.textContent = "在庫紹介";
                                shop_info_button_li.appendChild(stock_button);
                                break;
                            case 1:
                                const reservation_button = document.createElement('div');
                                reservation_button.classList.add('reservation-button');
                                reservation_button.textContent = "来店予約";
                                shop_info_button_li.appendChild(reservation_button);
                                break;
                            case 2:
                                const banner_img = document.createElement('img');
                                banner_img.classList.add('banner-img');
                                shop_info_button_li.appendChild(banner_img);
                                break;
                        }
                    }
                }
                console.log('Shop :', response.shop.length);
                console.log('Shop :', response.shop[0]);
                console.log('休日(月):', response.shop[1].calendars[0].month);
                console.log('休日(日):', response.shop[1].calendars[0].holidays);
            }
            else {
                console.error('取得したデータが不正です。');
            }
        }
        catch (error) {
            if (error instanceof Error) {
                console.error('店舗取得API中にエラーが発生しました:', error.message);
            }
            else {
                console.error('店舗取得API中に不明なエラーが発生しました:', error);
            }
        }
    }
    getElement() {
        return this.element;
    }
}
//# sourceMappingURL=shop_data.js.map