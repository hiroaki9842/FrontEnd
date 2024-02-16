import './car_stock.css';
export class CarStock {
    constructor() {
        this.element = document.createElement('section');
        this.element.classList.add('carstock-section');
        const carstock_header = document.createElement('h2');
        carstock_header.classList.add('carstock-header');
        this.element.appendChild(carstock_header);
        const carstock_header_span = document.createElement('span');
        carstock_header_span.classList.add('carstock-header-span');
        carstock_header_span.textContent = '鳥取県の中古車・在庫情報';
        carstock_header.appendChild(carstock_header_span);
        const stockcar_div = document.createElement('div');
        stockcar_div.classList.add('stockcar_div');
        this.element.appendChild(stockcar_div);
        const message_btn = document.createElement('div');
        message_btn.classList.add('message-btn');
        stockcar_div.appendChild(message_btn);
        const message_text = document.createElement('p');
        message_text.classList.add('message-text');
        message_text.innerHTML = "鳥取県のガリバー店舗にある中古車在庫情報を検索できます。<br>気になる中古車を見つけたら、ぜひ店舗にお問い合わせください。";
        message_btn.appendChild(message_text);
        const btn_div = document.createElement('div');
        btn_div.classList.add('btn-div');
        message_btn.appendChild(btn_div);
        const btn_a = document.createElement('a');
        btn_a.classList.add('btn-a');
        btn_div.appendChild(btn_a);
        const btn_span = document.createElement('span');
        btn_span.classList.add('btn-span');
        btn_span.textContent = "鳥取県の中古車情報を見る";
        btn_a.appendChild(btn_span);
        const img_box_ul = document.createElement('ul');
        img_box_ul.classList.add('img-box-ul');
        stockcar_div.appendChild(img_box_ul);
        const special_note_ul = document.createElement('ul');
        special_note_ul.classList.add('special-note-ul');
        img_box_ul.appendChild(special_note_ul);
        const special_note_li = document.createElement('li');
        special_note_li.textContent = "保証期間の詳細は遷移先の「保証サービスのご案内」をご確認ください。";
        special_note_li.classList.add('special-note-li');
        special_note_ul.appendChild(special_note_li);
        const car_img_box = document.createElement('div');
        car_img_box.classList.add('car-img-box');
        img_box_ul.appendChild(car_img_box);
        for (let car_img_count = 1; car_img_count <= 8; car_img_count++) {
            const img_a = document.createElement('a');
            img_a.classList.add('img-a');
            car_img_box.appendChild(img_a);
            const img_figure = document.createElement('figure');
            img_figure.classList.add('img-figure');
            img_a.appendChild(img_figure);
            const img_tag = document.createElement('img');
            img_tag.classList.add('img-tag');
            img_figure.appendChild(img_tag);
            const img_figcaption = document.createElement('figcaption');
            img_figcaption.classList.add('img-figcaption');
            img_figure.appendChild(img_figcaption);
            for (let figcaption_span_count = 1; figcaption_span_count <= 4; figcaption_span_count++) {
                const figcaption_span = document.createElement('span');
                switch (figcaption_span_count) {
                    case 1:
                        figcaption_span.classList.add('car-stock-name');
                        figcaption_span.textContent = "マツダ アテンザ ワゴン 25S Lパッケージ";
                        img_figcaption.appendChild(figcaption_span);
                        break;
                    case 2:
                        figcaption_span.classList.add('car-stock-total-price');
                        img_figcaption.appendChild(figcaption_span);
                        const total_price_span = document.createElement('span');
                        total_price_span.classList.add('desc');
                        total_price_span.textContent = "100.";
                        figcaption_span.appendChild(total_price_span);
                        const one_price_span = document.createElement('span');
                        one_price_span.textContent = "8万円";
                        total_price_span.appendChild(one_price_span);
                        const title_span = document.createElement('span');
                        title_span.classList.add('ttl');
                        title_span.textContent = "支払い総額";
                        figcaption_span.appendChild(title_span);
                        const one_title_span = document.createElement('span');
                        one_title_span.textContent = "(税込)";
                        title_span.appendChild(one_title_span);
                        break;
                    case 3:
                        figcaption_span.classList.add('car-stock-date upper');
                        img_figcaption.appendChild(figcaption_span);
                        const vehicle_price_span = document.createElement('span');
                        vehicle_price_span.classList.add('datalist');
                        vehicle_price_span.textContent = "121.5万円";
                        const vehicle_price_ttl = document.createElement('span');
                        vehicle_price_ttl.classList.add('ttl');
                        vehicle_price_ttl.textContent = "車両価格";
                        vehicle_price_span.insertBefore(vehicle_price_ttl, vehicle_price_span.firstChild);
                        figcaption_span.appendChild(vehicle_price_span);
                        const expenses_price_span = document.createElement('span');
                        expenses_price_span.classList.add('datalist');
                        expenses_price_span.textContent = "8.3万円";
                        const expenses_price_ttl = document.createElement('span');
                        expenses_price_ttl.classList.add('ttl');
                        expenses_price_ttl.textContent = "諸費用";
                        expenses_price_span.insertBefore(expenses_price_ttl, expenses_price_span.firstChild);
                        figcaption_span.appendChild(expenses_price_span);
                        break;
                    case 4:
                        figcaption_span.classList.add('car-stock-date lower');
                        img_figcaption.appendChild(figcaption_span);
                        break;
                }
            }
        }
    }
    getElement() {
        return this.element;
    }
}
//# sourceMappingURL=car_stock.js.map