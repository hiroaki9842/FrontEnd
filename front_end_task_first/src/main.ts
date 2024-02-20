import './main.css';
import { ShopHeader } from './shop_header';
import { ShopOptionsTop} from './shop_options_top';
import { ShopData } from './shop_data';
import { RegionPrefecture } from './region_prefecture';
import { CarStock } from './car_stock';
import { MarkerBody } from './marker_body';
import { Question } from './question';

export class Main {
  private element: HTMLElement;
  
  constructor() {
    // HTMLDivElementとして初期化
    this.element = document.createElement('main');
    this.element.classList.add('main-content'); 

    const shopheader = new ShopHeader();
    this.element.appendChild(shopheader.getElement());

    const shop_options_top = new ShopOptionsTop();
    this.element.appendChild(shop_options_top.getElement());

    const shopdata = new ShopData();
    this.element.appendChild(shopdata.getElement());

    const regionprefecture = new RegionPrefecture();
    this.element.appendChild(regionprefecture.getElement());

    const carstock = new CarStock();
    this.element.appendChild(carstock.getElement());

    const markerbody = new MarkerBody();
    this.element.appendChild(markerbody.getElement());

    const question = new Question();
    this.element.appendChild(question.getElement());

    // this.element.appendChild(content);
  }

  render(target: HTMLElement) {
    target.appendChild(this.element);
  }
}
