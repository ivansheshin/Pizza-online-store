export function sortByNamePricePopular(array) {
    popupForSortList()

    // Изменение текста кнопки и фильтрация по названию\цену\популярности
    const sortItem = document.querySelectorAll('.sort__item')
    const sortButton = document.querySelector('.sort__choosen')

    sortItem.forEach(item => item.addEventListener('click', e => {
        const filterItem = e.target;
        sortButton.textContent = filterItem.textContent;
        if(filterItem.id === 'popularity'){
            return
        }
        if(filterItem.id === 'name'){
            array.sort((frstItem, scndItem) => {
                if(frstItem.title > scndItem.title) return 1;
                if(frstItem.title === scndItem.title) return 0;
                if(frstItem.title < scndItem.title) return -1;
            })
        }
        else if(filterItem.id === 'price'){
            array.sort((frstItem, scndItem) => frstItem.price - scndItem.price)
        }
        console.log(array)

    }))

}

function popupForSortList(){
    const sortBlock = document.querySelector('.sort');
    const sortList = document.querySelector('.sort__list');

    sortBlock.addEventListener('click', () => {
        sortList.classList.toggle('open')
  
    })
}