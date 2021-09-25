import {PizzaAssortment} from './PizzaAssortment';
import {renderGoodsCards} from "./HTMLCreateGoods";
import {sortPizza} from "./sortPizza";
// import { popupForSort } from './sortByNamePricePopular';
import '../scss/style.scss';

document.addEventListener('DOMContentLoaded', () => {
    // popupForSort();
    renderGoodsCards(PizzaAssortment)
    const btnFilterChooseAll = document.querySelector('#btn-filter-choose-all')
    btnFilterChooseAll.classList.add('types__item_clicked');


    sortPizza()
    // 
    const pizzaType = document.querySelectorAll('.pizza-information__item');
    

    // if (!filterItem.classList.contains('types__item_clicked')) {
    //     filterBlockItems.forEach(item => item.classList.remove('types__item_clicked'))
    //     filterItem.classList.add('types__item_clicked')
    // }
})