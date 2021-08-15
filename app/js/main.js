import {PizzaAssortment} from './PizzaAssortment';
import {HTMLCreateGoods} from "./HTMLCreateGoods";
import {sortByNamePricePopular} from "./sortByNamePricePopular";
import '../scss/style.scss';

document.addEventListener('DOMContentLoaded', () => {

    HTMLCreateGoods(PizzaAssortment)
    const btnFilterChooseAll = document.querySelector('#btn-filter-choose-all')
    btnFilterChooseAll.classList.add('types__item_clicked');

    const filterBlock = document.querySelector('.types')
    const filterBlockItems = document.querySelectorAll('.types__item')
    
    let filteredArray = [];

    filterBlock.addEventListener('click', e => {
        const filterItem = e.target

        if (filterItem.tagName !== 'LI') return
        // Анимация при выборе категории
        if (!filterItem.classList.contains('types__item_clicked')) {
            filterBlockItems.forEach(item => item.classList.remove('types__item_clicked'))
            filterItem.classList.add('types__item_clicked')
        }

        // Фильтрация
        const allGoods = document.querySelectorAll('.assortment__item');

        if (filterItem.id === 'btn-filter-choose-all') {
            
            allGoods.forEach(item => item.remove())
            HTMLCreateGoods(PizzaAssortment)
            sortByNamePricePopular(PizzaAssortment)
        } else {

            allGoods.forEach(item => item.remove())
            filteredArray = PizzaAssortment.filter(item => item.filterKey === filterItem.textContent.toLowerCase())
            
            HTMLCreateGoods(filteredArray)
            sortByNamePricePopular(filteredArray)
        }
        
    })
})