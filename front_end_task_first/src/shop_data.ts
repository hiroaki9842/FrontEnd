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
    this.element = document.createElement('div'); 
    this.element.classList.add('testtesttesttest');

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
      console.log('Shop :', response.shop.length);
      console.log('Shop :', response.shop[0]);
      console.log('Shop ID:', response.shop[0].id);

      this.element.textContent = response.shop[0].id

      const shop_name = document.createElement('div'); 
      shop_name.classList.add('shop_name');
      this.element.appendChild(shop_name)
      shop_name.textContent = response.shop[0].id

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
