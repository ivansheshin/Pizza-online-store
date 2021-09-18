import {
    renderGoodsCards
} from "./HTMLCreateGoods";
import {PizzaAssortment} from './PizzaAssortment';
export function sortByNamePricePopular() {

    //     // Изменение текста кнопки и фильтрация по названию\цену\популярности
    //     const sortItem = document.querySelectorAll('.sort__item')
    //     const sortButton = document.querySelector('.sort__choosen')

    //     sortItem.forEach(item => item.addEventListener('click', e => {
    //         const target = e.target;
    //         sortButton.textContent = target.textContent;

    //         const allGoods = document.querySelectorAll('.assortment__item');
    //         if(target.id === 'name'){
    //             allGoods.forEach(item => item.remove())
    //             sortArrayByName(array)

    //             renderGoodsCards(array)

    //         }
    //         else if(target.id === 'price'){
    //             allGoods.forEach(item => item.remove())
    //             sortArrayByPrice(array)
    //             renderGoodsCards(array)
    //         }
    //     }))

    // }

    // export function popupForSort(){
    //     const sortBlock = document.querySelector('.sort');
    //     const sortList = document.querySelector('.sort__list');
    //     const sortArrow = document.querySelector('.sort__svg');

    //     sortBlock.addEventListener('click', () => {
    //         sortList.classList.toggle('open')

    //     })
    // }
    // function sortArrayByPrice(array){
    //     array.sort((frstItem, scndItem) => frstItem.price - scndItem.price)
    // }

    // function sortArrayByName(array){
    //     array.sort((frstItem, scndItem) => {
    //         if(frstItem.title > scndItem.title) return 1;
    //         if(frstItem.title === scndItem.title) return 0;
    //         if(frstItem.title < scndItem.title) return -1;
    //     })
    // }
    const filterBlock = document.querySelector('.types')
    const filterBlockItems = document.querySelectorAll('.types__item')
    
    let filteredArray = [];
    
    filterBlock.addEventListener('click', ({target}) => {

        if (target.tagName !== 'LI') return
        // Анимация при выборе категории
        if (!target.classList.contains('types__item_clicked')) {
            filterBlockItems.forEach(item => item.classList.remove('types__item_clicked'))
            target.classList.add('types__item_clicked')
        }

        // Фильтрация по категориям
        const allGoods = document.querySelectorAll('.assortment__item');

        if (target.id === 'btn-filter-choose-all') {
            allGoods.forEach(item => item.remove())
            renderGoodsCards(PizzaAssortment)
        } else {

            allGoods.forEach(item => item.remove())
            filteredArray = PizzaAssortment.filter(item => item.filterKey === target.textContent.toLowerCase())
            renderGoodsCards(filteredArray)
            sortByNamePricePopular(filteredArray)
        }

    })
}