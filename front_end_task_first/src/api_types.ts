//API型定義ファイル

//リクエストパラメーターの型定義
export interface ShopRequest {
  prefecture_cd: string;
  // page: number;
  // size: number;
  // id: string;
  // dept_kind_cd: string;
  // dept_type: string;
  // zone_cd: string;
}


//////レスポンスの型定義////////

//表示カレンダーの週に関して型定義
interface CalendarWeek {
  id: number[];
}

//営業時間カレンダーの型定義
interface Calendar {
  year: number;
  month: number;
  date: number;
  open_time: string;
  close_time: string;
  holiday_flag: boolean;
}

//店舗ラベルの型定義
interface ShopLabel {
  shop_label_category_id: number;
  shop_label_category_name: string;
  shop_label_id: number;
  shop_label_name: string;
}

//店舗画像の型定義
interface ShopImage {
  id: number;
  img_path: string;
  caption: string;
}

//店舗取得API全体の型定義
export interface ShopResponse {
  shop:{
    id: string;
    address1: string;
    address2: string;
    begin_date: string;
    calendars: {
      year: number;
      month: number;
      weeks: CalendarWeek[];
      holidays: number[];
    }[];
    channel: string;
    closing_time: string;
    del_flg: number;
    dept_kind_cd: string;
    dept_name: string;
    dept_name_kana: string;
    dept_note: string;
    dept_status_cd: string;
    dept_type: string;
    disp_dept_address: string;
    disp_dept_name: string;
    display_flg: number;
    fax: string;
    freedial: string;
    images: ShopImage[];
    img_path_main: string;
    img_path_qr: string;
    iv_url: string;
    keywords: string[];
    location: {
      lat: number;
      lon: number;
    };
    location_text: string;
    mail_address: string;
    map_img_url: string;
    message_title: string;
    next_day_closing_time: string;
    next_day_opening_time: string;
    open_date: string;
    opening_date: string;
    opening_time: string;
    open_and_close_date_calendars: {
      calendar: Calendar;
      open_time: string;
      close_time: string;
      holiday_flag: boolean;
    }[];
    owner_cd: string;
    owner_name: string;
    prefecture_cd: string;
    prefecture_id: string;
    prefecture_name: string;
    prefecture_name_kana: string;
    profile_img_path: string;
    profile_text: string;
    services: string[];
    shiku_cd: string;
    shiku_name: string;
    shiku_name_en: string;
    tel: string;
    timestamp: string;
    today_closing_time: string;
    today_opening_time: string;
    zip_code: string;
    zone_cd: string;
    zone_name: string;
    stock_tracking_no: string;
    shop_url: string;
    shop_labels: ShopLabel[];
  }[];
}
