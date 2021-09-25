import {
    renderGoodsCards
} from "./HTMLCreateGoods";
import {
    PizzaAssortment
} from './PizzaAssortment';
export function sortPizza() {


    let filteredArray = [];

    const filterBlock = document.querySelector('.types')
    const filterBlockItems = document.querySelectorAll('.types__item')

    filterBlock.addEventListener('click', ({
        target
    }) => {
        const allGoods = document.querySelectorAll('.assortment__item');

        if (target.tagName !== 'LI') return;
        //Анимация кнопок
        if (!target.classList.contains('types__item_clicked')) {
            filterBlockItems.forEach(item => item.classList.remove('types__item_clicked'))
            target.classList.add('types__item_clicked')
        }

        // Фильтрация
        if (target.id === 'btn-filter-choose-all') {
            allGoods.forEach(item => item.remove())
            renderGoodsCards(PizzaAssortment)
        } else {
            allGoods.forEach(item => item.remove())
            filteredArray = PizzaAssortment.filter(item => item.filterKey === target.textContent.toLowerCase())
            renderGoodsCards(filteredArray)
        }

    })


    function popupForSort() {
        const sortBlock = document.querySelector('.sort');
        const sortList = document.querySelector('.sort__list');
        const sortArrow = document.querySelector('.sort__svg');
        const sortButton = document.querySelector('.sort__choosen')

        sortBlock.addEventListener('click', ({target}) => {
            sortList.classList.toggle('open')
            sortButton.textContent = target.textContent

        })
    }
    function sortingPizza(){
        const sortItem = document.querySelectorAll('.sort__item');
        sortItem.forEach(item =>{
            item.addEventListener('click', ({target}) =>{
                if(target.id === 'popularity'){

                }
                if(target.id === 'name'){
                    sortByName()
                }
                if(target.id === 'price'){
                    sortByPrice()
                }
            })
        })
    }

    function sortByName(array) {
        array.sort((frstItem, scndItem) => {
            if (frstItem.title > scndItem.title) return 1;
            if (frstItem.title === scndItem.title) return 0;
            if (frstItem.title < scndItem.title) return -1;
        })
    }

    function sortByPrice(array){
        array.sort((frstItem, scndItem) => frstItem.price - scndItem.price)
    }

    popupForSort()
    sortingPizza()
}