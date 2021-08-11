import {PizzaAssortment} from './PizzaAssortment'
import {HTMLCreate} from "./HTMLcreate";
import '../scss/style.scss';

// Сортировка по виду пиццы
document.addEventListener('DOMContentLoaded', () => {
    HTMLCreate(PizzaAssortment)
    // Навешивание стиля на фильтр "Все" при загрузке DOM
    const filterAll = document.querySelector('#all')
    filterAll.classList.add('clicked')
    // Константы для фильтра и его элементов
    const filter = document.querySelector('.types')
    const filterAllItem = document.querySelectorAll('.types__item')

    // Логика фильтра
    filter.addEventListener('click', e => {
        if (e.target.tagName !== 'LI') return

        const filterItem = e.target
        // Изменение анимации элементов списка у фильтра
        if (!filterItem.classList.contains('clicked')) {
            filterAllItem.forEach(item => item.classList.remove('clicked'))
            filterItem.classList.add('clicked')
        }
        // Отображение товаров в зависимости от выбранного фильтра
        const deleteDOMElem = document.querySelectorAll('.assortment__item');
        if (filterItem.textContent === 'Все') {
            deleteDOMElem.forEach(item => item.remove())
            HTMLCreate(PizzaAssortment)
        } else {
            deleteDOMElem.forEach(item => item.remove())
            const filteredArray = PizzaAssortment.filter(item => item.filterKey === filterItem.textContent.toLowerCase())

            HTMLCreate(filteredArray)
        }

    })
})
// Сортировка по популярности, названию и цене
function sortAssortmentAndAddPopup() {


    // Попап для сортировки


    // Изменение текста кнопки при выборе пункта фильтра
    sortItem.forEach(item => item.addEventListener('click', e => {
        const filterItem = e.target;
        sortButton.textContent = filterItem.textContent
        if (filterItem.textContent === 'Названию') {
            // const filteredArrayByName = PizzaAssortment;
            let filteredArrayByName = PizzaAssortment.sort((frstElem, scndElem) => {
                if (frstElem.title > scndElem.title) return 1;
                if (frstElem.title === scndElem.title) return 0;
                if (frstElem.title < scndElem.title) return -1;
            })
            
        }
    }))

}