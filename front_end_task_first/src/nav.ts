import './nav.css'; // nav.css をインポート

export class Nav {
  private element: HTMLElement;

  constructor() {
    // navタグ
    this.element = document.createElement('nav');
    this.element.classList.add('nav-content'); 

      //大見出し
      const major_items = document.createElement('h2');
      major_items.classList.add('major_item');
      major_items.textContent = 'お役立ち情報'
      this.element.appendChild(major_items)

    //項目全体のdiv
    const content_main_div = document.createElement('div')
    content_main_div.classList.add('content_main_div')
    this.element.appendChild(content_main_div);

    //項目インナーのdiv
    const content_inner_div = document.createElement('div');
    content_inner_div.classList.add('nav-inner-text');
    content_main_div.appendChild(content_inner_div);
    
      //フッター(左から１番目の項目全体)
      const content_item_first_div = document.createElement('div');
      content_item_first_div.classList.add('item_div');
      content_inner_div.appendChild(content_item_first_div);

        //中見出し
        const middle_first_item = document.createElement('h3');
        middle_first_item.textContent = '中古車を探す・買う';
        content_item_first_div.appendChild(middle_first_item);

        //項目
        const small_item_first_div = document.createElement('div');
        small_item_first_div.classList.add('small_item');
        content_item_first_div.appendChild(small_item_first_div);

          const small_item_first_1 = document.createElement('p');
          small_item_first_1.textContent = '中古車情報・中古車検索';
          small_item_first_div.appendChild(small_item_first_1);

          const small_item_first_2 = document.createElement('p');
          small_item_first_2.textContent = '中古車ご提案サービス';
          small_item_first_div.appendChild(small_item_first_2);

          const small_item_first_3 = document.createElement('p');
          small_item_first_3.textContent = '初めての中古車購入ガイド';
          small_item_first_div.appendChild(small_item_first_3);

          const small_item_first_4 = document.createElement('p');
          small_item_first_4.textContent = 'ガリバーのサービス';
          small_item_first_div.appendChild(small_item_first_4);

          const small_item_first_5 = document.createElement('p');
          small_item_first_5.textContent = '中古車人気ランキング';
          small_item_first_div.appendChild(small_item_first_5);

          const small_item_first_6 = document.createElement('p');
          small_item_first_6.textContent = '自動車ローンを調べる';
          small_item_first_div.appendChild(small_item_first_6);

          const small_item_first_7 = document.createElement('p');
          small_item_first_7.textContent = 'ガリバーの自動車ローン';
          small_item_first_div.appendChild(small_item_first_7);

          const small_item_first_8 = document.createElement('p');
          small_item_first_8.textContent = 'ガリバーの自動車保険';
          small_item_first_div.appendChild(small_item_first_8);

          const small_item_first_9 = document.createElement('p');
          small_item_first_9.textContent = '車買い替えの基礎知識';
          small_item_first_div.appendChild(small_item_first_9);

          const small_item_first_10 = document.createElement('p');
          small_item_first_10.textContent = '近くのお店で車を探す';
          small_item_first_div.appendChild(small_item_first_10);

      //nav(左から2番目の項目全体)
      const content_item_second_div = document.createElement('div');
      content_item_second_div.classList.add('item_div');
      content_inner_div.appendChild(content_item_second_div);

        //中見出し
        const middle_second_item = document.createElement('h3');
        middle_second_item.textContent = '車の査定買取';
        content_item_second_div.appendChild(middle_second_item);

        //項目
        const small_item_second_div = document.createElement('div');
        small_item_second_div.classList.add('small_item');
        content_item_second_div.appendChild(small_item_second_div);

          const small_item_second_1 = document.createElement('p');
          small_item_second_1.textContent = '車査定・車買取ならガリバー';
          small_item_second_div.appendChild(small_item_second_1);

          const small_item_second_2 = document.createElement('p');
          small_item_second_2.textContent = '車査定売却ガイド';
          small_item_second_div.appendChild(small_item_second_2);

          const small_item_second_3 = document.createElement('p');
          small_item_second_3.textContent = 'ガリバーの査定が選ばれる理由';
          small_item_second_div.appendChild(small_item_second_3);

          const small_item_second_4 = document.createElement('p');
          small_item_second_4.textContent = '車を売る時よくある質問';
          small_item_second_div.appendChild(small_item_second_4);

          const small_item_second_5 = document.createElement('p');
          small_item_second_5.textContent = '便利な査定サービス';
          small_item_second_div.appendChild(small_item_second_5);
          
          const small_item_second_6 = document.createElement('p');
          small_item_second_6.textContent = '中古車買取相場';
          small_item_second_div.appendChild(small_item_second_6);

          const small_item_second_7 = document.createElement('p');
          small_item_second_7.textContent = '車の個人売買ガイド';
          small_item_second_div.appendChild(small_item_second_7);

          const small_item_second_8 = document.createElement('p');
          small_item_second_8.textContent = '中古車オークションガイド';
          small_item_second_div.appendChild(small_item_second_8);

      //nav(左から3番目の項目全体)
      const content_item_third_div = document.createElement('div');
      content_item_third_div.classList.add('item_div');
      content_inner_div.appendChild(content_item_third_div);

        //中見出し
        const middle_third_item = document.createElement('h3');
        middle_third_item.textContent = '車のことを調べる';
        content_item_third_div.appendChild(middle_third_item);

        //項目
        const small_item_third_div = document.createElement('div');
        small_item_third_div.classList.add('small_item');
        content_item_third_div.appendChild(small_item_third_div);

          const small_item_third_1 = document.createElement('p');
          small_item_third_1.textContent = '車初心者まとめ';
          small_item_third_div.appendChild(small_item_third_1);

          const small_item_third_2 = document.createElement('p');
          small_item_third_2.textContent = '自動車ニュース';
          small_item_third_div.appendChild(small_item_third_2);

          const small_item_third_3 = document.createElement('p');
          small_item_third_3.textContent = '新車・中古車カタログ';
          small_item_third_div.appendChild(small_item_third_3);

          const small_item_third_4 = document.createElement('p');
          small_item_third_4.textContent = '車の燃費を調べる';
          small_item_third_div.appendChild(small_item_third_4);

          const small_item_third_5 = document.createElement('p');
          small_item_third_5.textContent = '車種別クチコミ';
          small_item_third_div.appendChild(small_item_third_5);

          const small_item_third_6 = document.createElement('p');
          small_item_third_6.textContent = '車比較サイト';
          small_item_third_div.appendChild(small_item_third_6);

      //nav(左から4番目の項目全体)
      const content_item_four_div = document.createElement('div');
      content_item_four_div.classList.add('item_div');
      content_inner_div.appendChild(content_item_four_div);

        //中見出し
        const middle_four_item = document.createElement('h3');
        middle_four_item.textContent = 'サイト内リンク';
        content_item_four_div.appendChild(middle_four_item);

        //項目
        const small_item_four_div = document.createElement('div');
        small_item_four_div.classList.add('small_item');
        content_item_four_div.appendChild(small_item_four_div);

          const small_item_four_1 = document.createElement('p');
          small_item_four_1.textContent = 'サイト内検索';
          small_item_four_div.appendChild(small_item_four_1);

          const small_item_four_2 = document.createElement('p');
          small_item_four_2.textContent = 'サイトマップ';
          small_item_four_div.appendChild(small_item_four_2);

          const small_item_four_3 = document.createElement('p');
          small_item_four_3.textContent = 'サイトの使用条件';
          small_item_four_div.appendChild(small_item_four_3);

          const small_item_four_4 = document.createElement('p');
          small_item_four_4.textContent = '利用規約';
          small_item_four_div.appendChild(small_item_four_4);

          const small_item_four_5 = document.createElement('p');
          small_item_four_5.textContent = '個人情報の保護について';
          small_item_four_div.appendChild(small_item_four_5);

          const small_item_four_6 = document.createElement('p');
          small_item_four_6.textContent = '古物営業法に基づく表示';
          small_item_four_div.appendChild(small_item_four_6);
          
          const small_item_four_7 = document.createElement('p');
          small_item_four_7.textContent = 'アフィリエイトパートナー募集';
          small_item_four_div.appendChild(small_item_four_7);

          const small_item_four_8 = document.createElement('p');
          small_item_four_8.textContent = 'お客様の声';
          small_item_four_div.appendChild(small_item_four_8);

          const small_item_four_9 = document.createElement('p');
          small_item_four_9.textContent = '会社案内';
          small_item_four_div.appendChild(small_item_four_9);

          const small_item_four_10 = document.createElement('p');
          small_item_four_10.classList.add('btn-inq-usefullinfo');
          const btn_inq_ttl = document.createElement('span')
          btn_inq_ttl.classList.add('btn-inq--ttl');
          btn_inq_ttl.textContent = 'お客様相談センター';

          small_item_four_div.appendChild(small_item_four_10);
          small_item_four_10.appendChild(btn_inq_ttl);

        //imagインナーのdiv
        const content_imag_inner_div = document.createElement('div');
        content_imag_inner_div.classList.add('imag-inner-div');
        content_main_div.appendChild(content_imag_inner_div);

        for (let i = 0; i < 5; i++) {
        const content_imag_item_div = document.createElement('div');
        content_imag_item_div.classList.add('content_imag_item_div');
        content_imag_inner_div.appendChild(content_imag_item_div);
        
          const content_imag_figure = document.createElement('figure');
          content_imag_figure.classList.add('content_imag_figure_' + (i + 1)); 
          content_imag_item_div.appendChild(content_imag_figure);

          const imgElement = document.createElement('img');
          imgElement.src = `/nav_${i + 1}.png`;
          imgElement.alt = `Image ${i + 1}`;
          imgElement.width = 210;
          imgElement.height = 140;        
          content_imag_figure.appendChild(imgElement);
          
          const figcaption = document.createElement('figcaption');

          switch(i) {
            case 0:
              figcaption.textContent = "最大6ヶ月無料の特別ローン"
              break;
            case 1:
            figcaption.textContent = "車の価格・燃費・スペックを比べてチェック"
            break;
            case 2:
            figcaption.textContent = "NOREL（ノレル）みんなのマイ・カーライフ・サブスク"
            break;
            case 3:
            figcaption.textContent = "クルマの個人売買をお手伝い"
            break;
            case 4:
            figcaption.textContent = "新車情報の車のニュース更新中"
            break;   
          }
          content_imag_figure.appendChild(figcaption);
          content_imag_item_div.appendChild(content_imag_figure);
      }
  }
  
  render(target: HTMLElement) {
    target.appendChild(this.element);
  }
}
