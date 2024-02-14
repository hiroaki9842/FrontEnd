import './question.css';
export class Question {
    constructor() {
        this.element = document.createElement('section');
        const question_header = document.createElement('h2');
        question_header.classList.add('question_header');
        this.element.appendChild(question_header);
        const question_header_span = document.createElement('span');
        question_header_span.classList.add('question_header_span');
        question_header_span.textContent = 'ガリバーの店舗によくあるご質問';
        question_header.appendChild(question_header_span);
        const question_main = document.createElement('div');
        question_main.classList.add('question_main');
        this.element.appendChild(question_main);
        for (let i = 0; i < 6; i++) {
            const question_item = document.createElement('div');
            question_item.classList.add('question_item');
            question_main.appendChild(question_item);
            const question_item_h4 = document.createElement('h4');
            question_item_h4.classList.add('question_item_h4');
            question_item.appendChild(question_item_h4);
            const question_item_h4_span = document.createElement('span');
            question_item_h4_span.classList.add('question_item_h4_span');
            question_item_h4.appendChild(question_item_h4_span);
            const question_item_answer = document.createElement('div');
            question_item_answer.classList.add('question_item_answer');
            question_item.appendChild(question_item_answer);
            const question_item_answer_span = document.createElement('span');
            question_item_answer_span.classList.add('question_item_answer_span');
            question_item_answer.appendChild(question_item_answer_span);
            const question_item_link_div = document.createElement('div');
            question_item_link_div.classList.add('question_item_link_div');
            const question_item_link = document.createElement('a');
            question_item_link.classList.add('question_item_link');
            const question_item_text = document.createElement('p');
            question_item_text.classList.add('question_item_text');
            const question_item_ul = document.createElement('ul');
            question_item_ul.classList.add('question_item_ul');
            const question_item_li = document.createElement('li');
            question_item_li.classList.add('question_item_li');
            switch (i) {
                case 0:
                    question_item_h4_span.textContent = "鳥取県のガリバーの店舗はどこにありますか？";
                    question_item_answer_span.textContent = "鳥取県には4店のガリバー店舗があります。買い取ったばかりの最新販売在庫情報から理想のクルマを見つけてください";
                    question_item_link.textContent = "鳥取県の販売店一覧を見る";
                    question_item.appendChild(question_item_link_div);
                    question_item_link_div.appendChild(question_item_link);
                    break;
                case 1:
                    question_item_h4_span.textContent = "鳥取県にある中古車を見たいのですが、インターネットで見ることはできますか？";
                    question_item_answer_span.textContent = "はい、下記リンクから鳥取県の中古車をご覧いただけます。";
                    question_item_link.textContent = "https://221616.com/search/tottori/";
                    question_item_text.textContent = "その他、サイトには載っていない新着中古車が店頭に並んでいる場合もございますので、ぜひご来店いただき、お店のスタッフにお声がけください。";
                    question_item.appendChild(question_item_link_div);
                    question_item_link_div.appendChild(question_item_link);
                    question_item.appendChild(question_item_text);
                    break;
                case 2:
                    question_item_h4_span.textContent = "自動車保険の取扱いはありますか？";
                    question_item_answer_span.textContent = "ガリバーでは保険を取扱っております。";
                    question_item_text.textContent = "ガリバーでは、長期契約やローンと保険が組み合わさった「ほけろん」といった様々な保険を取り扱っております。保険商品によっては一部対象外の店舗がございます。詳しくはお近くのお店までお問い合わせください。";
                    question_item_link.textContent = "ガリバー自動車保険について詳しく見る";
                    question_item.appendChild(question_item_text);
                    question_item_link_div.appendChild(question_item_link);
                    question_item.appendChild(question_item_link_div);
                    break;
                case 3:
                    question_item_h4_span.textContent = "ガリバーで車を買うとき、車に保証は付きますか？";
                    question_item_answer_span.textContent = "国産車は3カ月、輸入車は1カ月の保証(部分保証)付き※です。";
                    question_item_text.textContent = "また、有料プランで保証期間の延長を行うことができます。お選びになったおクルマの年式、走行距離によって保証を維持できる期間が異なります。詳しくはお店のスタッフまでお問い合わせください。";
                    question_item_li.textContent = "G-Selection、GT-Garage、LIBERALA麻布、ガリバーフリマ、Brat店舗など一部店舗では修復歴車/保証の対象外/返品対象外の中古車も販売しています。";
                    question_item.appendChild(question_item_text);
                    question_item.appendChild(question_item_ul);
                    question_item_ul.appendChild(question_item_li);
                    break;
                case 4:
                    question_item_h4_span.textContent = "車検や修理といったアフターサービスはありますか？";
                    question_item_answer_span.textContent = "対応可能です。";
                    question_item_text.innerHTML = '<span class="shop-orange">ガリバーのアフターサービスは、全国の店舗で受けていただくことが可能です。</span> 他県のガリバーで購入した車も鳥取県のお店で修理対応します。 お近くのお店までお問い合わせください。';
                    question_item.appendChild(question_item_text);
                    question_item_link.textContent = "アフターサービスについて詳しく知る";
                    question_item.appendChild(question_item_link_div);
                    question_item_link_div.appendChild(question_item_link);
                    const question_item_text_second = document.createElement('p');
                    question_item_text_second.classList.add('question_item_text');
                    question_item_text_second.textContent = "ガリバーの車検は全国の約460店舗※1と700拠点※2のガリバー認定工場で車検を実施しております。お近くのガリバー店舗にご相談ください。";
                    question_item.appendChild(question_item_text_second);
                    const question_item_link_div_second = document.createElement('div');
                    question_item_link_div_second.classList.add('question_item_link_div');
                    question_item.appendChild(question_item_link_div_second);
                    const question_item_link_secound = document.createElement('a');
                    question_item_link_secound.textContent = "車検について詳しく知る";
                    question_item_link_secound.classList.add('question_item_link');
                    question_item_link_div_second.appendChild(question_item_link_secound);
                    const question_item_ul_second = document.createElement('ul');
                    question_item_ul_second.classList.add('question_item_ul');
                    question_item.appendChild(question_item_ul_second);
                    for (let li_count = 0; li_count < 2; li_count++) {
                        const question_item_li = document.createElement('li');
                        question_item_li.classList.add('question_item_li');
                        switch (li_count) {
                            case 0:
                                question_item_li.textContent = `当社調べ2018年11月時点 当社直営店、加盟店の合算店舗数`;
                                break;
                            case 1:
                                question_item_li.textContent = `2018年11月時点`;
                                break;
                        }
                        question_item_ul_second.appendChild(question_item_li);
                    }
                    break;
                case 5:
                    question_item_h4_span.textContent = "看板の色が違うお店は何が違うのですか？";
                    question_item_answer_span.textContent = "取り扱うお車やコンセプトにより看板が異なります。";
                    for (let p_count = 0; p_count < 2; p_count++) {
                        const question_item_text = document.createElement('p');
                        question_item_text.classList.add('question_item_text');
                        switch (p_count) {
                            case 0:
                                question_item_text.textContent = `ガリバーには下記8種類のお店がございます。お店選びの参考にしてみてください。`;
                                break;
                            case 1:
                                question_item_text.innerHTML =
                                    `<span class="shop-orange">ガリバー：</span>皆様おなじみ主に中古車の買取を行っている店。敷地が大きな店舗に関しては販売にも力を入れています。<br>
                  <span class="shop-orange">ガリバーアウトレット：</span>中古車の販売を主に行っています。車の買取も行っていますので、クルマの乗り換えならここ！<br>
                  <span class="shop-orange">ガリバーミニクル：</span>中古軽自動車専門店。専門店だから、多くの軽自動車を乗り比べられます！キッズコーナー完備でお母さんも安心。<br>
                  <span class="shop-orange">スナップハウス：</span>ミニバンやSUVをはじめとしたファミリーカー専門店。ゆったりとした店内でくつろぎながらお車選びができます。<br>
                  <span class="shop-orange">ワオタウン：</span>ガリバー系列店の中でも一際大きな展示場が特徴のお店です。ご家族で参加できるイベントが盛りだくさん！<br>
                  <span class="shop-orange">HUNT：</span>ガリバーproduceのセレクトショップ。軽自動車から輸入車まで様々な車種が「見て」「触って」「乗れる」新しいおクルマ選びのお店です。<br>
                  <span class="shop-orange">LIBERALA：</span>外車・輸入車の専門店。お客様のリアルな感性を第一にした最良の一台を提案します。一ランク上のご提案をあなたに。<br>
                  <span class="shop-orange">BRAT：</span>自然を楽しむライフスタイルをSUV専門店です。車だけでなく、アウトドア用品も併せて販売しています。ぶらっとお立ち寄りください。`;
                                break;
                        }
                        question_item.appendChild(question_item_text);
                    }
                    break;
            }
        }
    }
    getElement() {
        return this.element;
    }
}
//# sourceMappingURL=question.js.map