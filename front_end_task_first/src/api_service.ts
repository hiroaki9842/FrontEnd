//API呼び出しファイル

import { ShopRequest, ShopResponse} from './api_types';

//店舗取得APIのエンドポイント
const apiUrl = 'https://basis-public.221616.com/api/shops/search';

// リクエストを送信する関数(非同期処理)
export async function fetchShopData(requestParams: ShopRequest): Promise<ShopResponse> {
  // ShopRequest 文字列(string型)に変換
  const stringParams: Record<string, string> = {
    prefecture_cd: requestParams.prefecture_cd,
    // page: String(requestParams.page),
    // size: String(requestParams.size),
    // id: requestParams.id,
    // dept_kind_cd: requestParams.dept_kind_cd,
    // dept_type: requestParams.dept_type,
    // zone_cd: requestParams.zone_cd,
  };

 // URL を構築(例 https://basis-public.221616.com/api/shops/search?page=1)
  const urlParams = new URLSearchParams(stringParams);
  const url = `${apiUrl}?${urlParams}`;

  try {
    //fetchを使用して,先ほど作成したurlでAPIリクエストを実行
    const response = await fetch(url);

    if (!response.ok) {
      //レスポンスが正常ではない場合にエラーメッセージをスロー
      throw new Error(`異常なレスポンスです: ${response.status}`);
    }

    //レスポンスからJSON形式でデータを取得する
    const data = await response.json();

return data as ShopResponse;
} catch (error) {
  // API呼び出し時にエラーが起こった場合
  if (error instanceof Error) {
    console.error('店舗取得API中にエラーが発生しました:', error.message);
  } else {
    console.error('店舗取得API中に不明なエラーが発生しました:', error);
  }
  throw error;
}
}