import { HTMLCreateGoods } from "./HTMLCreateGoods"
export function sortByNamePricePopular(array) {
    popupForSortList()

    // Изменение текста кнопки и фильтрация по названию\цену\популярности
    const sortItem = document.querySelectorAll('.sort__item')
    const sortButton = document.querySelector('.sort__choosen')

    sortItem.forEach(item => item.addEventListener('click', e => {
        const filterItem = e.target;
        sortButton.textContent = filterItem.textContent;

        const allGoods = document.querySelectorAll('.assortment__item');
        if(filterItem.id === 'name'){
            allGoods.forEach(item => item.remove())
            sortArrayByName(array)
            
            HTMLCreateGoods(array)

        }
        else if(filterItem.id === 'price'){
            allGoods.forEach(item => item.remove())
            sortArrayByPrice(array)
            HTMLCreateGoods(array)
        }
    }))

}

function popupForSortList(){
    const sortBlock = document.querySelector('.sort');
    const sortList = document.querySelector('.sort__list');

    sortBlock.addEventListener('click', () => {
        sortList.classList.toggle('open')
  
    })
}
function sortArrayByPrice(array){
    array.sort((frstItem, scndItem) => frstItem.price - scndItem.price)
}

function sortArrayByName(array){
    array.sort((frstItem, scndItem) => {
        if(frstItem.title > scndItem.title) return 1;
        if(frstItem.title === scndItem.title) return 0;
        if(frstItem.title < scndItem.title) return -1;
    })
}