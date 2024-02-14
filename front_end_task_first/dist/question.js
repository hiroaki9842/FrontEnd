import './question.css';
export class Question {
    constructor() {
        this.element = document.createElement('section');
        this.element.classList.add('question_main');
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
                    question_item_text.textContent = "ガリバーのアフターサービスは、全国の店舗で受けていただくことが可能です。 他県のガリバーで購入した車も鳥取県のお店で修理対応します。 お近くのお店までお問い合わせください。";
                    question_item.appendChild(question_item_text);
                    question_item_link.textContent = "アフターサービスについて詳しく知る";
                    question_item.appendChild(question_item_link_div);
                    question_item_link_div.appendChild(question_item_link);
                    const question_item_text_second = document.createElement('p');
                    question_item_text_second.classList.add('question_item_text');
                    question_item_text_second.textContent = "ガリバーの車検は全国の約460店舗※1と700拠点※2のガリバー認定工場で車検を実施しております。お近くのガリバー店舗にご相談ください。";
                    question_item.appendChild(question_item_text_second);
                    const question_item_link_second = document.createElement('a');
                    question_item_link_second.classList.add('question_item_link');
                    question_item_link_second.textContent = "車検について詳しく知る";
                    question_item.appendChild(question_item_link_div);
                    question_item_link_div.appendChild(question_item_link_second);
                    break;
                case 5:
                    question_item_h4_span.textContent = "看板の色が違うお店は何が違うのですか？";
                    question_item_answer_span.textContent = "取り扱うお車やコンセプトにより看板が異なります。";
                    break;
            }
        }
    }
    getElement() {
        return this.element;
    }
}
//# sourceMappingURL=question.js.map