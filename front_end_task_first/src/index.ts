import { Header } from './header';
import { Main } from './main';
import { Nav } from './nav';
import { Footer } from './footer';

//API関連フィイルのインポート
import { fetchShopData } from './api_service';
import { ShopRequest } from './api_types';
import { ShopResponse } from './api_types';


const body = document.body;
body.style.margin = '0'

const header = new Header();
header.render(body);

const main = new Main();
main.render(body);

const nav = new Nav();
nav.render(body);

const footer = new Footer();
footer.render(body);

//都道府県コード指定
const exampleRequest: ShopRequest = {
  prefecture_cd: '31',
};

//API使用
fetchShopData(exampleRequest)
  .then((response: ShopResponse) => {
    console.log("店舗取得API正常");
    console.log('Shop data:', response);
  })
  .catch((error: Error) => {
    if (error instanceof Error) {
      console.error('店舗取得API中にエラーが発生しました:', error.message);
    } else {
      console.error('店舗取得API中に不明なエラーが発生しました:', error);
    }
  });