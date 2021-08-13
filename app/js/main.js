import {PizzaAssortment} from './PizzaAssortment';
import {HTMLCreateGoods} from "./HTMLCreateGoods";
import {sortByNamePricePopular} from "./sortingPizzaByNamePricePopularity";
import '../scss/style.scss';


// Сортировка по виду пиццы
document.addEventListener('DOMContentLoaded', () => {
    HTMLCreateGoods(PizzaAssortment)
    
    const btnFilterChooseAll = document.querySelector('#btn-filter-choose-all')
    btnFilterChooseAll.classList.add('types__item_clicked');


    const filter = document.querySelector('.types')
    const filterAllItem = document.querySelectorAll('.types__item')
    // Логика фильтра
    let filteredArray = [];

    filter.addEventListener('click', e => {
        if (e.target.tagName !== 'LI') return

        const filterItem = e.target
        // Изменение анимации элементов списка у фильтра
        if (!filterItem.classList.contains('types__item_clicked')) {
            filterAllItem.forEach(item => item.classList.remove('types__item_clicked'))
            filterItem.classList.add('types__item_clicked')
        }
        // Отображение товаров в зависимости от выбранного фильтра
        const deleteDOMElem = document.querySelectorAll('.assortment__item');

        if (filterItem.id === 'btn-filter-choose-all') {
            deleteDOMElem.forEach(item => item.remove())
            HTMLCreateGoods(PizzaAssortment)
            
        } else {
            deleteDOMElem.forEach(item => item.remove())
            filteredArray = PizzaAssortment.filter(item => item.filterKey === filterItem.textContent.toLowerCase())

            HTMLCreateGoods(filteredArray)
        }


    })
})
